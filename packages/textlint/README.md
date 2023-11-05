# textlint preset

My textlint preset.

## Usage

Install:

```sh
npm install --save-dev @a01sa01to/preset-textlint
```

Edit `.textlintrc`:

```json
{
  "rules": {
    "@a01sa01to/preset-textlint": true
  }
}
```

## Rules

- [textlint-rule-ja-no-abusage](https://github.com/textlint-ja/textlint-rule-ja-no-abusage)
- [textlint-rule-ja-space-around-code](https://github.com/textlint-ja/textlint-rule-preset-ja-spacing/tree/master/packages/textlint-rule-ja-space-around-code)
  - before: true
  - after: true
- [textlint-rule-ja-space-around-link](https://github.com/textlint-ja/textlint-rule-preset-ja-spacing/tree/master/packages/textlint-rule-ja-space-around-link)
  - before: true
  - after: true
- [textlint-rule-ja-space-between-half-and-full-width](https://github.com/textlint-ja/textlint-rule-preset-ja-spacing/tree/master/packages/textlint-rule-ja-space-between-half-and-full-width)
  - space: always
- [textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet](https://github.com/textlint-ja/textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet)
  - prefer: "半角"
- [textlint-rule-no-nfd](https://github.com/textlint-ja/textlint-rule-no-nfd)
- [textlint-rule-prefer-tari-tari](https://github.com/textlint-ja/textlint-rule-prefer-tari-tari)

## License

MIT License
