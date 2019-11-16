
var M=0;
// HTTP function
exports.handler = async function http(req) {
  
  var param=req.queryStringParameters;
 
  M=M+1;

  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: M+" "+JSON.stringify(param)
  }
}
