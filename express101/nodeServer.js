const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    // res.write("<h1>This is the homepage</h1>");

    const homePageHtml = fs.readFileSync("node.html");
    console.log(homePageHtml);
    res.write(homePageHtml);
    res.end();
  } else if (req.url == "/uxdlogo.jpg") {
    res.writeHead(200, { "content-type": "image/jpg" });
    const image = fs.readFileSync("uxdlogo.jpg");
    console.log(image);
    res.write(image);
    res.end();
  } else if (req.url == "/favicon.ico") {
    res.writeHead(200, { "content-type": "image/ico" });
    const ico = fs.readFileSync("favicon.ico");
    console.log(ico);
    res.write(ico);
    res.end();
  } else if (req.url == "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    const styles = fs.readFileSync("styles.css");
    console.log(styles);
    res.write(styles);
    res.end();
  }
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h2>error er page</h2>");
    res.end();
  }

  //console.log(req);
});

server.listen(3001);
