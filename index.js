const mergeOptions = require('merge-options')

const defaults = {}

mergeOptions(defaults, {})

mergeOptions.call(null, defaults, {})

mergeOptions.bind({
  ignoreUndefined: true
})
