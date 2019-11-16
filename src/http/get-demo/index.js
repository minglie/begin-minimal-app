// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')
let M=1;
let html = `
hello
`

// HTTP function
exports.handler = async function http(req) {
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: html;
  }
}
