'use strict'

const Mu = require('mu')
const test = require('tape')
const Info = require('../lib/info.js')

var realModule =
{data: {
  'name': 'lodash',
  'url': 'https:\/\/travis-ci.org\/lodash\/lodash',
  'id': 48500,
  'group': 'stable',
  'active': true,
  'build_state': 'passed',
  'last_built': '2016-04-06T06:50:17Z',
  'id$': 'lodash'
}}

const opts = {
  port: '6000',
  host: 'localhost'
}

test('"role:info, cmd:get" valid response', (t) => {
  t.plan(2)

  const mu = Mu()
  const payload = { name: 'lodash' }

  mu.define({role: 'store', cmd: 'get'}, () => {
    return (null, realModule)
  })

  Info(mu, opts, () => {
    mu.dispatch({role: 'info', cmd: 'get', name: payload.name}, (err, reply) => {
      t.error(err)
      t.ok(reply)
    })
  })
})

test('"role:info, cmd:get" cannot find module', (t) => {
  t.plan(2)

  const mu = Mu()
  mu.define({role: 'store', cmd: 'get'}, () => {
    return (null, realModule)
  })

  Info(mu, opts, () => {
    mu.dispatch({role: 'info', cmd: 'get', name: 'fakeModuleName'}, (err, reply) => {
      t.error(err)
      t.notOk(reply)
    })
  })
})
