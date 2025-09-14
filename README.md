# Foodie Recommender 🍽️

A simple yet aesthetic food recommendation app that helps users decide what to cook or order for their next meal based on their preferences. Perfect for those moments when you're overwhelmed by too many food options!

## Features ✨

- **Smart Recommendations**: Get personalized dish suggestions based on your preferences
- **Preference-Based Filtering**: Include ingredients you want or exclude ones you don't
- **Random Selection**: If multiple dishes match your criteria, get a random recommendation
- **Rich Database**: 200+ dishes from various cuisines (Indian, Chinese, Italian, Mexican, Thai, Japanese, Continental, and more)
- **Responsive Design**: Works perfectly on all devices - mobile, tablet, and desktop
- **Modern UI**: Beautiful gradient design with smooth animations
- **PWA Ready**: Can be installed as a Progressive Web App

## How It Works 🎯

1. **Tell us what you want**: Enter ingredients or cuisines you're craving (e.g., "paneer", "chicken", "spicy")
2. **Tell us what to avoid**: Enter ingredients or cuisines you don't want (e.g., "bitter gourd", "brinjal")
3. **Get your recommendation**: The app suggests one perfect dish for you
4. **Order or cook**: Use the recommendation to order from your favorite food delivery app or cook at home

## Example Usage 📝

- **Input**: "I want paneer" → **Output**: Random paneer dish (e.g., Paneer Butter Masala)
- **Input**: "Exclude bitter gourd, brinjal" → **Output**: Any dish without these ingredients
- **Input**: "I want chicken, exclude spicy" → **Output**: Mild chicken dish

## Database Categories 🗂️

The app includes dishes from:
- Indian (North & South Indian)
- Chinese
- Italian
- Mexican
- Thai
- Japanese
- Continental
- Street Food
- Desserts
- Beverages

## Getting Started 🚀

### Option 1: Direct Usage
1. Open `index.html` in your web browser
2. Start getting food recommendations!

### Option 2: Local Server
1. Install Node.js
2. Run `npm install` to install dependencies
3. Run `npm start` to start the local server
4. Open `http://localhost:8080` in your browser

## Converting to APK for Google Play Store 📱

To convert this web app to an APK for the Google Play Store:

### Method 1: Using Capacitor (Recommended)
1. Install Capacitor: `npm install -g @capacitor/cli`
2. Initialize Capacitor: `npx cap init`
3. Add Android platform: `npx cap add android`
4. Build the app: `npx cap build android`
5. Open in Android Studio and build APK

### Method 2: Using Cordova
1. Install Cordova: `npm install -g cordova`
2. Create Cordova project: `cordova create foodie-recommender`
3. Add Android platform: `cordova platform add android`
4. Copy your web files to `www` folder
5. Build APK: `cordova build android`

### Method 3: Using PWA Builder
1. Go to [PWA Builder](https://www.pwabuilder.com/)
2. Enter your app URL
3. Generate Android package
4. Download and publish to Play Store

## Google Play Store Requirements 📋

- **One-time registration fee**: $25
- **App bundle**: Use Android App Bundle (.aab) format
- **Icons**: Provide app icons in various sizes
- **Screenshots**: Take screenshots for different device sizes
- **Privacy Policy**: Required for all apps
- **Content Rating**: Complete content rating questionnaire

## Customization 🎨

### Adding More Dishes
Edit the `dishDatabase` array in `script.js` to add more dishes:

```javascript
{
  name: "Your Dish Name",
  description: "Dish description",
  cuisine: "Cuisine Type",
  type: "Vegetarian/Non-Vegetarian",
  ingredients: ["ingredient1", "ingredient2", "ingredient3"]
}
```

### Styling Changes
Modify `styles.css` to change colors, fonts, or layout.

### Adding Features
- Integration with food delivery APIs
- User accounts and favorites
- Recipe instructions
- Nutritional information
- Social sharing

## Browser Support 🌐

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance 📊

- **Load Time**: < 2 seconds
- **Database Size**: ~50KB
- **Responsive**: Works on all screen sizes
- **Offline**: Works without internet (after first load)

## Future Enhancements 🔮

- [ ] User authentication
- [ ] Favorite dishes
- [ ] Recipe instructions
- [ ] Nutritional information
- [ ] Integration with food delivery apps
- [ ] Social sharing
- [ ] Voice input
- [ ] Image recognition
- [ ] Dietary restrictions (vegan, gluten-free, etc.)
- [ ] Meal planning
- [ ] Grocery list generation

## Contributing 🤝

Feel free to contribute by:
- Adding more dishes to the database
- Improving the UI/UX
- Adding new features
- Fixing bugs
- Improving performance

## License 📄

MIT License - feel free to use this project for personal or commercial purposes.

## Support 💬

If you have any questions or need help, please open an issue on GitHub.

---

**Made with ❤️ for food lovers everywhere!**

*Happy eating! 🍽️*
