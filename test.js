var bistre = require('./')
var bole = require('bole')

var b1 = bistre()
b1.pipe(process.stdout)

var logs = [
  bole('first')
, bole('second')
, bole('third')
, bole('fourth')
, bole('fifth')
, bole('sixth')
, bole('seventh')
]

bole.output({
    level: 'debug'
  , stream: b1
})

logs.forEach(function(log) {
  log.info('hello world')
})
logs.forEach(function(log) {
  log.error('hello world')
})
logs.forEach(function(log) {
  log.warn('hello world')
})
logs.forEach(function(log) {
  log.debug('hello world')
})
logs[0].debug(new Error('hello world'))

var b2 = bistre({ time: true })
bole.output({
    level: 'debug'
  , stream: b2
})
b2.pipe(process.stdout)

logs.forEach(function(log) {
  log.info('the world is on time')
})
