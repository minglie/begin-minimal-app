
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
