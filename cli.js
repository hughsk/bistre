#!/usr/bin/env node

var bistre = require('./')

process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin
  .pipe(bistre())
  .pipe(process.stdout)
