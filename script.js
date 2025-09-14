// Dish Database - 200+ dishes with various cuisines and ingredients
const dishDatabase = [
    // Indian Vegetarian Dishes
    { name: "Paneer Butter Masala", description: "Creamy tomato-based curry with soft paneer cubes", cuisine: "Indian", type: "Vegetarian", ingredients: ["paneer", "tomato", "cream", "butter", "spices"] },
    { name: "Palak Paneer", description: "Fresh spinach curry with cottage cheese", cuisine: "Indian", type: "Vegetarian", ingredients: ["paneer", "spinach", "onion", "garlic", "spices"] },
    { name: "Chana Masala", description: "Spicy chickpea curry with aromatic spices", cuisine: "Indian", type: "Vegetarian", ingredients: ["chickpeas", "onion", "tomato", "ginger", "spices"] },
    { name: "Dal Makhani", description: "Rich black lentil curry with cream and butter", cuisine: "Indian", type: "Vegetarian", ingredients: ["black lentils", "kidney beans", "cream", "butter", "spices"] },
    { name: "Aloo Gobi", description: "Potato and cauliflower curry with Indian spices", cuisine: "Indian", type: "Vegetarian", ingredients: ["potato", "cauliflower", "onion", "tomato", "spices"] },
    { name: "Rajma", description: "Red kidney bean curry in tomato gravy", cuisine: "Indian", type: "Vegetarian", ingredients: ["kidney beans", "onion", "tomato", "ginger", "spices"] },
    { name: "Biryani", description: "Fragrant basmati rice with vegetables and spices", cuisine: "Indian", type: "Vegetarian", ingredients: ["rice", "vegetables", "yogurt", "spices", "saffron"] },
    { name: "Samosa", description: "Crispy fried pastry filled with spiced potatoes", cuisine: "Indian", type: "Vegetarian", ingredients: ["potato", "flour", "spices", "oil"] },
    { name: "Pakora", description: "Deep-fried vegetable fritters in chickpea batter", cuisine: "Indian", type: "Vegetarian", ingredients: ["vegetables", "chickpea flour", "spices", "oil"] },
    { name: "Dosa", description: "Crispy fermented crepe with potato filling", cuisine: "Indian", type: "Vegetarian", ingredients: ["rice", "lentils", "potato", "onion", "spices"] },
    
    // Indian Non-Vegetarian Dishes
    { name: "Chicken Tikka Masala", description: "Tender chicken in creamy tomato curry", cuisine: "Indian", type: "Non-Vegetarian", ingredients: ["chicken", "tomato", "cream", "yogurt", "spices"] },
    { name: "Butter Chicken", description: "Mild and creamy chicken curry with butter", cuisine: "Indian", type: "Non-Vegetarian", ingredients: ["chicken", "tomato", "cream", "butter", "spices"] },
    { name: "Chicken Biryani", description: "Aromatic basmati rice with spiced chicken", cuisine: "Indian", type: "Non-Vegetarian", ingredients: ["chicken", "rice", "yogurt", "spices", "saffron"] },
    { name: "Mutton Curry", description: "Spicy goat meat curry with rich gravy", cuisine: "Indian", type: "Non-Vegetarian", ingredients: ["mutton", "onion", "tomato", "ginger", "spices"] },
    { name: "Fish Curry", description: "Tangy fish curry with coconut and spices", cuisine: "Indian", type: "Non-Vegetarian", ingredients: ["fish", "coconut", "tamarind", "spices", "curry leaves"] },
    { name: "Chicken Korma", description: "Mild chicken curry with nuts and cream", cuisine: "Indian", type: "Non-Vegetarian", ingredients: ["chicken", "almonds", "cream", "yogurt", "spices"] },
    { name: "Tandoori Chicken", description: "Marinated chicken cooked in clay oven", cuisine: "Indian", type: "Non-Vegetarian", ingredients: ["chicken", "yogurt", "spices", "lemon", "garlic"] },
    { name: "Chicken 65", description: "Spicy deep-fried chicken with curry leaves", cuisine: "Indian", type: "Non-Vegetarian", ingredients: ["chicken", "curry leaves", "spices", "oil", "ginger"] },
    { name: "Mutton Biryani", description: "Fragrant rice with tender mutton pieces", cuisine: "Indian", type: "Non-Vegetarian", ingredients: ["mutton", "rice", "yogurt", "spices", "saffron"] },
    { name: "Prawn Curry", description: "Coconut-based prawn curry with spices", cuisine: "Indian", type: "Non-Vegetarian", ingredients: ["prawns", "coconut", "onion", "spices", "curry leaves"] },
    
    // Chinese Dishes
    { name: "Chicken Fried Rice", description: "Stir-fried rice with chicken and vegetables", cuisine: "Chinese", type: "Non-Vegetarian", ingredients: ["chicken", "rice", "vegetables", "soy sauce", "oil"] },
    { name: "Vegetable Fried Rice", description: "Stir-fried rice with mixed vegetables", cuisine: "Chinese", type: "Vegetarian", ingredients: ["rice", "vegetables", "soy sauce", "oil", "garlic"] },
    { name: "Chicken Manchurian", description: "Deep-fried chicken balls in tangy sauce", cuisine: "Chinese", type: "Non-Vegetarian", ingredients: ["chicken", "flour", "soy sauce", "vinegar", "spices"] },
    { name: "Gobi Manchurian", description: "Crispy cauliflower in spicy sauce", cuisine: "Chinese", type: "Vegetarian", ingredients: ["cauliflower", "flour", "soy sauce", "vinegar", "spices"] },
    { name: "Hakka Noodles", description: "Stir-fried noodles with vegetables", cuisine: "Chinese", type: "Vegetarian", ingredients: ["noodles", "vegetables", "soy sauce", "oil", "garlic"] },
    { name: "Chicken Noodles", description: "Stir-fried noodles with chicken", cuisine: "Chinese", type: "Non-Vegetarian", ingredients: ["chicken", "noodles", "vegetables", "soy sauce", "oil"] },
    { name: "Sweet and Sour Chicken", description: "Battered chicken in sweet and sour sauce", cuisine: "Chinese", type: "Non-Vegetarian", ingredients: ["chicken", "flour", "vinegar", "sugar", "bell pepper"] },
    { name: "Spring Rolls", description: "Crispy rolls filled with vegetables", cuisine: "Chinese", type: "Vegetarian", ingredients: ["vegetables", "flour", "oil", "soy sauce"] },
    { name: "Chicken Momos", description: "Steamed dumplings filled with chicken", cuisine: "Chinese", type: "Non-Vegetarian", ingredients: ["chicken", "flour", "onion", "garlic", "spices"] },
    { name: "Vegetable Momos", description: "Steamed dumplings filled with vegetables", cuisine: "Chinese", type: "Vegetarian", ingredients: ["vegetables", "flour", "onion", "garlic", "spices"] },
    
    // Italian Dishes
    { name: "Margherita Pizza", description: "Classic pizza with tomato, mozzarella, and basil", cuisine: "Italian", type: "Vegetarian", ingredients: ["tomato", "mozzarella", "basil", "dough", "olive oil"] },
    { name: "Pepperoni Pizza", description: "Pizza topped with pepperoni and cheese", cuisine: "Italian", type: "Non-Vegetarian", ingredients: ["pepperoni", "mozzarella", "tomato sauce", "dough"] },
    { name: "Spaghetti Carbonara", description: "Pasta with eggs, cheese, and pancetta", cuisine: "Italian", type: "Non-Vegetarian", ingredients: ["pasta", "eggs", "cheese", "pancetta", "black pepper"] },
    { name: "Pasta Arrabbiata", description: "Spicy pasta with tomato and chili", cuisine: "Italian", type: "Vegetarian", ingredients: ["pasta", "tomato", "chili", "garlic", "olive oil"] },
    { name: "Fettuccine Alfredo", description: "Creamy pasta with butter and parmesan", cuisine: "Italian", type: "Vegetarian", ingredients: ["pasta", "cream", "butter", "parmesan", "garlic"] },
    { name: "Lasagna", description: "Layered pasta with meat sauce and cheese", cuisine: "Italian", type: "Non-Vegetarian", ingredients: ["pasta", "ground meat", "tomato", "cheese", "herbs"] },
    { name: "Risotto", description: "Creamy rice dish with vegetables", cuisine: "Italian", type: "Vegetarian", ingredients: ["rice", "vegetables", "cheese", "broth", "wine"] },
    { name: "Bruschetta", description: "Toasted bread with tomato and basil", cuisine: "Italian", type: "Vegetarian", ingredients: ["bread", "tomato", "basil", "olive oil", "garlic"] },
    { name: "Chicken Parmesan", description: "Breaded chicken with tomato sauce and cheese", cuisine: "Italian", type: "Non-Vegetarian", ingredients: ["chicken", "breadcrumbs", "tomato", "mozzarella", "parmesan"] },
    { name: "Caesar Salad", description: "Romaine lettuce with croutons and parmesan", cuisine: "Italian", type: "Vegetarian", ingredients: ["lettuce", "croutons", "parmesan", "caesar dressing"] },
    
    // Mexican Dishes
    { name: "Chicken Tacos", description: "Soft tortillas filled with seasoned chicken", cuisine: "Mexican", type: "Non-Vegetarian", ingredients: ["chicken", "tortillas", "onion", "cilantro", "lime"] },
    { name: "Vegetable Tacos", description: "Soft tortillas filled with grilled vegetables", cuisine: "Mexican", type: "Vegetarian", ingredients: ["vegetables", "tortillas", "onion", "cilantro", "lime"] },
    { name: "Chicken Burrito", description: "Large tortilla wrapped with chicken and rice", cuisine: "Mexican", type: "Non-Vegetarian", ingredients: ["chicken", "tortilla", "rice", "beans", "cheese"] },
    { name: "Bean Burrito", description: "Large tortilla wrapped with beans and rice", cuisine: "Mexican", type: "Vegetarian", ingredients: ["beans", "tortilla", "rice", "cheese", "salsa"] },
    { name: "Chicken Quesadilla", description: "Grilled tortilla with chicken and cheese", cuisine: "Mexican", type: "Non-Vegetarian", ingredients: ["chicken", "tortilla", "cheese", "onion", "pepper"] },
    { name: "Vegetable Quesadilla", description: "Grilled tortilla with vegetables and cheese", cuisine: "Mexican", type: "Vegetarian", ingredients: ["vegetables", "tortilla", "cheese", "onion", "pepper"] },
    { name: "Chicken Enchiladas", description: "Rolled tortillas with chicken in sauce", cuisine: "Mexican", type: "Non-Vegetarian", ingredients: ["chicken", "tortillas", "sauce", "cheese", "onion"] },
    { name: "Guacamole", description: "Creamy avocado dip with lime and cilantro", cuisine: "Mexican", type: "Vegetarian", ingredients: ["avocado", "lime", "onion", "cilantro", "tomato"] },
    { name: "Chicken Fajitas", description: "Sizzling chicken with peppers and onions", cuisine: "Mexican", type: "Non-Vegetarian", ingredients: ["chicken", "bell peppers", "onion", "spices", "lime"] },
    { name: "Vegetable Fajitas", description: "Sizzling vegetables with spices", cuisine: "Mexican", type: "Vegetarian", ingredients: ["vegetables", "bell peppers", "onion", "spices", "lime"] },
    
    // Thai Dishes
    { name: "Pad Thai", description: "Stir-fried rice noodles with tamarind sauce", cuisine: "Thai", type: "Non-Vegetarian", ingredients: ["noodles", "shrimp", "tamarind", "fish sauce", "peanuts"] },
    { name: "Green Curry", description: "Spicy coconut curry with vegetables", cuisine: "Thai", type: "Vegetarian", ingredients: ["coconut milk", "green curry paste", "vegetables", "basil", "lime"] },
    { name: "Red Curry", description: "Spicy coconut curry with meat", cuisine: "Thai", type: "Non-Vegetarian", ingredients: ["coconut milk", "red curry paste", "meat", "basil", "lime"] },
    { name: "Tom Yum Soup", description: "Spicy and sour soup with shrimp", cuisine: "Thai", type: "Non-Vegetarian", ingredients: ["shrimp", "lemongrass", "lime", "chili", "mushrooms"] },
    { name: "Mango Sticky Rice", description: "Sweet sticky rice with fresh mango", cuisine: "Thai", type: "Vegetarian", ingredients: ["rice", "mango", "coconut milk", "sugar"] },
    { name: "Thai Basil Chicken", description: "Stir-fried chicken with basil and chili", cuisine: "Thai", type: "Non-Vegetarian", ingredients: ["chicken", "basil", "chili", "fish sauce", "garlic"] },
    { name: "Papaya Salad", description: "Spicy green papaya salad", cuisine: "Thai", type: "Vegetarian", ingredients: ["papaya", "tomato", "chili", "lime", "fish sauce"] },
    { name: "Massaman Curry", description: "Mild curry with potatoes and peanuts", cuisine: "Thai", type: "Non-Vegetarian", ingredients: ["coconut milk", "curry paste", "potato", "peanuts", "meat"] },
    { name: "Chicken Satay", description: "Grilled chicken skewers with peanut sauce", cuisine: "Thai", type: "Non-Vegetarian", ingredients: ["chicken", "coconut milk", "peanuts", "spices", "lime"] },
    { name: "Vegetable Spring Rolls", description: "Fresh rolls with vegetables and herbs", cuisine: "Thai", type: "Vegetarian", ingredients: ["vegetables", "rice paper", "herbs", "peanut sauce"] },
    
    // Japanese Dishes
    { name: "Chicken Teriyaki", description: "Grilled chicken with sweet teriyaki sauce", cuisine: "Japanese", type: "Non-Vegetarian", ingredients: ["chicken", "soy sauce", "sugar", "ginger", "garlic"] },
    { name: "Vegetable Tempura", description: "Lightly battered and fried vegetables", cuisine: "Japanese", type: "Vegetarian", ingredients: ["vegetables", "flour", "oil", "tempura sauce"] },
    { name: "Chicken Ramen", description: "Noodle soup with chicken and vegetables", cuisine: "Japanese", type: "Non-Vegetarian", ingredients: ["noodles", "chicken", "broth", "vegetables", "egg"] },
    { name: "Vegetable Ramen", description: "Noodle soup with vegetables", cuisine: "Japanese", type: "Vegetarian", ingredients: ["noodles", "vegetables", "broth", "miso", "tofu"] },
    { name: "Chicken Katsu", description: "Breaded and fried chicken cutlet", cuisine: "Japanese", type: "Non-Vegetarian", ingredients: ["chicken", "breadcrumbs", "egg", "flour", "oil"] },
    { name: "Miso Soup", description: "Traditional soup with fermented soybean paste", cuisine: "Japanese", type: "Vegetarian", ingredients: ["miso", "tofu", "seaweed", "green onions"] },
    { name: "Chicken Sushi", description: "Vinegared rice with chicken", cuisine: "Japanese", type: "Non-Vegetarian", ingredients: ["rice", "chicken", "vinegar", "seaweed", "vegetables"] },
    { name: "Vegetable Sushi", description: "Vinegared rice with vegetables", cuisine: "Japanese", type: "Vegetarian", ingredients: ["rice", "vegetables", "vinegar", "seaweed"] },
    { name: "Chicken Yakitori", description: "Grilled chicken skewers with sauce", cuisine: "Japanese", type: "Non-Vegetarian", ingredients: ["chicken", "soy sauce", "sake", "sugar", "ginger"] },
    { name: "Edamame", description: "Steamed young soybeans with salt", cuisine: "Japanese", type: "Vegetarian", ingredients: ["soybeans", "salt"] },
    
    // Continental Dishes
    { name: "Grilled Chicken", description: "Herb-marinated grilled chicken breast", cuisine: "Continental", type: "Non-Vegetarian", ingredients: ["chicken", "herbs", "olive oil", "lemon", "garlic"] },
    { name: "Caesar Salad", description: "Romaine lettuce with croutons and dressing", cuisine: "Continental", type: "Vegetarian", ingredients: ["lettuce", "croutons", "parmesan", "caesar dressing"] },
    { name: "Fish and Chips", description: "Battered fish with crispy fries", cuisine: "Continental", type: "Non-Vegetarian", ingredients: ["fish", "flour", "potato", "oil", "vinegar"] },
    { name: "Beef Steak", description: "Grilled beef steak with herbs", cuisine: "Continental", type: "Non-Vegetarian", ingredients: ["beef", "herbs", "butter", "garlic", "pepper"] },
    { name: "Chicken Sandwich", description: "Grilled chicken in bread with vegetables", cuisine: "Continental", type: "Non-Vegetarian", ingredients: ["chicken", "bread", "lettuce", "tomato", "mayo"] },
    { name: "Vegetable Sandwich", description: "Fresh vegetables in bread", cuisine: "Continental", type: "Vegetarian", ingredients: ["vegetables", "bread", "lettuce", "tomato", "mayo"] },
    { name: "Chicken Burger", description: "Chicken patty in bun with vegetables", cuisine: "Continental", type: "Non-Vegetarian", ingredients: ["chicken", "bun", "lettuce", "tomato", "cheese"] },
    { name: "Vegetable Burger", description: "Vegetable patty in bun", cuisine: "Continental", type: "Vegetarian", ingredients: ["vegetables", "bun", "lettuce", "tomato", "cheese"] },
    { name: "Chicken Wrap", description: "Chicken and vegetables wrapped in tortilla", cuisine: "Continental", type: "Non-Vegetarian", ingredients: ["chicken", "tortilla", "vegetables", "sauce"] },
    { name: "Vegetable Wrap", description: "Fresh vegetables wrapped in tortilla", cuisine: "Continental", type: "Vegetarian", ingredients: ["vegetables", "tortilla", "hummus", "lettuce"] },
    
    // South Indian Dishes
    { name: "Idli", description: "Steamed rice cakes with coconut chutney", cuisine: "South Indian", type: "Vegetarian", ingredients: ["rice", "lentils", "coconut", "curry leaves", "mustard"] },
    { name: "Dosa", description: "Crispy fermented crepe with sambar", cuisine: "South Indian", type: "Vegetarian", ingredients: ["rice", "lentils", "potato", "onion", "spices"] },
    { name: "Vada", description: "Deep-fried lentil fritters", cuisine: "South Indian", type: "Vegetarian", ingredients: ["lentils", "onion", "curry leaves", "spices", "oil"] },
    { name: "Sambar", description: "Lentil stew with vegetables and tamarind", cuisine: "South Indian", type: "Vegetarian", ingredients: ["lentils", "vegetables", "tamarind", "spices", "curry leaves"] },
    { name: "Rasam", description: "Spicy and tangy soup with tamarind", cuisine: "South Indian", type: "Vegetarian", ingredients: ["tamarind", "tomato", "spices", "curry leaves", "garlic"] },
    { name: "Coconut Chutney", description: "Fresh coconut with green chilies", cuisine: "South Indian", type: "Vegetarian", ingredients: ["coconut", "green chili", "curry leaves", "mustard", "ginger"] },
    { name: "Tomato Chutney", description: "Spicy tomato relish", cuisine: "South Indian", type: "Vegetarian", ingredients: ["tomato", "onion", "garlic", "spices", "oil"] },
    { name: "Upma", description: "Semolina porridge with vegetables", cuisine: "South Indian", type: "Vegetarian", ingredients: ["semolina", "vegetables", "onion", "curry leaves", "mustard"] },
    { name: "Pongal", description: "Rice and lentil porridge", cuisine: "South Indian", type: "Vegetarian", ingredients: ["rice", "lentils", "pepper", "cumin", "ginger"] },
    { name: "Bisi Bele Bath", description: "Spicy rice and lentil dish", cuisine: "South Indian", type: "Vegetarian", ingredients: ["rice", "lentils", "vegetables", "spices", "tamarind"] },
    
    // North Indian Dishes
    { name: "Naan", description: "Soft leavened bread cooked in tandoor", cuisine: "North Indian", type: "Vegetarian", ingredients: ["flour", "yogurt", "yeast", "butter", "garlic"] },
    { name: "Roti", description: "Whole wheat flatbread", cuisine: "North Indian", type: "Vegetarian", ingredients: ["wheat flour", "water", "oil"] },
    { name: "Paratha", description: "Layered flatbread with ghee", cuisine: "North Indian", type: "Vegetarian", ingredients: ["wheat flour", "ghee", "oil", "spices"] },
    { name: "Aloo Paratha", description: "Flatbread stuffed with spiced potatoes", cuisine: "North Indian", type: "Vegetarian", ingredients: ["wheat flour", "potato", "spices", "ghee", "onion"] },
    { name: "Gobi Paratha", description: "Flatbread stuffed with spiced cauliflower", cuisine: "North Indian", type: "Vegetarian", ingredients: ["wheat flour", "cauliflower", "spices", "ghee", "onion"] },
    { name: "Paneer Paratha", description: "Flatbread stuffed with spiced paneer", cuisine: "North Indian", type: "Vegetarian", ingredients: ["wheat flour", "paneer", "spices", "ghee", "onion"] },
    { name: "Kulcha", description: "Leavened bread with toppings", cuisine: "North Indian", type: "Vegetarian", ingredients: ["flour", "yogurt", "yeast", "onion", "spices"] },
    { name: "Tandoori Roti", description: "Whole wheat bread cooked in tandoor", cuisine: "North Indian", type: "Vegetarian", ingredients: ["wheat flour", "water", "oil"] },
    { name: "Missi Roti", description: "Spiced flatbread with gram flour", cuisine: "North Indian", type: "Vegetarian", ingredients: ["wheat flour", "gram flour", "spices", "onion", "oil"] },
    { name: "Lachha Paratha", description: "Layered crispy flatbread", cuisine: "North Indian", type: "Vegetarian", ingredients: ["wheat flour", "ghee", "oil"] },
    
    // Street Food
    { name: "Pav Bhaji", description: "Spicy vegetable curry with buttered bread", cuisine: "Street Food", type: "Vegetarian", ingredients: ["vegetables", "butter", "spices", "bread", "onion"] },
    { name: "Vada Pav", description: "Spicy potato fritter in bread", cuisine: "Street Food", type: "Vegetarian", ingredients: ["potato", "flour", "spices", "bread", "chutney"] },
    { name: "Bhel Puri", description: "Puffed rice with vegetables and chutney", cuisine: "Street Food", type: "Vegetarian", ingredients: ["puffed rice", "vegetables", "chutney", "spices", "onion"] },
    { name: "Pani Puri", description: "Crispy shells with spiced water", cuisine: "Street Food", type: "Vegetarian", ingredients: ["puris", "spiced water", "tamarind", "chutney", "potato"] },
    { name: "Dahi Puri", description: "Crispy shells with yogurt and chutney", cuisine: "Street Food", type: "Vegetarian", ingredients: ["puris", "yogurt", "chutney", "spices", "onion"] },
    { name: "Chole Bhature", description: "Spicy chickpeas with fried bread", cuisine: "Street Food", type: "Vegetarian", ingredients: ["chickpeas", "flour", "spices", "oil", "onion"] },
    { name: "Aloo Tikki", description: "Spiced potato patties with chutney", cuisine: "Street Food", type: "Vegetarian", ingredients: ["potato", "spices", "oil", "chutney", "onion"] },
    { name: "Kachori", description: "Deep-fried pastry with spiced filling", cuisine: "Street Food", type: "Vegetarian", ingredients: ["flour", "spices", "oil", "onion", "garlic"] },
    { name: "Jalebi", description: "Sweet deep-fried spirals in syrup", cuisine: "Street Food", type: "Vegetarian", ingredients: ["flour", "sugar", "oil", "saffron", "cardamom"] },
    { name: "Gulab Jamun", description: "Milk-based dumplings in sugar syrup", cuisine: "Street Food", type: "Vegetarian", ingredients: ["milk powder", "flour", "sugar", "oil", "cardamom"] },
    
    // Desserts
    { name: "Ice Cream", description: "Creamy frozen dessert in various flavors", cuisine: "Dessert", type: "Vegetarian", ingredients: ["cream", "milk", "sugar", "vanilla", "flavoring"] },
    { name: "Chocolate Cake", description: "Rich chocolate sponge cake", cuisine: "Dessert", type: "Vegetarian", ingredients: ["flour", "chocolate", "sugar", "eggs", "butter"] },
    { name: "Tiramisu", description: "Italian coffee-flavored dessert", cuisine: "Dessert", type: "Vegetarian", ingredients: ["mascarpone", "coffee", "cocoa", "ladyfingers", "eggs"] },
    { name: "Cheesecake", description: "Creamy cheese-based dessert", cuisine: "Dessert", type: "Vegetarian", ingredients: ["cream cheese", "sugar", "eggs", "graham crackers", "butter"] },
    { name: "Brownie", description: "Dense chocolate square", cuisine: "Dessert", type: "Vegetarian", ingredients: ["chocolate", "flour", "sugar", "eggs", "butter"] },
    { name: "Pudding", description: "Creamy milk-based dessert", cuisine: "Dessert", type: "Vegetarian", ingredients: ["milk", "sugar", "cornstarch", "vanilla", "eggs"] },
    { name: "Fruit Salad", description: "Fresh mixed fruits", cuisine: "Dessert", type: "Vegetarian", ingredients: ["fruits", "honey", "lemon", "mint"] },
    { name: "Pancakes", description: "Fluffy breakfast cakes with syrup", cuisine: "Dessert", type: "Vegetarian", ingredients: ["flour", "milk", "eggs", "sugar", "butter"] },
    { name: "Waffles", description: "Crispy breakfast cakes", cuisine: "Dessert", type: "Vegetarian", ingredients: ["flour", "milk", "eggs", "sugar", "butter"] },
    { name: "Donuts", description: "Sweet fried dough rings", cuisine: "Dessert", type: "Vegetarian", ingredients: ["flour", "sugar", "yeast", "oil", "glaze"] },
    
    // Beverages
    { name: "Fresh Juice", description: "Freshly squeezed fruit juice", cuisine: "Beverage", type: "Vegetarian", ingredients: ["fruits", "ice", "sugar"] },
    { name: "Smoothie", description: "Blended fruit and yogurt drink", cuisine: "Beverage", type: "Vegetarian", ingredients: ["fruits", "yogurt", "milk", "honey", "ice"] },
    { name: "Lassi", description: "Yogurt-based drink with spices", cuisine: "Beverage", type: "Vegetarian", ingredients: ["yogurt", "water", "sugar", "cardamom", "ice"] },
    { name: "Masala Chai", description: "Spiced tea with milk", cuisine: "Beverage", type: "Vegetarian", ingredients: ["tea", "milk", "spices", "sugar", "ginger"] },
    { name: "Coffee", description: "Brewed coffee with milk", cuisine: "Beverage", type: "Vegetarian", ingredients: ["coffee", "milk", "sugar"] },
    { name: "Hot Chocolate", description: "Warm chocolate drink", cuisine: "Beverage", type: "Vegetarian", ingredients: ["chocolate", "milk", "sugar", "cream"] },
    { name: "Lemonade", description: "Refreshing lemon drink", cuisine: "Beverage", type: "Vegetarian", ingredients: ["lemon", "water", "sugar", "ice", "mint"] },
    { name: "Iced Tea", description: "Chilled tea with lemon", cuisine: "Beverage", type: "Vegetarian", ingredients: ["tea", "lemon", "sugar", "ice"] },
    { name: "Milkshake", description: "Thick milk and ice cream drink", cuisine: "Beverage", type: "Vegetarian", ingredients: ["milk", "ice cream", "flavoring", "sugar"] },
    { name: "Energy Drink", description: "Caffeinated beverage", cuisine: "Beverage", type: "Vegetarian", ingredients: ["caffeine", "sugar", "vitamins", "flavoring"] }
];

