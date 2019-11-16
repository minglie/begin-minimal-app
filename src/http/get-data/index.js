
let data = require('@begin/data')
let begin = require('@architect/functions') // Reads & writes session data

var option={
    table: 'accounts',
    key: "content"
}



// HTTP function
exports.handler = async function http(req) {
  
  var param=req.queryStringParameters;
  if(param && param.content){
    
        await data.set({...option,content:param.content})
       return {
          headers: {
            'content-type': 'text/html; charset=utf8'
          },
          body: "ok"
        }
   
  }
  
  
  let greetings = await data.get({...option})

  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: JSON.stringify(greetings)
  }
}
