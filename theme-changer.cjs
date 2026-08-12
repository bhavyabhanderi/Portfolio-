const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');

const replacements = [
  [/text-white/g, 'text-gray-900'],
  [/text-gray-300/g, 'text-gray-700'],
  [/text-gray-400/g, 'text-gray-600'],
  [/border-white\/10/g, 'border-gray-200'],
  [/border-white\/5/g, 'border-gray-200'],
  [/bg-white\/5/g, 'bg-white/60'],
  [/bg-white\/10/g, 'bg-white/80'],
  [/bg-background\/95/g, 'bg-white/95'],
  [/bg-background\/50/g, 'bg-white/80'],
  [/glass-card p/g, 'glass-card shadow-sm p'], // Add subtle shadow to cards in light mode
  [/'tokyonight'/g, "'default'"], // change github stats theme to light
  [/bg_color=050816/g, "bg_color=ffffff"],
  [/text-white\/20/g, "text-gray-900/20"], // Hero fallback avatar
  [/bg-black\/20/g, "bg-white/50"]
];

function processDir(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      for (const [regex, replacement] of replacements) {
        content = content.replace(regex, replacement);
      }
      
      // Specifically fix some contrasts
      content = content.replace(/hover:bg-white\/10/g, 'hover:bg-white/90');
      
      fs.writeFileSync(fullPath, content);
      console.log('Updated ' + file);
    }
  }
}

processDir(dir);
