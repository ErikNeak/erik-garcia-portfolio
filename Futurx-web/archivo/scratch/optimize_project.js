const fs = require('fs');
const path = require('path');

const projectDir = '/Users/erikgarcia/Library/CloudStorage/GoogleDrive-futurx.estudio@gmail.com/Mi unidad/00_Futurx/Futurx-Web';

const seoMetadata = {
    'index.html': {
        title: 'Futurx | Agencia Creativa de Alto Rendimiento',
        description: 'Creamos productos digitales de élite en la intersección del diseño y la ingeniería de alta velocidad. Sitios web, aplicaciones y marcas que destacan.'
    },
    'secciones/contacto.html': {
        title: 'Contacto | Futurx Studio',
        description: '¿Tienes un proyecto en mente? Hablemos de velocidad y rendimiento. Ponte en contacto con el hub de ingeniería y diseño creativo de Futurx.'
    },
    'secciones/planes.html': {
        title: 'Planes de Suscripción de Diseño Ilimitado | Futurx',
        description: 'Elige el plan de diseño y desarrollo web que mejor se adapte a tu marca. Suscripción mensual flexible con entregas rápidas y calidad de élite.'
    },
    'secciones/portafolio.html': {
        title: 'Portafolio | Futurx Studio',
        description: 'Explora nuestra galería de proyectos de elite: diseño UX/UI, desarrollo web de alto rendimiento, animación 3D, branding e inteligencia artificial.'
    },
    'secciones/servicios.html': {
        title: 'Servicios | Futurx Studio',
        description: 'Servicios profesionales de diseño UX/UI, desarrollo web responsivo, modelado 3D orgánico, producción audiovisual e integración de IA.'
    },
    'secciones/terminos.html': {
        title: 'Términos de Servicio y Privacidad | Futurx',
        description: 'Consulta los términos de servicio, políticas de facturación, entrega de activos y política de privacidad de Futurx Studio.'
    },
    'secciones/constructor_planes.html': {
        title: 'Arma tu Plan | Futurx Studio',
        description: 'Configura y cotiza un plan de diseño y desarrollo a la medida de las necesidades específicas de tu empresa o startup.'
    },
    'secciones/portafolio/asegura-con-vc.html': {
        title: 'Asegura con V.C. | Diseño UX/UI & Contenido Impulsado por IA',
        description: 'Plataforma web innovadora para Asegura con V.C. que integra diseño UX/UI intuitivo y contenido inteligente generado por IA.'
    },
    'secciones/portafolio/consola-retro-futurista.html': {
        title: 'Prototipo 3D: Consola Retro-Futurista | Diseño de Producto Conceptual',
        description: 'Diseño y modelado 3D de una consola de videojuegos de estética retro-futurista, optimizada para animación y prototipado conceptual.'
    },
    'secciones/portafolio/landing-rs.html': {
        title: 'Retailer Tecnológico | Diseño UX/UI & Landing Pages',
        description: 'Diseño estratégico de interfaces web de alto rendimiento (Landing Pages) para la temporada comercial más importante del año en México.'
    },
    'secciones/portafolio/mala-morra.html': {
        title: 'Mala Morra | Identidad Visual, Ilustración Textil & Dirección de Arte',
        description: 'Desarrollo de identidad y universo visual para una marca de streetwear urbana y rebelde, desde logotipos dinámicos hasta prendas.'
    },
    'secciones/portafolio/shaki-rs.html': {
        title: 'Diseño y Modelado 3D | Mascota de Marca',
        description: 'Transformación de un arte conceptual 2D en un personaje 3D funcional, carismático y escalable para múltiples aplicaciones publicitarias.'
    },
    'secciones/portafolio/video-ilegal.html': {
        title: 'ILEGAL - Videoclip Oficial | Producción Audiovisual Integral',
        description: 'Dirección creativa, producción y edición de videoclip urbano de estética nocturna y narrativa envolvente por Futurx Studio.'
    },
    'portal/gestionar_plan.html': {
        title: 'Gestionar Suscripción - Futurx',
        description: 'Portal del cliente de Futurx: administra tus beneficios, planes activos y propuestas personalizadas de forma rápida.'
    },
    'portal/pago_stripe.html': {
        title: 'Finalizar Suscripción | Checkout - Futurx Studio',
        description: 'Portal de checkout de Futurx: finaliza la suscripción de tus planes de diseño y desarrollo web de forma segura.'
    },
    'portal/admin_custom_plan.html': {
        title: 'Generador de Planes - Admin Futurx',
        description: 'Consola de administración de planes de diseño y desarrollo de Futurx Studio.'
    },
    'portal/dashboard.html': {
        title: 'Dashboard de Cliente - Futurx',
        description: 'Portal privado para clientes de Futurx: gestiona tus requerimientos de diseño, revisa entregas y sigue tareas activas.'
    },
    'portal/login.html': {
        title: 'Iniciar Sesión - Portal Futurx',
        description: 'Inicia sesión en tu cuenta de cliente de Futurx para interactuar con tu equipo de diseño y desarrollo.'
    },
    'portal/registro.html': {
        title: 'Registro de Cuenta - Portal Futurx',
        description: 'Regístrate en el portal de clientes de Futurx Studio para comenzar a enviar requerimientos.'
    }
};

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
    console.log(`Processing: ${relativePath}`);

    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Google Fonts URL Update
    // Replace any google fonts api css2 url with the Red Hat Display exclusive one
    const fontRegex = /https:\/\/fonts\.googleapis\.com\/css2\?[^"']+/g;
    const targetFontUrl = 'https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@300;400;500;600;700;800;900&amp;display=swap';
    content = content.replace(fontRegex, targetFontUrl);

    // 2. fontFamily configuration in tailwind.config
    // Replace Space Grotesk fontFamily inside tailwind.config blocks
    const tailwindFontFamilyRegex = /"fontFamily"\s*:\s*\{[^}]+\}/g;
    const targetTailwindFontFamily = `"fontFamily": {
                        "sans": ["Red Hat Display", "sans-serif"],
                        "red-hat": ["Red Hat Display", "sans-serif"],
                        "label-bold": ["Red Hat Display", "sans-serif"],
                        "body-md": ["Red Hat Display", "sans-serif"],
                        "body-lg": ["Red Hat Display", "sans-serif"],
                        "headline-lg": ["Red Hat Display", "sans-serif"],
                        "headline-md": ["Red Hat Display", "sans-serif"],
                        "display-xl": ["Red Hat Display", "sans-serif"]
                    }`;
    content = content.replace(tailwindFontFamilyRegex, targetTailwindFontFamily);

    // Also handle single-quoted tailwind config if any
    const tailwindFontFamilyRegexSingle = /'fontFamily'\s*:\s*\{[^}]+\}/g;
    const targetTailwindFontFamilySingle = `'fontFamily': {
                        'sans': ['Red Hat Display', 'sans-serif'],
                        'red-hat': ['Red Hat Display', 'sans-serif'],
                        'label-bold': ['Red Hat Display', 'sans-serif'],
                        'body-md': ['Red Hat Display', 'sans-serif'],
                        'body-lg': ['Red Hat Display', 'sans-serif'],
                        'headline-lg': ['Red Hat Display', 'sans-serif'],
                        'headline-md': ['Red Hat Display', 'sans-serif'],
                        'display-xl': ['Red Hat Display', 'sans-serif']
                    }`;
    content = content.replace(tailwindFontFamilyRegexSingle, targetTailwindFontFamilySingle);

    // 3. Class font-['Space_Grotesk'] replacement
    // Replace class font-['Space_Grotesk'] and font-['Space Grotesk'] etc.
    const classFontRegex1 = /font-\['Space_Grotesk'\]/g;
    const classFontRegex2 = /font-\['Space Grotesk'\]/g;
    const classFontRegex3 = /font-\["Space_Grotesk"\]/g;
    const classFontRegex4 = /font-\["Space Grotesk"\]/g;
    content = content.replace(classFontRegex1, 'font-sans');
    content = content.replace(classFontRegex2, 'font-sans');
    content = content.replace(classFontRegex3, 'font-sans');
    content = content.replace(classFontRegex4, 'font-sans');

    // 4. inline body font family fallback
    const inlineBodyFontRegex = /font-family:\s*['"]Space Grotesk['"],\s*sans-serif/g;
    content = content.replace(inlineBodyFontRegex, "font-family: 'Red Hat Display', sans-serif");

    // 5. SEO optimization: Title and Description tag check/injection
    const seo = seoMetadata[relativePath];
    if (seo) {
        // Replace or insert Title
        const titleTagRegex = /<title>([\s\S]*?)<\/title>/gi;
        const newTitleTag = `<title>${seo.title}</title>`;
        if (titleTagRegex.test(content)) {
            content = content.replace(titleTagRegex, newTitleTag);
        } else {
            // Prepend right after <head>
            content = content.replace(/<head>/i, `<head>\n    ${newTitleTag}`);
        }

        // Replace or insert Meta Description
        const descTagRegex = /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/gi;
        const descTagRegex2 = /<meta\s+content="[^"]*"\s+name="description"\s*\/?>/gi;
        const newDescTag = `<meta name="description" content="${seo.description}" />`;
        if (descTagRegex.test(content)) {
            content = content.replace(descTagRegex, newDescTag);
        } else if (descTagRegex2.test(content)) {
            content = content.replace(descTagRegex2, newDescTag);
        } else {
            // Prepend right after <head>
            content = content.replace(/<head>/i, `<head>\n    ${newDescTag}`);
        }
    }

    // 6. Image Optimization: Lazy load below the fold images
    // Parse tags to find images. Skip logos, hero photos (e.g. "Logo naranja", "Office", "Portada.png", "01-", "Hero")
    content = content.replace(/<img\s+([^>]+)>/g, (match, attrs) => {
        // If it already has loading attribute, skip
        if (attrs.includes('loading=')) {
            return match;
        }

        // Check if it's likely above-the-fold or icon
        const skipKeywords = ['logo', 'icon', 'favicon', 'hero', 'portada', 'banner', 'avatar', '01-'];
        const shouldSkip = skipKeywords.some(keyword => attrs.toLowerCase().includes(keyword));

        if (shouldSkip) {
            return match;
        }

        // Insert loading="lazy"
        return `<img loading="lazy" ${attrs}>`;
    });

    // Write back
    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Optimization complete!');
