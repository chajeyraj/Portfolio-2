# Kill any running Node.js processes
taskkill /F /IM node.exe /T

# Remove Vite cache directory
Remove-Item -Recurse -Force node_modules\.vite -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .vite-temp -ErrorAction SilentlyContinue

# Clear npm cache
npm cache clean --force

# Install dependencies
npm install

# Start the development server
npm run dev
