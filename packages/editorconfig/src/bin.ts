#!/usr/bin/env node

import { argv } from 'node:process'
import { copyFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

import chalk from 'chalk'
import yargs from 'yargs'

const logger = (debug: boolean) => ({
  debug: (msg: string) => {
    if (debug) console.debug(`${chalk.bgGray.black(' DEBUG ')} ${msg}`)
  },
  info: (msg: string) => {
    console.info(`${chalk.bgCyan.black(' INFO ')} ${msg}`)
  },
})

const main = async () => {
  const options = await yargs(argv)
    // eslint-disable-next-line sort-keys
    .option('debug', { type: 'boolean', default: false })
    .parse()
  const { debug, info } = logger(options.debug)

  debug('Debug mode is on')

  const editorConfigFilepath = fileURLToPath(
    import.meta.resolve('../.editorconfig')
  )
  debug(`Resolved .editorconfig path: ${editorConfigFilepath}`)

  debug(`Current working directory: ${process.cwd()}`)

  const savePath = resolve(process.cwd(), '.editorconfig')
  info(`Copying .editorconfig to ${savePath}`)
  await copyFile(editorConfigFilepath, savePath)
  info('Done!')
}

void main()
