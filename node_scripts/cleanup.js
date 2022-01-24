let fs = require('fs');

function cleanupDir({ paths }) {
  paths.forEach(path => {
    if (fs.existsSync(path) && fs.lstatSync(path).isDirectory) {
      fs.rmSync(path, { recursive: true });
      console.log(`${path} deleted`);
    } else {
      console.log(`File ${path} directory does not exist`);
    }
  });
}

console.log('Cleaning auto generated files...');

cleanupDir({ paths: ['operations/__generated__'] });

console.log('Files sucessfully cleaned');
