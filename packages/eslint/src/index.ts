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
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      'no-unused-vars': 'error',
      'unused-imports/no-unused-imports': 'error',
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
