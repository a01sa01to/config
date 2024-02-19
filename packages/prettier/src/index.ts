import type { Config } from 'prettier'

const config: Config = {
  useTabs: false,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
}

export default config
module.exports = config

// memo: テストはなんか jest がうまくいかないのでやってない
