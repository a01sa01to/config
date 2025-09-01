import { expect, test } from 'vitest'

import * as prettier from 'prettier'

import option from '../src/index.js'

test('should be setup', async () => {
  const res = await prettier.format("const foo = 'bar';", {
    ...option,
    filepath: 'foo.js',
  })
  expect(res).toBe("const foo = 'bar'\n")
})
