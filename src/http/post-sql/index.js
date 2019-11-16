// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')
var Db=require("./Db.js");


exports.handler = async function http(req) {

                              
 return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: JSON.stringify(Db.doSql)
  }
  
  
}
