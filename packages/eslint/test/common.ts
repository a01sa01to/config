import { ESLint } from "eslint";
import config from "../index";

export function createESLintInstance() {
  return new ESLint({
    useEslintrc: false,
    overrideConfig: config,
  });
}
