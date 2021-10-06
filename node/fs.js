const fs = require('fs');

fs.readFile('./package.json', (error, data) => {
    console.log(error, data);
});