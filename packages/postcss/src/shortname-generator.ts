// a, b, c, ..., z, A, B, ..., Z, _, aa, ab, ... みたいな className を生成するやつ
export function* generateShortName(): Generator<string> {
  const startChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_'
  const chars = startChars + '0123456789'
  let iterationCount = 0
  while (true) {
    let tmp = iterationCount++

    if (tmp < startChars.length) {
      yield startChars[tmp] as string
      continue
    }

    tmp += chars.length - startChars.length
    let name = ''
    while (tmp > startChars.length) {
      name += chars[tmp % chars.length]
      tmp = Math.floor(tmp / chars.length)
    }
    name += startChars[tmp - 1]
    yield name.split('').reverse().join('')
  }
}
