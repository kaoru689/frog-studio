
$path = "src/app/blog/[id]/page.tsx"
$absPath = Convert-Path $path
$content = [System.IO.File]::ReadAllText($absPath, [System.Text.Encoding]::UTF8)

# Regex Replacement (Manual String Replace for exact match)
$oldRegex = 'const headingRegex = /<h([23])(?:[^>]*id="([^"]*)")?[^>]*>([\s\S]*?)<\/h[23]>/gi;'
$newRegex = 'const headingRegex = /<h([23])[^>]+id="([^"]+)"[^>]*>([\s\S]*?)<\/h[23]>/gi;'
$content = $content.Replace($oldRegex, $newRegex)

# CSS Replacement 1
$oldCss1 = 'font-size: 1.875rem !important; /* text-3xl Standard Luxury */'
$newCss1 = 'font-size: 1.875rem !important; /* text-3xl Standard Luxury Fixed */'
$content = $content.Replace($oldCss1, $newCss1)

# CSS Replacement 2
$oldCss2 = 'font-size: 2.25rem !important; /* text-4xl Strong */'
$newCss2 = 'font-size: 2.25rem !important; /* text-4xl Strong Impact */'
$content = $content.Replace($oldCss2, $newCss2)

[System.IO.File]::WriteAllText($absPath, $content, [System.Text.Encoding]::UTF8)
