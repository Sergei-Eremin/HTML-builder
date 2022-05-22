const fs = require('fs');
fs.readdir(__dirname, (err) => {
    if (err) throw err;
  
    // пути до изначальных папок и до скопированной папки
    const pathToOriginalDir = `${__dirname}\\files`;
    const pathToCopiedDir = `${__dirname}\\files-copy`;
  
    // создаю папку по пути dirname/название папки
    fs.mkdir(pathToCopiedDir, (error) =>
      console.log(`Путь до скопированной папки: ${pathToCopiedDir}`)
    );
  
    fs.readdir(pathToOriginalDir, (err, files) => {
      if (err) throw err;
  
      files.forEach((elem) => {
        // путь до элементов
        const pathToOldFile = pathToOriginalDir + '\\' + elem;
        const pathToNewFile = pathToCopiedDir + '\\' + elem;
  
        // копирование
        fs.copyFile(pathToOldFile, pathToNewFile, (error) =>
          console.log(`Файл ${elem} успешно скопирован`)
        );
      });
    });
  });