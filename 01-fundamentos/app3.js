const fs = require('fs');

const content = fs.readFileSync('readme.md', 'utf8');

const words = content.split(' ')

// Contar las palabras que contienen 'React'
const reactWordCount = content.match(/React/gi ?? []).length;

console.log('Palabras:', words.length);

console.log('Palabras React:', reactWordCount);
