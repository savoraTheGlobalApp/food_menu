// Build script for Foodie Recommender
const fs = require('fs');
const path = require('path');

console.log('🍽️ Building Foodie Recommender...');

// Create build directory
const buildDir = 'build';
if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
}

// Files to copy to build directory
const filesToCopy = [
    'index.html',
    'styles.css',
    'script.js',
    'manifest.json',
    'sw.js',
    'package.json'
];

// Copy files to build directory
filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
        fs.copyFileSync(file, path.join(buildDir, file));
        console.log(`✅ Copied ${file}`);
    } else {
        console.log(`⚠️  File not found: ${file}`);
    }
});

// Create a simple index.html for build
const buildIndexContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Foodie Recommender - Your Next Meal Awaits</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#667eea">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="Foodie Recommender">
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="logo">
                <i class="fas fa-utensils"></i>
                <h1>Foodie Recommender</h1>
            </div>
            <p class="subtitle">Discover your perfect meal in seconds</p>
        </header>

        <main class="main-content">
            <div class="preference-section">
                <h2>What's your mood today?</h2>
                
                <div class="input-group">
                    <label for="include-input">
                        <i class="fas fa-heart"></i>
                        I want something with...
                    </label>
                    <input type="text" id="include-input" placeholder="e.g., paneer, chicken, spicy">
                </div>

                <div class="input-group">
                    <label for="exclude-input">
                        <i class="fas fa-times-circle"></i>
                        But not...
                    </label>
                    <input type="text" id="exclude-input" placeholder="e.g., bitter gourd, brinjal, too spicy">
                </div>

                <button id="recommend-btn" class="recommend-btn">
                    <i class="fas fa-magic"></i>
                    Get My Recommendation
                </button>
            </div>

            <div id="result-section" class="result-section hidden">
                <div class="result-card">
                    <div class="dish-image">
                        <i class="fas fa-utensils"></i>
                    </div>
                    <div class="dish-info">
                        <h3 id="dish-name">Dish Name</h3>
                        <p id="dish-description">Dish description will appear here</p>
                        <div class="dish-tags">
                            <span id="dish-cuisine" class="tag">Cuisine</span>
                            <span id="dish-type" class="tag">Type</span>
                        </div>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <button id="try-again-btn" class="secondary-btn">
                        <i class="fas fa-redo"></i>
                        Try Again
                    </button>
                    <button id="order-btn" class="primary-btn">
                        <i class="fas fa-shopping-cart"></i>
                        Order This
                    </button>
                </div>
            </div>

            <div id="no-results" class="no-results hidden">
                <div class="no-results-content">
                    <i class="fas fa-search"></i>
                    <h3>No dishes found</h3>
                    <p>Try adjusting your preferences or be more specific with your requirements.</p>
                    <button id="clear-preferences" class="secondary-btn">
                        <i class="fas fa-refresh"></i>
                        Clear & Start Over
                    </button>
                </div>
            </div>
        </main>

        <footer class="footer">
            <p>&copy; 2024 Foodie Recommender. Made with <i class="fas fa-heart"></i> for food lovers.</p>
        </footer>
    </div>

    <script src="script.js"></script>
    <script>
        // Register service worker for PWA functionality
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then((registration) => {
                        console.log('SW registered: ', registration);
                    })
                    .catch((registrationError) => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(buildDir, 'index.html'), buildIndexContent);

console.log('✅ Build completed successfully!');
console.log('📁 Build files are in the "build" directory');
console.log('🚀 Ready for APK conversion!');
console.log('');
console.log('Next steps:');
console.log('1. Use Capacitor: npx cap init && npx cap add android && npx cap build android');
console.log('2. Or use Cordova: cordova create app && cordova platform add android && cordova build android');
console.log('3. Or use PWA Builder: https://www.pwabuilder.com/');
