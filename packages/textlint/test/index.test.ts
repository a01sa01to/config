import { expect, test } from '@jest/globals'

import { setupLinter } from './common'

test('should be setup', async () => {
  const { linter } = await setupLinter()
  expect(linter).not.toBeUndefined()
})
