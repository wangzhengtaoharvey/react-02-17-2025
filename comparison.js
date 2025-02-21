console.log("hello");

const fs = require("fs");

fs.readFile("index.html", "utf8", (err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
});