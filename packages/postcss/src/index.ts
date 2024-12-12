import type { AcceptedPlugin } from 'postcss'
import type { Config } from 'postcss-load-config'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcssCalc from 'postcss-calc'
import postcssCombineDuplicatedSelectors from 'postcss-combine-duplicated-selectors'
import postcssModules from 'postcss-modules'

import { generateShortName } from './shortname-generator'

let shortNameGenerator = generateShortName()
const shortNameMemo = new Map<string, string>()

// eslint-disable-next-line camelcase
const testonly_resetShortNameGenerator = () => {
  shortNameGenerator = generateShortName()
  shortNameMemo.clear()
}

const autoprefixerConfig: autoprefixer.Options = {
  overrideBrowserslist: ['last 2 versions', 'not dead'],
}

const modulesConfig = {
  generateScopedName: (name: string, filename: string): string => {
    const hash = /\.module\.s?css$/u.test(filename)
      ? `${filename}:${name}`
      : name

    const memoed = shortNameMemo.get(hash)
    if (memoed) return memoed

    const shortName = shortNameGenerator.next().value
    shortNameMemo.set(hash, shortName)

    return shortName
  },
  // こうしないと変なところに JSON が出力されちゃう
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getJSON: () => {},
  scopeBehaviour: 'local' as const,
}

const plugins: AcceptedPlugin[] = [
  postcssCombineDuplicatedSelectors(),
  postcssCalc({}),
  autoprefixer(autoprefixerConfig),
  postcssModules(modulesConfig),
  cssnano(),
]

const config: Config = {
  plugins: {
    autoprefixer: autoprefixerConfig,
    cssnano: {},
    'postcss-calc': {},
    'postcss-combine-duplicated-selectors': {},
    'postcss-modules': modulesConfig,
  },
}

export default config
// eslint-disable-next-line camelcase
export {
  autoprefixerConfig,
  generateShortName,
  modulesConfig,
  plugins,
  testonly_resetShortNameGenerator,
}
