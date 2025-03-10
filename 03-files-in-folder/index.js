const fs = require("fs");
const path = require('path');

fs.readdir(path.resolve(__dirname, "secret-folder"), { withFileTypes: true }, (err, files)=>{
    if(err) throw err
    files.forEach(elem=>{
        if (elem.isFile()){
            fs.stat(path.resolve(__dirname, "secret-folder", elem.name), (error, status)=>{
                [n, extension] = elem.name.split('.');
                console.log(`${n} - ${extension} - ${status.size}`);
            })
        }
    })
})