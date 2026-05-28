import { ESLint } from "eslint";

import config from "../src/index.js";

const createESLintInstance = () =>
  new ESLint({
    overrideConfig: config,
    overrideConfigFile: true,
  });

export { createESLintInstance };