// DOM Elements
const includeInput = document.getElementById('include-input');
const excludeInput = document.getElementById('exclude-input');
const recommendBtn = document.getElementById('recommend-btn');
const resultSection = document.getElementById('result-section');
const noResults = document.getElementById('no-results');
const dishName = document.getElementById('dish-name');
const dishDescription = document.getElementById('dish-description');
const dishCuisine = document.getElementById('dish-cuisine');
const dishType = document.getElementById('dish-type');
const tryAgainBtn = document.getElementById('try-again-btn');
const orderBtn = document.getElementById('order-btn');
const clearPreferencesBtn = document.getElementById('clear-preferences');

// Event Listeners
recommendBtn.addEventListener('click', getRecommendation);
tryAgainBtn.addEventListener('click', tryAgain);
clearPreferencesBtn.addEventListener('click', clearPreferences);
orderBtn.addEventListener('click', orderDish);

// Allow Enter key to trigger recommendation
includeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getRecommendation();
    }
});

excludeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getRecommendation();
    }
});

// Main recommendation function
function getRecommendation() {
    const includeText = includeInput.value.trim().toLowerCase();
    const excludeText = excludeInput.value.trim().toLowerCase();
    
    // Show loading state
    recommendBtn.innerHTML = '<div class="loading"></div> Getting Recommendation...';
    recommendBtn.disabled = true;
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        const recommendation = findRecommendation(includeText, excludeText);
        
        if (recommendation) {
            displayRecommendation(recommendation);
        } else {
            showNoResults();
        }
        
        // Reset button
        recommendBtn.innerHTML = '<i class="fas fa-magic"></i> Get My Recommendation';
        recommendBtn.disabled = false;
    }, 1000);
}

