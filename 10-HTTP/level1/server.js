const fs = require("fs");
const path = require("path");
const http = require("http");
// const url = require("url");
const querystring = require("querystring");
const { deepStrictEqual } = require("assert");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    console.log(method, url);
    if (method === "GET") {
        if (url === "/" || url === "/login") {
            res.writeHead(200, { "Content-Type": "text/html" });
            fs.readFile(
                path.join(__dirname, "static", "pages", "login.html"),
                "utf-8",
                (err, data) => {
                    if (err) {
                        throw err;
                    }
                    res.end(data);
                }
            );
        } else if (url === "/sign") {
            res.writeHead(200, { "Content-Type": "text/html" });
            fs.readFile(
                path.join(__dirname, "static", "pages", "sign.html"),
                "utf-8",
                (err, data) => {
                    if (err) {
                        throw err;
                    }
                    res.end(data);
                }
            );
        } else {
            fs.readFile(
                path.join(__dirname, "static", url),
                "utf-8",
                (err, data) => {
                    if (err) {
                        throw err;
                    }
                    res.end(data);
                }
            );
        }
    } else if (method === "POST") {
    }
});

server.listen(80, () => {
    console.log("server is running at http://127.0.0.1");
});

function sendStaticFile(url, res) {
    if (url === "/" || url === "/login") {
        res.writeHead(200, { "Content-Type": "text/html" });
    }
}
