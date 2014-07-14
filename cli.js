#!/usr/bin/env node

var bistre = require('./')

var opts = {}
opts.time = (process.argv.indexOf('--time') > -1)

process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin
  .pipe(bistre(opts))
  .pipe(process.stdout)
