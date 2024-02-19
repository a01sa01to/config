// @ts-expect-error TS7016
import JaNoAbusage from 'textlint-rule-ja-no-abusage'
// @ts-expect-error TS7016
import JaSpaceAroundCode from 'textlint-rule-ja-space-around-code'
// @ts-expect-error TS7016
import JaSpaceAroundLink from 'textlint-rule-ja-space-around-link'
// @ts-expect-error TS7016
import JaSpaceBetweenHalfAndFullWidth from 'textlint-rule-ja-space-between-half-and-full-width'
// @ts-expect-error TS7016
import NoMixedZenkakuAndHankakuAlphabet from 'textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet'
// @ts-expect-error TS7016
import NoNfd from 'textlint-rule-no-nfd'
// @ts-expect-error TS7016
import PreferTariTari from 'textlint-rule-prefer-tari-tari'

export = {
  rules: {
    'ja-no-abusage': JaNoAbusage,
    'ja-space-around-code': JaSpaceAroundCode,
    'ja-space-around-link': JaSpaceAroundLink,
    'ja-space-between-half-and-full-width': JaSpaceBetweenHalfAndFullWidth,
    'no-mixed-zenkaku-and-hankaku-alphabet': NoMixedZenkakuAndHankakuAlphabet,
    'no-nfd': NoNfd,
    'prefer-tari-tari': PreferTariTari,
  },
  rulesConfig: {
    'ja-no-abusage': true,
    'ja-space-between-half-and-full-width': {
      space: 'always',
    },
    'ja-space-around-code': {
      before: true,
      after: true,
    },
    'ja-space-around-link': {
      before: true,
      after: true,
    },
    'no-mixed-zenkaku-and-hankaku-alphabet': {
      prefer: '半角',
    },
    'no-nfd': true,
    'prefer-tari-tari': true,
  },
}
