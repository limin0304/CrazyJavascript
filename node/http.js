const http = require('http');
const fs = require('fs');
const path = require('path');

console.log(path.extname('/a/b'))

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('请求成功', req.url);
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<p>你好！</p>');
    } else if (req.url === '/img') {
        fs.readFile('./banner.jpg', (err, data) => {
            if(err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('读取文件失败，请稍后重试');
            } else {
                res.setHeader('Content-Type', 'image/jpeg');
                res.end(data);
            }
        });
    }
});

server.listen(3000, () => {
    console.log('服务器启动成功');
});