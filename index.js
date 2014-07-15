var combiner = require('stream-combiner')
var through2 = require('through2')
var chalk = require('chalk')
var split = require('split')

module.exports = bistre
module.exports.createStream = bistre

var poolCount = 0
var poolIndex = {}
var pool = [
    'magenta'
  , 'cyan'
  , 'blue'
  , 'green'
  , 'yellow'
]

var levels = {
    error: 'red'
  , warn: 'yellow'
  , debug: 'cyan'
  , info: 'blue'
}

function bistre(opts) {

  opts = opts || {}
  var showTime = !!opts.time

  return combiner(split()
    , through2.obj(write)
  )

  function safeparse(data) {
    try {
      data = JSON.parse(data)
    } catch(e) { }
    return data
  }

  function write(data, _, next) {
    data = safeparse(data)
    if (typeof data !== 'object') {
      this.push(data)
      this.push('\n')
      return next()
    }

    var level = levels[data.level] || 'yellow'
    var line = []
    var name = data.name ? data.name.replace(/\:[-:a-z0-9]{8,}$/g, '') : ''

    var nameColor = poolIndex[name] || (
      poolIndex[name] = pool[poolCount++ % pool.length]
    )

    if (showTime) {
      line.push(chalk.gray(data.time))
    }
    line.push(chalk[level](pad(data.level, 5)))
    line.push(chalk[nameColor](data.name + ':'))

    if (data.message) {
      line.push(data.message)
    } else
    if (data.req) {
      var req = data.req
      line.push(chalk.bold(req.method))
      line.push(chalk.green(req.url))
    } else
    if (data.err) {
      line.push(data.err.stack)
    } else {
      line.push(JSON.stringify(data, null, 2))
    }

    this.push(line.join(' '))
    this.push('\n')

    next()
  }
}

function pad(str, n) {
  str = String(str)
  while (str.length < 5) {
    str = ' ' + str
  }
  return str
}
