
const fs = require('fs');

const data = fs.readFileSync('readme.md', 'utf8');

// Reemplazar 'React' por 'Angular'
const newData = data.replace(/React/ig, 'Angular');

// Escribir un nuevo archivo
fs.writeFileSync('readme-angular.md', newData);

console.log(data);