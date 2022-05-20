const { stdin, stdout } = process;
const fs = require("fs");

stdout.write('Привет сталкер\nнапиши что нибудь\n');
const file = fs.createWriteStream("./02-write-file/file.txt")
stdin.on("data", (data)=>{
    file.write(data.toString())
    data.toString() === `exit\r\n` ? process.emit("SIGINT") : stdout.write(data)
})
process.on("SIGINT", () =>{
    stdout.write('Удачи!')
    process.exit()
});