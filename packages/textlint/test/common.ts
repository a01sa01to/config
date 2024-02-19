import { TextlintKernelDescriptor } from '@textlint/kernel'
import { createLinter, loadTextlintrc } from 'textlint'

import config from '../src/index'

// ts 対応させるため
// ref: https://zenn.dev/ossamoon/articles/694a601ee62526
const Object_keys = <T extends { [key: string]: unknown }>(
  obj: T,
): (keyof T)[] => {
  return Object.keys(obj)
}

export const setupLinter = async () => {
  const rules = Object_keys(config.rules).map(key => {
    return {
      ruleId: key,
      rule: config.rules[key],
      options: config.rulesConfig[key],
    }
  })

  const descriptor = new TextlintKernelDescriptor({
    rules,
    filterRules: [],
    plugins: [],
  }).concat(await loadTextlintrc())

  const linter = createLinter({ descriptor })

  return { linter, descriptor }
}
