import JaNoAbusage from "textlint-rule-ja-no-abusage";
import JaSpaceAroundCode from "textlint-rule-ja-space-around-code";
import JaSpaceAroundLink from "textlint-rule-ja-space-around-link";
import JaSpaceBetweenHalfAndFullWidth from "textlint-rule-ja-space-between-half-and-full-width";
import NoMixedZenkakuAndHankakuAlphabet from "textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet";
import NoNfd from "textlint-rule-no-nfd";
import PreferTariTari from "textlint-rule-prefer-tari-tari";

module.exports = {
  rules: {
    "ja-no-abusage": JaNoAbusage,
    "ja-space-around-code": JaSpaceAroundCode,
    "ja-space-around-link": JaSpaceAroundLink,
    "ja-space-between-half-and-full-width": JaSpaceBetweenHalfAndFullWidth,
    "no-mixed-zenkaku-and-hankaku-alphabet": NoMixedZenkakuAndHankakuAlphabet,
    "no-nfd": NoNfd,
    "prefer-tari-tari": PreferTariTari,
  },
  rulesConfig: {
    "ja-space-between-half-and-full-width": {
      space: "always",
    },
    "ja-space-around-code": {
      before: true,
      after: true,
    },
    "ja-space-around-link": {
      before: true,
      after: true,
    },
    "ja-no-abusage": true,
    "no-nfd": true,
    "no-mixed-zenkaku-and-hankaku-alphabet": {
      prefer: "半角",
    },
    "prefer-tari-tari": true,
  },
};
