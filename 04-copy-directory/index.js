const fs = require('fs');
const path = require('path');

fs.readdir(__dirname, (err) => {
    if (err) throw err;
  
    // пути до изначальных папок и до скопированной папки
    const pathToOriginalDir = path.resolve(__dirname, "files");
    const pathToCopiedDir = path.resolve(__dirname, "files-copy");
  
    // создаю папку по пути dirname/название папки
    fs.mkdir(pathToCopiedDir, (error) =>
      console.log(`Путь до скопированной папки: ${pathToCopiedDir}`)
    );
  
    fs.readdir(pathToOriginalDir, (err, files) => {
      if (err) throw err;
  
      files.forEach((elem) => {
        // путь до элементов
        const pathToOldFile = path.resolve(pathToOriginalDir, elem)
        const pathToNewFile = path.resolve(pathToCopiedDir, elem)
  
        // копирование
        fs.copyFile(pathToOldFile, pathToNewFile, (error) =>
          console.log(`Файл ${elem} успешно скопирован`)
        );
      });
    });
  });