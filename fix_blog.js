
const fs = require('fs');
const path = 'src/app/blog/[id]/page.tsx';

try {
    let content = fs.readFileSync(path, 'utf8');

    // Regex Replacement
    // Use part of the string to be safe against minor variations in escaping
    const oldRegexPart = 'const headingRegex = /<h([23])(?:[^>]*id="([^"]*)")?[^>]*>([\\s\\S]*?)<\\/h[23]>/gi;';
    const newRegexPart = 'const headingRegex = /<h([23])[^>]+id="([^"]+)"[^>]*>([\\s\\S]*?)<\\/h[23]>/gi;';

    // Check if distinct
    if (content.indexOf(oldRegexPart) === -1) {
        console.log('Old regex not found. Trying flexible match or already updated?');
        // Fallback: maybe spaces are different?
        // Just print what we found around that area
        const idx = content.indexOf('const headingRegex =');
        if (idx !== -1) {
            console.log('Found headingRegex at:', content.substring(idx, idx + 100));
        }
    }

    content = content.split(oldRegexPart).join(newRegexPart);

    // CSS 1
    const oldCss1 = 'font-size: 1.875rem !important; /* text-3xl Standard Luxury */';
    const newCss1 = 'font-size: 1.875rem !important; /* text-3xl Standard Luxury Fixed */';
    content = content.replace(oldCss1, newCss1);

    // CSS 2
    const oldCss2 = 'font-size: 2.25rem !important; /* text-4xl Strong */';
    const newCss2 = 'font-size: 2.25rem !important; /* text-4xl Strong Impact */';
    content = content.replace(oldCss2, newCss2);

    fs.writeFileSync(path, content, 'utf8');
    console.log('Successfully wrote file.');
} catch (e) {
    console.error('Error:', e);
}
