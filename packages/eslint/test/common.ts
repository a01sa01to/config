import { ESLint } from 'eslint'

import config from '../src/index.js'

const createESLintInstance = () =>
  new ESLint({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
    overrideConfig: config as any,
    overrideConfigFile: true,
  })

export { createESLintInstance }
