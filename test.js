var bistre = require('./')()
var bole = require('bole')

bistre.pipe(process.stdout)

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
  , stream: bistre
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
