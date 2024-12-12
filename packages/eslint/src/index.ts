import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import unusedImports from "eslint-plugin-unused-imports"

const config = tseslint.config(
  eslint.configs.all,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
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
      // コメントの先頭を大文字にするルール、コメントアウト時に邪魔
      'capitalized-comments': 'off',
      // for とかの {} を省略するかのルール、複数行なら省略しない・ 1 行なら省略可だが統一させる
      'curly': ['error', 'multi', 'consistent'],
      // 変数名の長さのルール、 for i とかで邪魔
      'id-length': 'off',
      // 1 関数の行数のルール、長くてもかまわないので
      'max-lines-per-function': 'off',
      // 命令数のルール、長くてもかまわないので
      'max-statements': 'off',
      // ++, -- の使用を禁止するルール
      'no-plusplus': 'off',
      // 三項演算子を禁止するルール
      'no-ternary': 'off',
      // 未使用の変数をエラーにするルール
      'no-unused-vars': 'error',
      // const とかをまとめて書こうねというルール、ふつうに読みづらい
      'one-var': 'off',
      // import のソートルール、グループ化してソートを OK とする
      'sort-imports': ['error', { "allowSeparatedGroups": true }],
      // object の key のソートルール、 caseSensitive & natural: 数字を数字としてソート
      'sort-keys': ['error', 'asc', { caseSensitive: true, natural: true }],
      // 未使用の import をエラーにするルール
      'unused-imports/no-unused-imports': 'error',
      // 未使用の変数をエラーにするルール
      'unused-imports/no-unused-vars': 'error',
    },
  },
  {
    extends: [tseslint.configs.disableTypeChecked],
    files: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
  },
)

module.exports = config
export default config
