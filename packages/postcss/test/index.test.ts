import { expect, test } from '@jest/globals'
import postcss from 'postcss'

import config from '../src';

test('should be setup', async () => {
  // @ts-expect-error - Type 'boolean' is not assignable to type 'AcceptedPlugin'.
  const instance = postcss(config.plugins);
  expect(instance).not.toBeUndefined()
})
