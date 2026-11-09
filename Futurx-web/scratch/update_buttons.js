const fs = require('fs');
const path = require('path');

const projectDir = '/Users/erikgarcia/Library/CloudStorage/GoogleDrive-futurx.estudio@gmail.com/Mi unidad/00_Futurx/Futurx-Web';

// 1. Update index.html
const indexFile = path.join(projectDir, 'index.html');
if (fs.existsSync(indexFile)) {
    let content = fs.readFileSync(indexFile, 'utf8');

    // Redirect payment links to contact page
    const originalLink = 'portal/pago_stripe.html?plan=';
    const newLink = 'secciones/contacto.html?plan=';
    let linkCount = 0;
    while (content.includes(originalLink)) {
        content = content.replace(originalLink, newLink);
        linkCount++;
    }
    console.log(`Updated ${linkCount} payment links in index.html`);

    // Center pricing-social section (lg:grid-cols-4 -> lg:grid-cols-3 max-w-5xl mx-auto)
    const oldGridClass = 'id="pricing-social"\n            class="hidden overflow-x-auto md:overflow-x-visible md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-12 pb-12 snap-x snap-mandatory custom-scrollbar pr-8 lg:pr-0 md:pr-0"';
    const newGridClass = 'id="pricing-social"\n            class="hidden overflow-x-auto md:overflow-x-visible md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-6 items-stretch pt-12 pb-12 snap-x snap-mandatory custom-scrollbar pr-8 lg:pr-0 md:pr-0"';
    
    if (content.includes('lg:grid-cols-4') && content.includes('pricing-social')) {
        content = content.replace(
            /id="pricing-social"\s+class="hidden overflow-x-auto md:overflow-x-visible md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-12 pb-12 snap-x snap-mandatory custom-scrollbar pr-8 lg:pr-0 md:pr-0"/g,
            'id="pricing-social" class="hidden overflow-x-auto md:overflow-x-visible md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-6 items-stretch pt-12 pb-12 snap-x snap-mandatory custom-scrollbar pr-8 lg:pr-0 md:pr-0"'
        );
        console.log('Centered pricing-social section in index.html');
    }

    fs.writeFileSync(indexFile, content, 'utf8');
}

// 2. Update secciones/planes.html
const planesFile = path.join(projectDir, 'secciones/planes.html');
if (fs.existsSync(planesFile)) {
    let content = fs.readFileSync(planesFile, 'utf8');

    // Redirect payment links to contact page
    const originalLink = '../portal/pago_stripe.html?plan=';
    const newLink = 'contacto.html?plan=';
    let linkCount = 0;
    while (content.includes(originalLink)) {
        content = content.replace(originalLink, newLink);
        linkCount++;
    }
    console.log(`Updated ${linkCount} payment links in planes.html`);

    fs.writeFileSync(planesFile, content, 'utf8');
}

console.log('Button updates complete!');
