import chalk from 'chalk'

interface Options {
  debug?: boolean
}

// based on npmlog
// https://github.com/npm/npmlog/blob/756bd05d01e7e4841fba25204d6b85dfcffeba3c/lib/log.js#L389-L397
class Logger {
  private options: Options

  constructor(options: Options = {}) {
    this.options = options
  }

  debug(...msg: unknown[]) {
    if (this.options.debug) console.debug(chalk.bgBlack.cyan('DEBUG'), ...msg)
  }

  info(...msg: unknown[]) {
    console.info(chalk.green('INFO'), ...msg)
  }

  notice(...msg: unknown[]) {
    console.log(chalk.bgBlack.cyan('NOTICE'), ...msg)
  }

  warn(...msg: unknown[]) {
    console.warn(chalk.bgBlack.yellow('WARN'), ...msg)
  }

  error(...msg: unknown[]) {
    console.error(chalk.bgBlack.red('ERROR'), ...msg)
  }
}

export default Logger
