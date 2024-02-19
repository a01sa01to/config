import { expect, test } from '@jest/globals'

import { createESLintInstance } from './common'

test('should be setup', async () => {
  const instance = createESLintInstance()
  expect(instance).not.toBeUndefined()
  instance.lintText('const a = 1;')
})
