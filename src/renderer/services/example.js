import { remote } from 'electron'
const got = remote.require('got')
// import { CookieJar } from 'tough-cookie' // For cookies :)

const ENDPOINTS = {
  LOGIN: { url: `https://...` }
}

async get (endpoint, options = {}) {
  const resource = ENDPOINTS[endpoint]

  options.throwHttpErrors = false

  return got(resource.url, options)
}

get('url')