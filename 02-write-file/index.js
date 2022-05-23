const { stdin, stdout } = process;
const fs = require("fs");
const path = require('path');

stdout.write('Привет сталкер\nнапиши что нибудь\n');
const file = fs.createWriteStream(path.resolve(__dirname, "file.txt"))
stdin.on("data", (data)=>{
    file.write(data.toString())
    data.toString() === `exit\r\n` ? process.emit("SIGINT") : stdout.write(data)
})
process.on("SIGINT", () =>{
    stdout.write('Удачи!')
    process.exit()
});