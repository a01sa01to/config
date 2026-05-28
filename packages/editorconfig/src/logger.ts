import { styleText } from "node:util";

interface Options {
  debug?: boolean;
}

// based on npmlog
// https://github.com/npm/npmlog/blob/756bd05d01e7e4841fba25204d6b85dfcffeba3c/lib/log.js#L389-L397
class Logger {
  private options: Options;

  constructor(options: Options = {}) {
    this.options = options;
  }

  debug(...msg: unknown[]) {
    if (this.options.debug)
      console.debug(styleText(["bgBlack", "cyan"], "DEBUG"), ...msg);
  }

  info(...msg: unknown[]) {
    console.info(styleText(["green"], "INFO"), ...msg);
  }

  notice(...msg: unknown[]) {
    console.log(styleText(["bgBlack", "blue"], "NOTICE"), ...msg);
  }

  warn(...msg: unknown[]) {
    console.warn(styleText(["bgBlack", "yellow"], "WARN"), ...msg);
  }

  error(...msg: unknown[]) {
    console.error(styleText(["bgBlack", "red"], "ERROR"), ...msg);
  }
}

export default Logger;
