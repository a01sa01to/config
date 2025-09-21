import type { Linter } from 'eslint'
import { defineConfig } from 'eslint/config'
import eslint from '@eslint/js'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'

interface ReactFlatConfig {
  plugins: { react: typeof reactPlugin }
  rules: Linter.RulesRecord
  languageOptions: { parserOptions: Linter.ParserOptions }
}

const typedReactPluginFlatConfig = reactPlugin.configs.flat as {
  all: ReactFlatConfig
  recommended: ReactFlatConfig
  'jsx-runtime': ReactFlatConfig
}

const config = defineConfig(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    extends: [
      typedReactPluginFlatConfig.recommended,
      typedReactPluginFlatConfig['jsx-runtime'],
      jsxA11y.flatConfigs.recommended,
    ],
    files: ['**/*.tsx', '**/*.jsx'],
    settings: {
      react: {
        version: '19',
      },
    },
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      // type は type で export する
      '@typescript-eslint/consistent-type-exports': 'error',
      // type は type で import する
      '@typescript-eslint/consistent-type-imports': 'error',
      // for とかの {} を省略するかのルール、複数行なら省略しない・ 1 行なら省略可だが統一させる
      curly: ['error', 'multi', 'consistent'],
      // 同じモジュールからの import はまとめるルール
      'no-duplicate-imports': 'error',
      // x === x を禁止するルール
      'no-self-compare': 'error',
      // '" 内の ${} を禁止するルール
      'no-template-curly-in-string': 'error',
      // 未使用の変数をエラーにするルール
      'no-unused-vars': 'error',
      // 定義前に変数を使わないようにするルール
      'no-use-before-define': 'error',
      // dead store を防ぐルール
      'no-useless-assignment': 'error',
      // let -> const
      'prefer-const': 'error',
      // regex に u をつけるルール、 UTF-16 でちゃんと動くようにする
      'require-unicode-regexp': 'error',
      // import のソートルール、グループ化してソートを OK とする
      'sort-imports': ['error', { allowSeparatedGroups: true }],
      // 未使用の import をエラーにするルール
      'unused-imports/no-unused-imports': 'error',
      // 未使用の変数をエラーにするルール
      'unused-imports/no-unused-vars': 'error',
    },
  },
  {
    extends: [tseslint.configs.disableTypeChecked],
    files: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
  }
)

export default config
