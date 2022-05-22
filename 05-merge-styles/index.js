const fs = require('fs');
const path = require('path');

fs.readdir(__dirname, (err, files) => {
    if (err) throw err;

    // пути до изначальных папок и до итоговой папки
    const pathToOriginalDir = `${__dirname}\\styles`;
    const pathToResultDir = `${__dirname}\\project-dist`;

    fs.readdir(pathToOriginalDir, (err, files) => {
        if (err) throw err;

        fs.access(path.resolve(pathToResultDir, "bundle.css"), fs.F_OK, (err) => {
            if (err) throw Error;
            fs.unlink(path.resolve(pathToResultDir, "bundle.css"), (err) => {
                if (err) throw ErrorEvent;
            });
        });

        files.forEach((elem) => {
            if (elem.includes('.css')) {
                console.log(`Найден подохдящий файл, считываю ${elem}`);
                const pathToReadingFile = `${pathToOriginalDir}\\${elem}`;

                fs.readFile(pathToReadingFile, 'utf8', (err, data) => {
                    fs.appendFile(`${pathToResultDir}\\bundle.css`, data, () =>
                        console.log(`Текст из файла ${elem} добавлен`)
                    );
                });
            } else {
                return console.log(`Неподходящий файл ${elem} пропущен`);
            }
        });
    });
});