#!/usr/bin/env node

import { copyFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'
import { resolve } from 'node:path'

import Logger from './logger.js'

const main = async () => {
  const {
    values: { debug },
  } = parseArgs({
    options: {
      debug: { type: 'boolean', default: false },
    },
  })

  const logger = new Logger({ debug })

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
