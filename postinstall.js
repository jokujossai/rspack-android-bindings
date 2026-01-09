const fs = require('fs');
const path = require('path');

const BINARY_NAME = 'rspack.android-arm64.node';

// Check if script is running on desired platform and architecture
if (process.platform !== 'android' || process.arch !== 'arm64') {
    console.log('Skipping, not on android-arm64 platform.');
    process.exit(0); // Exit successfully if not on target platform
}

console.log('Running for android-arm64...');

const currentPath = process.cwd();
const modulePath = path.dirname(currentPath);
const sourceFile = path.join(currentPath, BINARY_NAME);
const targetPath = path.join(modulePath, '@rspack/binding');
const targetFile = path.join(targetPath, BINARY_NAME);

// 1. Check if source file exists
if (!fs.existsSync(sourceFile)) {
    console.error(`Error: Source binary not found at ${sourceFile}`);
    process.exit(1); // Exit with error
}

// 2. Check if @rspack/binding package is installed
if (!fs.existsSync(targetPath)) {
    console.error(`Error: @rspack/binding folder not found in node_modules at ${targetPath}`);
    process.exit(1); // Exit with error
}

// 3. Copy binary file
try {
    fs.copyFileSync(sourceFile, targetFile);
    console.log(`Successfully copied binary from ${sourceFile} to ${targetFile}`);
    process.exit(0); // Exit successfully
} catch (err) {
    console.error(`Error: Failed to copy binary from ${sourceFile} to ${targetFile}`, err);
    process.exit(1); // Exit with error
}