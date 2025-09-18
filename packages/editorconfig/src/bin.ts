#!/usr/bin/env node

import { argv } from 'node:process'
import { copyFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

import yargs from 'yargs'

import Logger from './logger.js'

const main = async () => {
  const options = await yargs(argv)
    .option('debug', { type: 'boolean', default: false })
    .parse()
  const logger = new Logger({ debug: options.debug })

  logger.debug('Debug mode is on')

  const editorConfigFilepath = fileURLToPath(
    import.meta.resolve('../.editorconfig')
  )
  logger.debug(`Resolved .editorconfig path: ${editorConfigFilepath}`)

  logger.debug(`Current working directory: ${process.cwd()}`)

  const savePath = resolve(process.cwd(), '.editorconfig')
  logger.info(`Copying .editorconfig to ${savePath}`)

  await copyFile(editorConfigFilepath, savePath)
  logger.info('Done!')
}

void main()
