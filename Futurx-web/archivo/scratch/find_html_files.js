const fs = require('fs');
const path = require('path');

const walk = (dir, files = []) => {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.git' && file !== 'archivo' && file !== 'scratch') {
                walk(filePath, files);
            }
        } else if (file.endsWith('.html')) {
            files.push(filePath);
        }
    });
    return files;
};

const projectDir = '/Users/erikgarcia/Library/CloudStorage/GoogleDrive-futurx.estudio@gmail.com/Mi unidad/00_Futurx/Futurx-Web';
const htmlFiles = walk(projectDir);
console.log(JSON.stringify(htmlFiles, null, 2));
