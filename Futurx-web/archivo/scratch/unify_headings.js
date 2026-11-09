const fs = require('fs');
const path = require('path');

const projectDir = '/Users/erikgarcia/Library/CloudStorage/GoogleDrive-futurx.estudio@gmail.com/Mi unidad/00_Futurx/Futurx-Web';

const headingReplacements = {
    'index.html': {
        target: /<h1 class="text-display-xl font-display-xl leading-none text-white">/i,
        replacement: '<h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-white font-sans">'
    },
    'secciones/contacto.html': {
        target: /<h1 class="font-display-xl text-display-xl text-on-surface mb-md">/i,
        replacement: '<h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-on-surface mb-md font-sans">'
    },
    'secciones/planes.html': {
        target: /<h1 class="text-display-xl font-display-xl text-white mb-6">/i,
        replacement: '<h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-white mb-6 font-sans">'
    },
    'secciones/servicios.html': {
        target: /<h1 class="text-5xl md:text-7xl font-sans font-bold text-white mb-6">/i,
        replacement: '<h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-white mb-6 font-sans">'
    },
    'secciones/portafolio.html': {
        target: /<h1 class="font-red-hat text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none">/i,
        replacement: '<h1 class="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-white font-sans">'
    },
    'secciones/terminos.html': {
        target: /<h1 class="text-6xl md:text-7xl font-black text-white tracking-tighter leading-tight">/i,
        replacement: '<h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-white mb-6 font-sans">'
    },
    'secciones/constructor_planes.html': {
        target: /<h1 class="text-4xl md:text-5xl font-sans font-bold text-white mb-4">/i,
        replacement: '<h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-white mb-4 font-sans">'
    },
    // Project detail subpages
    'secciones/portafolio/asegura-con-vc.html': {
        target: /<h1 class="font-red-hat text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 text-white">/i,
        replacement: '<h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-6 text-white font-sans">'
    },
    'secciones/portafolio/consola-retro-futurista.html': {
        target: /<h1 class="font-red-hat text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 text-white">/i,
        replacement: '<h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-6 text-white font-sans">'
    },
    'secciones/portafolio/landing-rs.html': {
        target: /<h1 class="font-red-hat text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 text-white uppercase">/i,
        replacement: '<h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-6 text-white uppercase font-sans">'
    },
    'secciones/portafolio/mala-morra.html': {
        target: /<h1 class="font-red-hat text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 text-white">/i,
        replacement: '<h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-6 text-white font-sans">'
    },
    'secciones/portafolio/shaki-rs.html': {
        target: /<h1 class="font-red-hat text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 text-white">/i,
        replacement: '<h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-6 text-white font-sans">'
    },
    'secciones/portafolio/video-ilegal.html': {
        target: /<h1 class="font-red-hat text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 text-white">/i,
        replacement: '<h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-6 text-white font-sans">'
    }
};

Object.entries(headingReplacements).forEach(([relPath, { target, replacement }]) => {
    const filePath = path.join(projectDir, relPath);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        if (target.test(content)) {
            console.log(`Unifying heading in: ${relPath}`);
            content = content.replace(target, replacement);
            fs.writeFileSync(filePath, content, 'utf8');
        } else {
            console.log(`Warning: Target heading pattern not found in: ${relPath}`);
        }
    } else {
        console.log(`Warning: File not found: ${relPath}`);
    }
});

console.log('Heading unification complete!');
