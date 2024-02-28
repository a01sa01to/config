import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcssCalc from 'postcss-calc'
import postcssCombineDuplicatedSelectors from 'postcss-combine-duplicated-selectors'
import type { Config } from 'postcss-load-config'
import postcssModules from 'postcss-modules'

import { generateShortName } from './shortname-generator'

const shortNameGenerator = generateShortName()
const shortNameMemo = new Map<string, string>()

const autoprefixerConfig: autoprefixer.Options = {
  overrideBrowserslist: ['last 2 versions', 'not dead'],
}

const modulesConfig = {
  generateScopedName: (
    name: string,
    _filename: string,
    css: string,
  ): string => {
    const hash = `${name}__${css}`
    if (shortNameMemo.has(hash)) {
      return shortNameMemo.get(hash)!
    }
    const shortName = shortNameGenerator.next().value
    shortNameMemo.set(hash, shortName)
    return shortName
  },
  scopeBehaviour: 'local' as const,
}

const config: Config = {
  plugins: [
    postcssCombineDuplicatedSelectors(),
    postcssCalc({}),
    autoprefixer(autoprefixerConfig),
    postcssModules(modulesConfig),
    cssnano(),
  ],
}

export default config
export { autoprefixerConfig, generateShortName, modulesConfig }
