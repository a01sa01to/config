import { afterEach, expect, test } from '@jest/globals'
import postcss, { type ProcessOptions } from 'postcss'

import { plugins, testonly_resetShortNameGenerator } from '../src'

afterEach(() => {
  testonly_resetShortNameGenerator()
})

const processOption: ProcessOptions = {
  // Without `from` option PostCSS could generate wrong source map and will not find Browserslist config.
  // Set it to CSS file path or to `undefined` to prevent this warning. となるので undefined を設定
  from: undefined,
  map: false,
}

test('should be setup', () => {
  const instance = postcss(plugins)
  expect(instance).not.toBeUndefined()
})

test('shortname', async () => {
  const instance = postcss(plugins)
  const css = `
.foo {
  color: red;
}
`.trim()
  const result = await instance.process(css, processOption)
  expect(result.css).toBe('.a{color:red}')
})

test('postcss-combine-duplicated-selectors', async () => {
  const instance = postcss(plugins)
  const css = `
.foo {
  color: red;
}
.bar {
  color: blue;
}
.foo {
  background-color: red;
}
`.trim()
  const result = await instance.process(css, processOption)
  expect(result.css).toBe('.a{background-color:red;color:red}.b{color:blue}')
})

test('postcss-calc', async () => {
  const instance = postcss(plugins)
  const css = `
.foo {
  font-size: calc(16px * 2);
}
`.trim()
  const result = await instance.process(css, processOption)
  expect(result.css).toBe('.a{font-size:32px}')
})

// autoprefixer は caniuse の結果に左右されちゃうのでテストはスキップする
// まあほんとは autoprefixer config mock するんだろうけどめんどくさいので...
// test('autoprefixer', async () => { })

test('cssnano', async () => {
  const instance = postcss(plugins)
  const css = `
.foo {
  color: #ff0000;
  font-weight: 400;
  font-weight: 400;
}
`.trim()
  const result = await instance.process(css, processOption)
  expect(result.css).toBe('.a{color:red;font-weight:400}')
})
