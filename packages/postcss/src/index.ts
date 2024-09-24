import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import type { AcceptedPlugin } from 'postcss'
import postcssCalc from 'postcss-calc'
import postcssCombineDuplicatedSelectors from 'postcss-combine-duplicated-selectors'
import type { Config } from 'postcss-load-config'
import postcssModules from 'postcss-modules'

import { generateShortName } from './shortname-generator'

let shortNameGenerator = generateShortName()
const shortNameMemo = new Map<string, string>()

const __resetShortNameGenerator = () => {
  shortNameGenerator = generateShortName()
  shortNameMemo.clear()
}

const autoprefixerConfig: autoprefixer.Options = {
  overrideBrowserslist: ['last 2 versions', 'not dead'],
}

const modulesConfig = {
  generateScopedName: (
    name: string,
    filename: string,
  ): string => {
    const hash = /\.module\.s?css$/.test(filename) ? `${filename}:${name}` : name
    if (shortNameMemo.has(hash)) return shortNameMemo.get(hash)!
    const shortName = shortNameGenerator.next().value
    shortNameMemo.set(hash, shortName)
    return shortName
  },
  scopeBehaviour: 'local' as const,
  getJSON: () => { }, // こうしないと変なところに JSON が出力されちゃう
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
    "postcss-combine-duplicated-selectors": {},
    "postcss-calc": {},
    "autoprefixer": autoprefixerConfig,
    "postcss-modules": modulesConfig,
    "cssnano": {},
  }
}


export default config
export { __resetShortNameGenerator, autoprefixerConfig, generateShortName, modulesConfig, plugins }
