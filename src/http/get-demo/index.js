

// HTTP function
exports.handler = async function http(req) {
  
  var param=req.queryStringParameters;
 
  

  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: JSON.stringify(param)
  }
}
