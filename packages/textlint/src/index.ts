// @ts-expect-error - The import has no type definition
import JaNoAbusage from 'textlint-rule-ja-no-abusage'
// @ts-expect-error - The import has no type definition
import JaSpaceAroundCode from 'textlint-rule-ja-space-around-code'
// @ts-expect-error - The import has no type definition
import JaSpaceAroundLink from 'textlint-rule-ja-space-around-link'
// @ts-expect-error - The import has no type definition
import JaSpaceBetweenHalfAndFullWidth from 'textlint-rule-ja-space-between-half-and-full-width'
// @ts-expect-error - The import has no type definition
import NoMixedZenkakuAndHankakuAlphabet from 'textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet'
// @ts-expect-error - The import has no type definition
import NoNfd from 'textlint-rule-no-nfd'
// @ts-expect-error - The import has no type definition
import PreferTariTari from 'textlint-rule-prefer-tari-tari'

import type { TextlintFixableRuleDescriptor } from '@textlint/kernel'

export = {
  rules: {
    'ja-no-abusage': JaNoAbusage as TextlintFixableRuleDescriptor,
    'ja-space-around-code': JaSpaceAroundCode as TextlintFixableRuleDescriptor,
    'ja-space-around-link': JaSpaceAroundLink as TextlintFixableRuleDescriptor,
    'ja-space-between-half-and-full-width':
      JaSpaceBetweenHalfAndFullWidth as TextlintFixableRuleDescriptor,
    'no-mixed-zenkaku-and-hankaku-alphabet':
      NoMixedZenkakuAndHankakuAlphabet as TextlintFixableRuleDescriptor,
    'no-nfd': NoNfd as TextlintFixableRuleDescriptor,
    'prefer-tari-tari': PreferTariTari as TextlintFixableRuleDescriptor,
  },
  rulesConfig: {
    'ja-no-abusage': true,
    'ja-space-around-code': {
      after: true,
      before: true,
    },
    'ja-space-around-link': {
      after: true,
      before: true,
    },
    'ja-space-between-half-and-full-width': {
      space: 'always',
    },
    'no-mixed-zenkaku-and-hankaku-alphabet': {
      prefer: '半角',
    },
    'no-nfd': true,
    'prefer-tari-tari': true,
  },
}
