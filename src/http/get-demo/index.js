// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')
M=1;
let html = `
hello
`

// HTTP function
exports.handler = async function http(req) {
 M++;
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: M+"";
  }
}
