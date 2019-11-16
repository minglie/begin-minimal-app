// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')

exports.handler = async function http(req) {
var postStr='';
req.on('data',function(chunk){
postStr+=chunk;
})
req.on('end',function(err,chunk) {
req.body=postStr;  /*表示拿到post的值*/
postData="";
try {
postData = url_module.parse("?"+req.body,true).query;
} catch (e) {
try {
    postData = JSON.parse(req.body);
}catch (e) {
}
}
req.params = postData
                              
                              
 return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: JSON.stringify(req.params)
  }
  
  
}
