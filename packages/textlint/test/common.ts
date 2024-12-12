import { createLinter, loadTextlintrc } from 'textlint'
import { TextlintKernelDescriptor } from '@textlint/kernel'

import config from '../src/index'

// ts 対応させるため
// ref: https://zenn.dev/ossamoon/articles/694a601ee62526
const objectKeys = <T extends Record<string, unknown>>(obj: T): (keyof T)[] =>
  Object.keys(obj)

export const setupLinter = async () => {
  const rules = objectKeys(config.rules).map(key => ({
    options: config.rulesConfig[key],
    rule: config.rules[key],
    ruleId: key,
  }))

  const descriptor = new TextlintKernelDescriptor({
    filterRules: [],
    plugins: [],
    rules,
  }).concat(await loadTextlintrc())

  const linter = createLinter({ descriptor })

  return { descriptor, linter }
}
