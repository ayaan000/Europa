import fs from 'fs';
let content = fs.readFileSync('src/three/EuropaGlobe.js', 'utf8');
// Remove escaped backticks: \` -> `
content = content.replace(/\\`/g, '`');
// Remove escaped interpolation: \${ -> ${ (note double backslash in regex literal)
content = content.replace(/\\\\\$\\{/g, '${'); 
content = content.replace(/\\\$\\{/g, '${');
fs.writeFileSync('src/three/EuropaGlobe.js', content);
console.log('Fixed escaping in EuropaGlobe.js');
