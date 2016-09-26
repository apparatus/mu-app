'use strict'

var NpmFakeData = require('./npm.data.js')

module.exports = {
  request: {
    get: (opts, done) => {
      if (opts.url.includes('mu')) {
        return done(null, {}, JSON.stringify(NpmFakeData))
      }

      return done(new Error('npm error'), null, null)
    }
  }
}
