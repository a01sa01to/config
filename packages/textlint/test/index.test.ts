import { expect, test } from '@jest/globals'

import { setupLinter } from './common'

test('should be setup', async () => {
  const { linter } = await setupLinter()
  expect(linter).not.toBeUndefined()
})

test('can lint markdown', async () => {
  const { descriptor } = await setupLinter()
  expect(descriptor.availableExtensions).toContain('.md')
})

test('ja-no-abusage', async () => {
  const { linter } = await setupLinter()
  const result = await linter.fixText(
    '`logger` と `crashReporter` の middleware を適応した `createStore` 関数を作る',
    'README.md',
  )
  expect(result.output).toBe(
    '`logger` と `crashReporter` の middleware を適用した `createStore` 関数を作る',
  )
  // ブレあるけど、なんか時間がかかるらしいので
}, 10000)

test('ja-space-around-code', async () => {
  const { linter } = await setupLinter()
  const result = await linter.fixText('`logger`と`crashReporter`', 'README.md')
  expect(result.output).toBe('`logger` と `crashReporter`')
})

test('ja-space-around-link', async () => {
  const { linter } = await setupLinter()
  const result = await linter.fixText(
    'ほげ[README](./README.md)ほげほげ',
    'README.md',
  )
  expect(result.output).toBe('ほげ [README](./README.md) ほげほげ')
})

test('ja-space-between-half-and-full-width', async () => {
  const { linter } = await setupLinter()
  const result = await linter.fixText(
    '英語English・日本語Japanese',
    'README.md',
  )
  expect(result.output).toBe('英語 English・日本語 Japanese')
})

test('no-mixed-zenkaku-and-hankaku-alphabet', async () => {
  const { linter } = await setupLinter()
  const result = await linter.fixText('ａｂｃｄｅｆｇｈｉｊ', 'README.md')
  expect(result.output).toBe('abcdefghij')
})

test('no-nfd', async () => {
  const { linter } = await setupLinter()
  const result = await linter.fixText('ホ゜ケットエンシ゛ン', 'README.md')
  expect(result.output).toBe('ポケットエンジン')
})

test('prefer-tari-tari', async () => {
  const { linter } = await setupLinter()
  const result = await linter.lintText(
    'プログラムを書いたり、文章を書いている',
    'README.md',
  )
  expect(result.messages.length).toBe(1)
})
