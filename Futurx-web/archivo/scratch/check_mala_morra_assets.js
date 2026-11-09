const fs = require('fs');
const path = require('path');

const dir = "/Users/erikgarcia/Library/CloudStorage/GoogleDrive-futurx.estudio@gmail.com/Mi unidad/00_Futurx/Futurx-Web/imag/portafolio/Multiples proyectos-Mala morra";

function readVideoDimensions(filePath) {
    try {
        const fd = fs.openSync(filePath, 'r');
        const buffer = Buffer.alloc(4 * 1024 * 1024); // read first 4MB to be safe
        fs.readSync(fd, buffer, 0, buffer.length, 0);
        fs.closeSync(fd);

        let offset = 0;
        while (offset < buffer.length - 100) {
            // Check for 'tkhd' (Track Header)
            if (buffer.readUInt32BE(offset) === 0x746b6864) {
                const version = buffer.readUInt8(offset + 4);
                // The width/height are at the very end of tkhd atom.
                // tkhd size is usually 92 bytes (version 0) or 104 bytes (version 1)
                // Let's look for width/height in fixed point 16.16 (2 bytes integer, 2 bytes fraction)
                // In version 0: width starts at offset + 76, height at offset + 80
                // In version 1: width starts at offset + 88, height at offset + 92
                let widthOffset = offset + (version === 1 ? 88 : 76);
                let heightOffset = offset + (version === 1 ? 92 : 80);

                if (widthOffset + 8 <= buffer.length) {
                    const width = buffer.readUInt32BE(widthOffset) >> 16;
                    const height = buffer.readUInt32BE(heightOffset) >> 16;
                    if (width > 0 && height > 0 && width < 10000 && height < 10000) {
                        return { width, height };
                    }
                }
            }
            offset++;
        }
    } catch (e) {
        return null;
    }
    return null;
}

const files = fs.readdirSync(dir);
files.forEach(f => {
    const fullPath = path.join(dir, f);
    const stat = fs.statSync(fullPath);
    if (f.endsWith('.mp4')) {
        const dims = readVideoDimensions(fullPath);
        console.log(`Video: ${f}, Size: ${(stat.size/(1024*1024)).toFixed(2)} MB, Dims:`, dims);
    } else if (f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png')) {
        console.log(`Image: ${f}, Size: ${(stat.size/(1024*1024)).toFixed(2)} MB`);
    }
});
