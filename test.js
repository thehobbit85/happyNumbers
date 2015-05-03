var assert = require('assert')
var happynumbers = require('./happynumbers')

for (var i = 1; i <= 300; i++) {
  if (i === 1 ||
    i === 7 ||
    i === 10 ||
    i === 13 ||
    i === 19 ||
    i === 23 ||
    i === 28 ||
    i === 31 ||
    i === 32 ||
    i === 44 ||
    i === 49 ||
    i === 68 ||
    i === 70 ||
    i === 79 ||
    i === 82 ||
    i === 86 ||
    i === 91 ||
    i === 94 ||
    i === 97 ||
    i === 100 ||
    i === 103 ||
    i === 109 ||
    i === 129 ||
    i === 130 ||
    i === 133 ||
    i === 139 ||
    i === 167 ||
    i === 176 ||
    i === 188 ||
    i === 190 ||
    i === 192 ||
    i === 193 ||
    i === 203 ||
    i === 208 ||
    i === 219 ||
    i === 226 ||
    i === 230 ||
    i === 236 ||
    i === 239 ||
    i === 262 ||
    i === 263 ||
    i === 280 ||
    i === 291 ||
    i === 293) {
    assert(happynumbers(i), 'Check for ' + i + ' FAILED')
  } else {
    assert(!happynumbers(i), 'Check for ' + i + ' FAILED')
  }
}
