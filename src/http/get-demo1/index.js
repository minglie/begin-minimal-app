// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')
const M=require("M.js");

// HTTP function
exports.handler = async function http(req) {
  M.d=M.d+"A";
  console.log(req)
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: M.d
  }
}
