var Db = require("./DbService.js");
var M = require("ming_node");
var url_module=require('url');


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
      req.params = postData;
    
     try{
             let sql=req.params.sql
             var rows= await Db.doSql(req.params.sql);
             return {
              headers: {
                'content-type': 'text/html; charset=utf8'
              },
              body: JSON.stringify(rows)
            }
        }catch (e){
            return {
               headers: {
                'content-type': 'text/html; charset=utf8'
              },
              body: M.result("err")
            }
        }
    
 
}
