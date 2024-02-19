import { ESLint } from 'eslint'

import config from '../src/index'

export function createESLintInstance() {
  return new ESLint({
    useEslintrc: false,
    overrideConfig: config,
  })
}
