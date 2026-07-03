import * as esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');
const watch = process.argv.includes('--watch');

function copyRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyPublicAssets() {
  copyRecursive(publicDir, distDir);
}

async function buildJs() {
  return esbuild.build({
    entryPoints: [path.join(rootDir, 'src/index.js')],
    bundle: true,
    outfile: path.join(distDir, 'main.js'),
    sourcemap: true,
    target: ['es2018'],
  });
}

async function run() {
  copyPublicAssets();
  await buildJs();
  console.log('Build complete.');
}

if (watch) {
  copyPublicAssets();

  const context = await esbuild.context({
    entryPoints: [path.join(rootDir, 'src/index.js')],
    bundle: true,
    outfile: path.join(distDir, 'main.js'),
    sourcemap: true,
    target: ['es2018'],
  });

  await context.watch();
  console.log('Watching for changes...');
} else {
  await run();
}
