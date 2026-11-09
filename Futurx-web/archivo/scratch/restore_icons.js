const fs = require('fs');
const path = require('path');

const projectDir = '/Users/erikgarcia/Library/CloudStorage/GoogleDrive-futurx.estudio@gmail.com/Mi unidad/00_Futurx/Futurx-Web';

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

const files = walk(projectDir);

files.forEach(filePath => {
    const relativePath = path.relative(projectDir, filePath);
    let content = fs.readFileSync(filePath, 'utf8');

    // Find all <link ... family=Red+Hat+Display ...> tags
    // Let's use a regex to match the link tags
    const linkRegex = /<link\s+[^>]*href="https:\/\/fonts\.googleapis\.com\/css2\?family=Red\+Hat\+Display[^>]*>/gi;
    const matches = content.match(linkRegex);

    if (matches && matches.length > 1) {
        console.log(`Fixing links in: ${relativePath} (found ${matches.length} matches)`);
        
        // We will keep the first one
        // The last one will be replaced with Material Symbols Outlined
        // Any intermediate ones will be removed
        
        let matchIndex = 0;
        content = content.replace(linkRegex, (match) => {
            matchIndex++;
            if (matchIndex === 1) {
                // Keep the first Red Hat Display link
                return match;
            } else if (matchIndex === matches.length) {
                // Replace the last link with Material Symbols Outlined
                const isSlash = match.includes('/>') ? ' />' : '>';
                return `<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"${isSlash}`;
            } else {
                // Remove intermediate ones
                return '';
            }
        });

        fs.writeFileSync(filePath, content, 'utf8');
    }
});

console.log('Icons link repair complete!');
