import { mkdtemp, stat } from 'node:fs/promises'
import { exec } from 'node:child_process'
import { resolve } from 'node:path'
import { tmpdir } from 'node:os'

import { expect, test } from 'vitest'

test('Generates .editorconfig file', async () => {
  const binFile = resolve(import.meta.dirname, '..', 'src', 'bin.ts')
  {
    const statRes = await stat(binFile)
    expect(statRes.isFile()).toBe(true)
  }

  // 一時ディレクトリ作成
  const tmpDir = await mkdtemp(resolve(tmpdir(), 'editorconfig-test-'))

  // 実行
  await new Promise<void>((resolve, reject) => {
    exec(`tsx "${binFile}"`, { cwd: tmpDir }, error => {
      if (error) reject(error)
      else resolve()
    })
  })

  // .editorconfig が生成されていることを確認
  const res = await stat(resolve(tmpDir, '.editorconfig'))
  expect(res.isFile()).toBe(true)
})
