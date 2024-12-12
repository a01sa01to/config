/* eslint-disable no-magic-numbers */

// a, b, c, ..., z, A, B, ..., Z, _, aa, ab, ... みたいな className を生成するやつ
// eslint-disable-next-line func-names
const generateShortName = function* (): Generator<string, string, string> {
  const startChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_'
  const chars = `${startChars}0123456789`
  let iterationCount = 0

  for (;;) {
    let tmp = iterationCount++

    if (tmp < startChars.length) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      yield startChars[tmp]!
    } else {
      tmp += chars.length - startChars.length

      let name = ''
      while (tmp > startChars.length) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        name += chars[tmp % chars.length]!
        tmp = Math.floor(tmp / chars.length)
      }
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      name += startChars[tmp - 1]!
      yield name.split('').reverse().join('')
    }
  }
}

export { generateShortName }
