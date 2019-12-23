/**
 * The file enables any file to import all network services
 */

const files = require.context('.', false, /\.js$/)
const services = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  const name = key.replace(/(\.\/|\.js)/g, '')
  services[name] = files(key).default
})

export default services
