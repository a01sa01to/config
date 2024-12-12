import { ESLint } from 'eslint'

import config from '../src/index'

export function createESLintInstance() {
  return new ESLint({
    overrideConfigFile: true,
    overrideConfig: config as any,
  })
}
