const uni = require('@uni-helper/eslint-config')
const unocss = require('@unocss/eslint-config/flat')

module.exports = uni(
  {
    ignores: ['**/tmui', '**/.hbuilderx'],
  },
  unocss,
)
