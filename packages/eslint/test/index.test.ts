/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { expect, test } from '@jest/globals'

import { createESLintInstance } from './common'

test('should be setup', () => {
  const instance = createESLintInstance()
  expect(instance).not.toBeUndefined()
})

test('no-used-vars', async () => {
  const instance = createESLintInstance()
  const res = await instance.lintText('const foo = 1')
  expect(res).toHaveLength(1)
  expect(res[0]!.errorCount).toBeGreaterThan(0)
})

test('unused-imports', async () => {
  const instance = createESLintInstance()
  const res = await instance.lintText("import { foo } from './foo'")
  expect(res).toHaveLength(1)
  expect(res[0]!.errorCount).toBeGreaterThan(0)
})
