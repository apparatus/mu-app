'use strict'

const Mu = require('mu')

const test = require('tape')

const Proxyquire = require('proxyquire')
var searchStub = {}
var Search = Proxyquire('../lib/search.js', { 'elasticsearch': searchStub })

const opts = {
  host: 'localhost',
  port: '6040',
  elastic: {
    host: 'localhost',
    port: 9200,
    client: null
  }
}

test('"role:search, cmd:search" valid response', (t) => {
  t.plan(4)

  const mu = Mu()
  const detailText = 'detail'
  const payload = { 'query': 'seneca' }

  searchStub.Client = function () {
    this.search = function (payload, done) {
      done(null, { hits: { hits: [{_source: {detail: detailText}}] } })
    }
    this.indices = {
      exists: function (index, done) {
        done(null, true)
      }
    }
  }

  Search(mu, opts, () => {
    mu.dispatch({role: 'search', cmd: 'search', name: payload.query}, (err, reply) => {
      t.error(err)
      t.ok(reply)
      t.ok(reply.items)
      t.equal(detailText, reply.items[0])
    })
  })
})
