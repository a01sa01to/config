/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { describe, expect, test } from '@jest/globals'

import { createESLintInstance } from './common'

test('should be setup', () => {
  const instance = createESLintInstance()
  expect(instance).not.toBeUndefined()
})

test('no-used-vars', async () => {
  const instance = createESLintInstance()
  const res = await instance.lintText('const foo = 1')
  expect(res).toHaveLength(1)
  expect(res[0]!.errorCount).toBeGreaterThan(0)
})

test('unused-imports', async () => {
  const instance = createESLintInstance()
  const res = await instance.lintText("import { foo } from './foo'")
  expect(res).toHaveLength(1)
  expect(res[0]!.errorCount).toBeGreaterThan(0)
})

describe('React', () => {
  test('Normal', async () => {
    const instance = createESLintInstance()
    const res = await instance.lintText(
      `
      import { useEffect, useState } from 'react'
      export default function App() {
        const [count, setCount] = useState(0)
        useEffect(() => {
          setCount(count + 1)
        }, [])
        return <div>Hello World</div>
      }
    `,
      {
        filePath: 'src/App.jsx',
      },
    )
    expect(res).toHaveLength(1)
    expect(res[0]!.errorCount).toBe(0)
  })

  test('a11y', async () => {
    const instance = createESLintInstance()
    const res = await instance.lintText(
      `
      export default function App() {
        // img elements must have an alt prop, either with meaningful text, or an empty string for decorative images.
        return <img src="foo" />
      }
    `,
      {
        filePath: 'src/App.jsx',
      },
    )
    console.log(res)
    console.log(res[0]?.messages)
    expect(res).toHaveLength(1)
    expect(res[0]!.errorCount).toBeGreaterThan(0)
  })
})
