const fs = require("fs");

fs.readdir(`${__dirname}/secret-folder`, { withFileTypes: true }, (err, files)=>{
    if(err) throw err
    files.forEach(elem=>{
        if (elem.isFile()){
            fs.stat(`${__dirname}/secret-folder/${elem.name}`, (error, status)=>{
                [n, extension] = elem.name.split('.');
                console.log(`${n} - ${extension} - ${status.size}`);
            })
        }
    })
})