// Find recommendation based on preferences
function findRecommendation(includeText, excludeText) {
    let matchingDishes = [...dishDatabase];
    
    // Filter by include preferences
    if (includeText) {
        const includeKeywords = includeText.split(',').map(keyword => keyword.trim());
        matchingDishes = matchingDishes.filter(dish => {
            return includeKeywords.some(keyword => 
                dish.name.toLowerCase().includes(keyword) ||
                dish.ingredients.some(ingredient => ingredient.toLowerCase().includes(keyword)) ||
                dish.cuisine.toLowerCase().includes(keyword) ||
                dish.type.toLowerCase().includes(keyword)
            );
        });
    }
    
    // Filter by exclude preferences
    if (excludeText) {
        const excludeKeywords = excludeText.split(',').map(keyword => keyword.trim());
        matchingDishes = matchingDishes.filter(dish => {
            return !excludeKeywords.some(keyword => 
                dish.name.toLowerCase().includes(keyword) ||
                dish.ingredients.some(ingredient => ingredient.toLowerCase().includes(keyword)) ||
                dish.cuisine.toLowerCase().includes(keyword) ||
                dish.type.toLowerCase().includes(keyword)
            );
        });
    }
    
    // If no specific preferences, return random dish
    if (!includeText && !excludeText) {
        matchingDishes = dishDatabase;
    }
    
    // Return random dish from matching dishes
    if (matchingDishes.length > 0) {
        const randomIndex = Math.floor(Math.random() * matchingDishes.length);
        return matchingDishes[randomIndex];
    }
    
    return null;
}

