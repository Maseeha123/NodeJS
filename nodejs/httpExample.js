const http = require('http')

function dataControl(req,resp) {
    resp.write('<h1>respone,,this is reccive</h1>')
    resp.end();
}
http.createServer(dataControl).listen(4500);


// http.createServer((req, resp) => {
//  resp.write('<h1>respone reccive</h1>')
//  resp.end();
// }).listen(4500);