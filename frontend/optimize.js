import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.join(process.cwd(), 'src', 'assets');

async function optimizeImages() {
  try {
    const files = fs.readdirSync(assetsDir);
    
    for (const file of files) {
      if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.png')) {
        const filePath = path.join(assetsDir, file);
        const stats = fs.statSync(filePath);
        
        // Skip small files (less than 200kb)
        if (stats.size < 200000) {
          continue;
        }

        console.log(`Optimizing: ${file} (${Math.round(stats.size / 1024)} KB)`);
        
        const tempPath = filePath + '.tmp';
        
        // Resize to max 1200px width and compress
        await sharp(filePath)
          .resize({ width: 1200, withoutEnlargement: true })
          .jpeg({ quality: 75, progressive: true })
          .toFile(tempPath);
          
        // Replace original
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        
        const newStats = fs.statSync(filePath);
        console.log(`  -> Reduced to ${Math.round(newStats.size / 1024)} KB`);
      }
    }
    
    console.log('Image optimization complete!');
  } catch (err) {
    console.error('Error optimizing images:', err);
  }
}

optimizeImages();