// Display the recommendation
function displayRecommendation(dish) {
    dishName.textContent = dish.name;
    dishDescription.textContent = dish.description;
    dishCuisine.textContent = dish.cuisine;
    dishType.textContent = dish.type;
    
    // Hide no results and show result
    noResults.classList.add('hidden');
    resultSection.classList.remove('hidden');
    
    // Scroll to result
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// Show no results message
function showNoResults() {
    resultSection.classList.add('hidden');
    noResults.classList.remove('hidden');
    
    // Scroll to no results
    noResults.scrollIntoView({ behavior: 'smooth' });
}

// Try again function
function tryAgain() {
    resultSection.classList.add('hidden');
    noResults.classList.add('hidden');
    
    // Clear inputs
    includeInput.value = '';
    excludeInput.value = '';
    
    // Focus on include input
    includeInput.focus();
}

// Clear preferences function
function clearPreferences() {
    includeInput.value = '';
    excludeInput.value = '';
    resultSection.classList.add('hidden');
    noResults.classList.add('hidden');
    includeInput.focus();
}

// Order dish function (placeholder for future integration)
function orderDish() {
    const dishName = document.getElementById('dish-name').textContent;
    
    // This would integrate with food delivery platforms
    alert(`Ordering ${dishName}...\n\nThis feature will integrate with food delivery platforms like Swiggy, Zomato, etc.`);
    
    // For now, just show a message
    console.log(`User wants to order: ${dishName}`);
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Focus on the include input when page loads
    includeInput.focus();
    
    // Add some sample suggestions
    const suggestions = [
        "Try: paneer, chicken, spicy, vegetarian",
        "Exclude: bitter gourd, brinjal, too spicy"
    ];
    
    // You could add a suggestions feature here
    console.log('Foodie Recommender App Loaded!');
    console.log(`Database contains ${dishDatabase.length} dishes`);
});
