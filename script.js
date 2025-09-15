// Enhanced Dish Database with comprehensive food items
const dishDatabase = [
    // Bengaluru Favorites - South Indian
    { name: "Masala Dosa", description: "Crispy crepe with spiced potato filling - Bengaluru's favorite breakfast", cuisine: "South Indian", type: "Vegetarian", ingredients: ["rice", "lentils", "potato", "onion", "spices"], spice: "medium", meal: "breakfast", special: "traditional" },
    { name: "Idli Sambar", description: "Soft rice cakes with tangy lentil stew", cuisine: "South Indian", type: "Vegetarian", ingredients: ["rice", "lentils", "vegetables", "tamarind", "spices"], spice: "mild", meal: "breakfast", special: "healthy" },
    { name: "Vada Sambar", description: "Crispy lentil fritters with spicy sambar", cuisine: "South Indian", type: "Vegetarian", ingredients: ["lentils", "vegetables", "tamarind", "spices", "oil"], spice: "medium", meal: "breakfast", special: "traditional" },
    { name: "Bisi Bele Bath", description: "Spicy rice and lentil dish - Karnataka's comfort food", cuisine: "South Indian", type: "Vegetarian", ingredients: ["rice", "lentils", "vegetables", "spices", "tamarind"], spice: "spicy", meal: "lunch", special: "comfort" },
    { name: "Akki Roti", description: "Rice flour flatbread with vegetables - complete meal", cuisine: "South Indian", type: "Vegetarian", ingredients: ["rice flour", "vegetables", "onion", "spices", "oil"], spice: "mild", meal: "breakfast", special: "traditional" },
    { name: "Rava Idli", description: "Semolina-based steamed cakes - complete breakfast", cuisine: "South Indian", type: "Vegetarian", ingredients: ["semolina", "yogurt", "vegetables", "spices", "oil"], spice: "mild", meal: "breakfast", special: "healthy" },
    { name: "Pesarattu", description: "Green gram crepe with onions - complete breakfast", cuisine: "South Indian", type: "Vegetarian", ingredients: ["green gram", "rice", "onion", "spices", "oil"], spice: "mild", meal: "breakfast", special: "healthy" },
    { name: "Uttapam", description: "Thick pancake with vegetables - complete meal", cuisine: "South Indian", type: "Vegetarian", ingredients: ["rice", "lentils", "vegetables", "onion", "spices"], spice: "mild", meal: "breakfast", special: "traditional" },
    
    // Bengaluru Street Food
    { name: "Masala Puri", description: "Spicy puffed rice with tangy chutney - Bengaluru street favorite", cuisine: "Street Food", type: "Vegetarian", ingredients: ["puffed rice", "onion", "tomato", "chutney", "spices"], spice: "spicy", meal: "snacks", special: "quick" },
    { name: "Gobi Manchurian", description: "Crispy cauliflower in spicy sauce - IT crowd favorite", cuisine: "Street Food", type: "Vegetarian", ingredients: ["cauliflower", "flour", "soy sauce", "vinegar", "spices"], spice: "spicy", meal: "snacks", special: "quick" },
    { name: "Pani Puri", description: "Crispy shells with spiced water - perfect evening snack", cuisine: "Street Food", type: "Vegetarian", ingredients: ["puris", "spiced water", "tamarind", "chutney", "potato"], spice: "spicy", meal: "snacks", special: "quick" },
    { name: "Dahi Puri", description: "Crispy shells with yogurt and chutney", cuisine: "Street Food", type: "Vegetarian", ingredients: ["puris", "yogurt", "chutney", "spices", "onion"], spice: "mild", meal: "snacks", special: "quick" },
    { name: "Bhel Puri", description: "Mumbai-style puffed rice with vegetables", cuisine: "Street Food", type: "Vegetarian", ingredients: ["puffed rice", "vegetables", "chutney", "spices", "onion"], spice: "medium", meal: "snacks", special: "quick" },
    
    // Bengaluru IT Hub Favorites
    { name: "Chicken Biryani", description: "Aromatic basmati rice with spiced chicken - perfect for lunch", cuisine: "North Indian", type: "Non-Vegetarian", ingredients: ["chicken", "rice", "yogurt", "spices", "saffron"], spice: "medium", meal: "lunch", special: "comfort" },
    { name: "Butter Chicken", description: "Creamy tomato-based chicken curry - office lunch favorite", cuisine: "North Indian", type: "Non-Vegetarian", ingredients: ["chicken", "tomato", "cream", "butter", "spices"], spice: "mild", meal: "lunch", special: "comfort" },
    { name: "Chicken Fried Rice", description: "Quick and satisfying stir-fried rice with chicken", cuisine: "Chinese", type: "Non-Vegetarian", ingredients: ["chicken", "rice", "vegetables", "soy sauce", "oil"], spice: "mild", meal: "lunch", special: "quick" },
    { name: "Hakka Noodles", description: "Stir-fried noodles with vegetables - perfect for dinner", cuisine: "Chinese", type: "Vegetarian", ingredients: ["noodles", "vegetables", "soy sauce", "oil", "garlic"], spice: "medium", meal: "dinner", special: "quick" },
    { name: "Margherita Pizza", description: "Classic pizza with tomato, mozzarella, and basil", cuisine: "Continental", type: "Vegetarian", ingredients: ["tomato", "mozzarella", "basil", "dough", "olive oil"], spice: "mild", meal: "dinner", special: "comfort" },
    
    // Indian Vegetarian Dishes
    { name: "Paneer Butter Masala", description: "Creamy tomato-based curry with soft paneer cubes", cuisine: "North Indian", type: "Vegetarian", ingredients: ["paneer", "tomato", "cream", "butter", "spices"], spice: "mild", meal: "lunch", special: "comfort" },
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
    
    // South Indian Dishes - Complete Single Dishes Only
    { name: "Upma", description: "Semolina porridge with vegetables - complete breakfast", cuisine: "South Indian", type: "Vegetarian", ingredients: ["semolina", "vegetables", "onion", "curry leaves", "mustard"], spice: "mild", meal: "breakfast", special: "healthy" },
    { name: "Pongal", description: "Rice and lentil porridge - complete meal", cuisine: "South Indian", type: "Vegetarian", ingredients: ["rice", "lentils", "pepper", "cumin", "ginger"], spice: "mild", meal: "breakfast", special: "comfort" },
    { name: "Ven Pongal", description: "Spiced rice and lentil porridge - complete meal", cuisine: "South Indian", type: "Vegetarian", ingredients: ["rice", "lentils", "pepper", "cumin", "ginger", "ghee"], spice: "mild", meal: "breakfast", special: "comfort" },
    { name: "Kesari Bath", description: "Sweet semolina dessert - complete sweet dish", cuisine: "South Indian", type: "Vegetarian", ingredients: ["semolina", "sugar", "ghee", "saffron", "nuts"], spice: "mild", meal: "snacks", special: "comfort" },
    { name: "Rava Kesari", description: "Sweet semolina pudding with nuts - complete dessert", cuisine: "South Indian", type: "Vegetarian", ingredients: ["semolina", "sugar", "ghee", "saffron", "cashews"], spice: "mild", meal: "snacks", special: "comfort" },
    
    // North Indian Dishes - Complete Single Dishes Only
    { name: "Aloo Paratha", description: "Flatbread stuffed with spiced potatoes - complete meal", cuisine: "North Indian", type: "Vegetarian", ingredients: ["wheat flour", "potato", "spices", "ghee", "onion"], spice: "medium", meal: "breakfast", special: "comfort" },
    { name: "Gobi Paratha", description: "Flatbread stuffed with spiced cauliflower - complete meal", cuisine: "North Indian", type: "Vegetarian", ingredients: ["wheat flour", "cauliflower", "spices", "ghee", "onion"], spice: "medium", meal: "breakfast", special: "comfort" },
    { name: "Paneer Paratha", description: "Flatbread stuffed with spiced paneer - complete meal", cuisine: "North Indian", type: "Vegetarian", ingredients: ["wheat flour", "paneer", "spices", "ghee", "onion"], spice: "medium", meal: "breakfast", special: "comfort" },
    { name: "Missi Roti", description: "Spiced flatbread with gram flour - complete meal", cuisine: "North Indian", type: "Vegetarian", ingredients: ["wheat flour", "gram flour", "spices", "onion", "oil"], spice: "medium", meal: "breakfast", special: "traditional" },
    { name: "Lachha Paratha", description: "Layered crispy flatbread - complete meal", cuisine: "North Indian", type: "Vegetarian", ingredients: ["wheat flour", "ghee", "oil"], spice: "mild", meal: "breakfast", special: "traditional" },
    { name: "Aloo Tikki", description: "Spiced potato patties - complete snack", cuisine: "North Indian", type: "Vegetarian", ingredients: ["potato", "spices", "oil", "onion", "garlic"], spice: "medium", meal: "snacks", special: "quick" },
    { name: "Samosa", description: "Crispy fried pastry filled with spiced potatoes - complete snack", cuisine: "North Indian", type: "Vegetarian", ingredients: ["potato", "flour", "spices", "oil", "onion"], spice: "medium", meal: "snacks", special: "quick" },
    { name: "Kachori", description: "Deep-fried pastry with spiced filling - complete snack", cuisine: "North Indian", type: "Vegetarian", ingredients: ["flour", "spices", "oil", "onion", "garlic"], spice: "medium", meal: "snacks", special: "quick" },
    
    // Street Food - Complete Single Dishes Only
    { name: "Pav Bhaji", description: "Spicy vegetable curry with buttered bread - complete meal", cuisine: "Street Food", type: "Vegetarian", ingredients: ["vegetables", "butter", "spices", "bread", "onion"], spice: "spicy", meal: "lunch", special: "comfort" },
    { name: "Vada Pav", description: "Spicy potato fritter in bread - complete snack", cuisine: "Street Food", type: "Vegetarian", ingredients: ["potato", "flour", "spices", "bread", "chutney"], spice: "spicy", meal: "snacks", special: "quick" },
    { name: "Bhel Puri", description: "Puffed rice with vegetables and chutney - complete snack", cuisine: "Street Food", type: "Vegetarian", ingredients: ["puffed rice", "vegetables", "chutney", "spices", "onion"], spice: "medium", meal: "snacks", special: "quick" },
    { name: "Pani Puri", description: "Crispy shells with spiced water - complete snack", cuisine: "Street Food", type: "Vegetarian", ingredients: ["puris", "spiced water", "tamarind", "chutney", "potato"], spice: "spicy", meal: "snacks", special: "quick" },
    { name: "Dahi Puri", description: "Crispy shells with yogurt and chutney - complete snack", cuisine: "Street Food", type: "Vegetarian", ingredients: ["puris", "yogurt", "chutney", "spices", "onion"], spice: "mild", meal: "snacks", special: "quick" },
    { name: "Chole Bhature", description: "Spicy chickpeas with fried bread - complete meal", cuisine: "Street Food", type: "Vegetarian", ingredients: ["chickpeas", "flour", "spices", "oil", "onion"], spice: "medium", meal: "lunch", special: "comfort" },
    { name: "Jalebi", description: "Sweet deep-fried spirals in syrup - complete dessert", cuisine: "Street Food", type: "Vegetarian", ingredients: ["flour", "sugar", "oil", "saffron", "cardamom"], spice: "mild", meal: "snacks", special: "comfort" },
    { name: "Gulab Jamun", description: "Milk-based dumplings in sugar syrup - complete dessert", cuisine: "Street Food", type: "Vegetarian", ingredients: ["milk powder", "flour", "sugar", "oil", "cardamom"], spice: "mild", meal: "snacks", special: "comfort" },
    
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

// Combo Meal Database
const comboDatabase = {
    roti: [
        { name: "Naan", description: "Soft leavened bread cooked in tandoor", type: "bread", spice: "mild" },
        { name: "Butter Naan", description: "Soft naan brushed with butter", type: "bread", spice: "mild" },
        { name: "Garlic Naan", description: "Naan topped with garlic and herbs", type: "bread", spice: "mild" },
        { name: "Bhature", description: "Deep-fried leavened bread", type: "bread", spice: "mild" },
        { name: "Tandoori Roti", description: "Whole wheat bread cooked in tandoor", type: "bread", spice: "mild" },
        { name: "Jeera Rice", description: "Basmati rice tempered with cumin seeds", type: "rice", spice: "mild" },
        { name: "Plain Rice", description: "Steamed basmati rice", type: "rice", spice: "mild" },
        { name: "Biryani Rice", description: "Aromatic basmati rice with spices", type: "rice", spice: "medium" }
    ],
    curry: [
        { name: "Chhole", description: "Spicy chickpea curry with onions and tomatoes", type: "vegetarian", spice: "medium" },
        { name: "Rajma", description: "Red kidney bean curry in tomato gravy", type: "vegetarian", spice: "medium" },
        { name: "Chicken Curry", description: "Tender chicken in rich tomato-based gravy", type: "non-vegetarian", spice: "medium" },
        { name: "Egg Curry", description: "Hard-boiled eggs in spicy tomato curry", type: "egg", spice: "medium" },
        { name: "Paneer Curry", description: "Cottage cheese in creamy tomato gravy", type: "vegetarian", spice: "mild" },
        { name: "Dal", description: "Lentil curry with aromatic spices", type: "vegetarian", spice: "mild" },
        { name: "Mutton Curry", description: "Tender mutton in spicy curry", type: "non-vegetarian", spice: "spicy" },
        { name: "Fish Curry", description: "Fish cooked in tangy coconut curry", type: "non-vegetarian", spice: "medium" }
    ]
};

// DOM Elements
const mainMenu = document.getElementById('main-menu');
const singleDishSection = document.getElementById('single-dish-section');
const comboMealSection = document.getElementById('combo-meal-section');
const surpriseMeSection = document.getElementById('surprise-me-section');

// Single Dish Elements
const recommendBtn = document.getElementById('recommend-btn');
const resultSection = document.getElementById('result-section');
const dishName = document.getElementById('dish-name');
const dishDescription = document.getElementById('dish-description');
const dishCuisine = document.getElementById('dish-cuisine');
const dishType = document.getElementById('dish-type');
const tryAgainBtn = document.getElementById('try-again-btn');
const orderBtn = document.getElementById('order-btn');
const selectedFiltersList = document.getElementById('selected-filters-list');

// Combo Meal Elements
const comboRecommendBtn = document.getElementById('combo-recommend-btn');
const comboResultSection = document.getElementById('combo-result-section');
const rotiName = document.getElementById('roti-name');
const rotiDescription = document.getElementById('roti-description');
const curryName = document.getElementById('curry-name');
const curryDescription = document.getElementById('curry-description');
const comboTryAgainBtn = document.getElementById('combo-try-again-btn');
const comboOrderBtn = document.getElementById('combo-order-btn');
const comboSelectedFiltersList = document.getElementById('combo-selected-filters-list');

// Surprise Me Elements
const surpriseBtn = document.getElementById('surprise-btn');

// Common Elements
const noResults = document.getElementById('no-results');
const clearPreferencesBtn = document.getElementById('clear-preferences');

// Filter state
let selectedFilters = {
    cuisine: [],
    type: [],
    spice: [],
    meal: [],
    special: []
};

let selectedComboFilters = {
    roti: [],
    curry: [],
    spice: []
};

let currentMode = 'main'; // 'main', 'single-dish', 'combo-meal', 'surprise-me'

// Event Listeners
// Main menu navigation
document.addEventListener('click', (e) => {
    if (e.target.closest('.menu-option')) {
        const option = e.target.closest('.menu-option').dataset.option;
        showSection(option);
    }
});

// Single dish functionality
recommendBtn.addEventListener('click', getRecommendation);
tryAgainBtn.addEventListener('click', tryAgain);
orderBtn.addEventListener('click', orderDish);

// Combo meal functionality
comboRecommendBtn.addEventListener('click', getComboRecommendation);
comboTryAgainBtn.addEventListener('click', tryAgain);
comboOrderBtn.addEventListener('click', orderCombo);

// Surprise me functionality
surpriseBtn.addEventListener('click', surpriseMe);

// Clear preferences
if (clearPreferencesBtn) {
    clearPreferencesBtn.addEventListener('click', clearPreferences);
}

// Filter button event listeners
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        toggleFilter(e.target);
    }
    
    if (e.target.classList.contains('remove-btn')) {
        removeFilter(e.target);
    }
});

// Navigation Functions
function showSection(section) {
    // Hide all sections
    mainMenu.classList.add('hidden');
    singleDishSection.classList.add('hidden');
    comboMealSection.classList.add('hidden');
    surpriseMeSection.classList.add('hidden');
    resultSection.classList.add('hidden');
    comboResultSection.classList.add('hidden');
    noResults.classList.add('hidden');
    
    // Show selected section
    currentMode = section;
    switch(section) {
        case 'single-dish':
            singleDishSection.classList.remove('hidden');
            break;
        case 'combo-meal':
            comboMealSection.classList.remove('hidden');
            break;
        case 'surprise-me':
            surpriseMeSection.classList.remove('hidden');
            break;
        default:
            mainMenu.classList.remove('hidden');
    }
}

function showMainMenu() {
    showSection('main');
}

// Surprise Me Function
function surpriseMe() {
    surpriseBtn.innerHTML = '<div class="loading"></div> Surprising you...';
    surpriseBtn.disabled = true;
    
    setTimeout(() => {
        // Randomly choose between single dish or combo meal
        const isCombo = Math.random() < 0.5;
        
        if (isCombo) {
            getComboRecommendation(true);
        } else {
            getRecommendation(true);
        }
        
        surpriseBtn.innerHTML = '<i class="fas fa-magic"></i> Surprise Me!';
        surpriseBtn.disabled = false;
    }, 1000);
}

// Main recommendation function
function getRecommendation(isSurprise = false) {
    if (!isSurprise) {
        // Show loading state
        recommendBtn.innerHTML = '<div class="loading"></div> Getting Recommendation...';
        recommendBtn.disabled = true;
    }
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        const recommendation = findRecommendation();
        
        if (recommendation) {
            displayRecommendation(recommendation);
        } else {
            showNoResults();
        }
        
        // Reset button
        if (!isSurprise) {
            recommendBtn.innerHTML = '<i class="fas fa-magic"></i> Get My Recommendation';
            recommendBtn.disabled = false;
        }
    }, 1000);
}

// Combo recommendation function
function getComboRecommendation(isSurprise = false) {
    if (!isSurprise) {
        // Show loading state
        comboRecommendBtn.innerHTML = '<div class="loading"></div> Getting Combo...';
        comboRecommendBtn.disabled = true;
    }
    
    setTimeout(() => {
        const comboRecommendation = findComboRecommendation();
        
        if (comboRecommendation) {
            displayComboRecommendation(comboRecommendation);
        } else {
            showNoResults();
        }
        
        // Reset button
        if (!isSurprise) {
            comboRecommendBtn.innerHTML = '<i class="fas fa-magic"></i> Get My Combo Recommendation';
            comboRecommendBtn.disabled = false;
        }
    }, 1000);
}

// Find recommendation based on selected filters
function findRecommendation() {
    let matchingDishes = [...dishDatabase];
    let fallbackDishes = [...dishDatabase];
    
    console.log('Selected filters:', selectedFilters);
    console.log('Total dishes before filtering:', matchingDishes.length);
    
    // Filter by cuisine
    if (selectedFilters.cuisine.length > 0) {
        console.log('Filtering by cuisine:', selectedFilters.cuisine);
        const cuisineMatches = matchingDishes.filter(dish => 
            selectedFilters.cuisine.some(cuisine => 
                dish.cuisine.toLowerCase() === cuisine.toLowerCase()
            )
        );
        if (cuisineMatches.length > 0) {
            matchingDishes = cuisineMatches;
            fallbackDishes = cuisineMatches;
        }
        console.log('Dishes after cuisine filter:', matchingDishes.length);
        console.log('Matching dishes:', matchingDishes.map(d => d.name));
    }
    
    // Filter by food type
    if (selectedFilters.type.length > 0) {
        const typeMatches = matchingDishes.filter(dish => 
            selectedFilters.type.some(type => 
                dish.type.toLowerCase() === type.toLowerCase()
            )
        );
        if (typeMatches.length > 0) {
            matchingDishes = typeMatches;
        }
    }
    
    // Filter by spice level
    if (selectedFilters.spice.length > 0) {
        const spiceMatches = matchingDishes.filter(dish => 
            selectedFilters.spice.some(spice => 
                dish.spice && dish.spice.toLowerCase() === spice.toLowerCase()
            )
        );
        if (spiceMatches.length > 0) {
            matchingDishes = spiceMatches;
        }
    }
    
    // Filter by meal time
    if (selectedFilters.meal.length > 0) {
        const mealMatches = matchingDishes.filter(dish => 
            selectedFilters.meal.some(meal => 
                dish.meal && dish.meal.toLowerCase() === meal.toLowerCase()
            )
        );
        if (mealMatches.length > 0) {
            matchingDishes = mealMatches;
        }
    }
    
    // Filter by special preferences
    if (selectedFilters.special.length > 0) {
        const specialMatches = matchingDishes.filter(dish => 
            selectedFilters.special.some(special => 
                dish.special && dish.special.toLowerCase() === special.toLowerCase()
            )
        );
        if (specialMatches.length > 0) {
            matchingDishes = specialMatches;
        }
    }
    
    // If no filters selected, return random dish
    if (Object.values(selectedFilters).every(filter => filter.length === 0)) {
        matchingDishes = dishDatabase;
    }
    
    // Return random dish from matching dishes, or fallback to cuisine matches if no other matches
    if (matchingDishes.length > 0) {
        const randomIndex = Math.floor(Math.random() * matchingDishes.length);
        return matchingDishes[randomIndex];
    } else if (fallbackDishes.length > 0) {
        // If no exact matches but we have cuisine matches, use those
        const randomIndex = Math.floor(Math.random() * fallbackDishes.length);
        return fallbackDishes[randomIndex];
    }
    
    return null;
}

// Find combo recommendation based on selected filters
function findComboRecommendation() {
    let availableRoti = [...comboDatabase.roti];
    let availableCurry = [...comboDatabase.curry];
    let fallbackRoti = [...comboDatabase.roti];
    let fallbackCurry = [...comboDatabase.curry];
    
    console.log('Selected combo filters:', selectedComboFilters);
    
    // Filter roti based on selections
    if (selectedComboFilters.roti.length > 0) {
        const rotiMatches = availableRoti.filter(roti => 
            selectedComboFilters.roti.some(selected => 
                roti.name.toLowerCase() === selected.toLowerCase()
            )
        );
        if (rotiMatches.length > 0) {
            availableRoti = rotiMatches;
            fallbackRoti = rotiMatches;
        }
    }
    
    // Filter curry based on selections
    if (selectedComboFilters.curry.length > 0) {
        const curryMatches = availableCurry.filter(curry => 
            selectedComboFilters.curry.some(selected => 
                curry.name.toLowerCase() === selected.toLowerCase()
            )
        );
        if (curryMatches.length > 0) {
            availableCurry = curryMatches;
            fallbackCurry = curryMatches;
        }
    }
    
    // Filter by spice level
    if (selectedComboFilters.spice.length > 0) {
        const spiceRotiMatches = availableRoti.filter(roti => 
            selectedComboFilters.spice.includes(roti.spice)
        );
        const spiceCurryMatches = availableCurry.filter(curry => 
            selectedComboFilters.spice.includes(curry.spice)
        );
        
        if (spiceRotiMatches.length > 0) {
            availableRoti = spiceRotiMatches;
        }
        if (spiceCurryMatches.length > 0) {
            availableCurry = spiceCurryMatches;
        }
    }
    
    // If no filters selected, use all items
    if (Object.values(selectedComboFilters).every(filter => filter.length === 0)) {
        availableRoti = [...comboDatabase.roti];
        availableCurry = [...comboDatabase.curry];
    }
    
    // Return random combination
    if (availableRoti.length > 0 && availableCurry.length > 0) {
        const randomRoti = availableRoti[Math.floor(Math.random() * availableRoti.length)];
        const randomCurry = availableCurry[Math.floor(Math.random() * availableCurry.length)];
        
        return {
            roti: randomRoti,
            curry: randomCurry
        };
    } else if (fallbackRoti.length > 0 && fallbackCurry.length > 0) {
        // If no exact matches but we have some matches, use those
        const randomRoti = fallbackRoti[Math.floor(Math.random() * fallbackRoti.length)];
        const randomCurry = fallbackCurry[Math.floor(Math.random() * fallbackCurry.length)];
        
        return {
            roti: randomRoti,
            curry: randomCurry
        };
    }
    
    return null;
}

// Toggle filter selection (max 3 per category)
function toggleFilter(button) {
    const filterType = button.dataset.filter;
    const filterValue = button.dataset.value;
    
    // Determine which filter object to use based on current mode
    const currentFilters = (currentMode === 'combo-meal') ? selectedComboFilters : selectedFilters;
    const currentDisplayList = (currentMode === 'combo-meal') ? comboSelectedFiltersList : selectedFiltersList;
    
    if (currentFilters[filterType].includes(filterValue)) {
        // Remove filter
        currentFilters[filterType] = currentFilters[filterType].filter(f => f !== filterValue);
        button.classList.remove('active');
    } else {
        // Check if we can add more filters (max 3 per category)
        if (currentFilters[filterType].length < 3) {
            currentFilters[filterType].push(filterValue);
            button.classList.add('active');
        } else {
            // Show limit reached message
            showLimitMessage(filterType);
            return;
        }
    }
    
    updateSelectedFiltersDisplay(currentFilters, currentDisplayList);
    updateFilterButtonStates(currentFilters);
}

// Show limit reached message
function showLimitMessage(filterType) {
    const categoryNames = {
        'cuisine': 'Cuisine Type',
        'type': 'Food Type',
        'spice': 'Spice Level',
        'meal': 'Meal Time',
        'special': 'Special Preferences'
    };
    
    const message = document.createElement('div');
    message.className = 'limit-message';
    message.textContent = `You can select up to 3 ${categoryNames[filterType].toLowerCase()} options`;
    
    // Remove any existing limit messages
    document.querySelectorAll('.limit-message').forEach(msg => msg.remove());
    
    // Add message to the filter group
    const filterGroup = document.querySelector(`[data-filter="${filterType}"]`).closest('.filter-group');
    filterGroup.appendChild(message);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        message.remove();
    }, 3000);
}


// Remove filter from selected filters display
function removeFilter(button) {
    const filterText = button.parentElement.textContent.trim();
    const filterValue = filterText.replace('×', '').trim();
    
    // Determine which filter object to use based on current mode
    const currentFilters = (currentMode === 'combo-meal') ? selectedComboFilters : selectedFilters;
    const currentDisplayList = (currentMode === 'combo-meal') ? comboSelectedFiltersList : selectedFiltersList;
    
    // Find and remove from current filters
    Object.keys(currentFilters).forEach(filterType => {
        if (currentFilters[filterType].includes(filterValue)) {
            currentFilters[filterType] = currentFilters[filterType].filter(f => f !== filterValue);
        }
    });
    
    // Update button states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.value === filterValue) {
            btn.classList.remove('active');
        }
    });
    
    updateSelectedFiltersDisplay(currentFilters, currentDisplayList);
    updateFilterButtonStates(currentFilters);
}


// Display the recommendation
function displayRecommendation(dish) {
    dishName.textContent = dish.name;
    dishDescription.textContent = dish.description;
    dishCuisine.textContent = dish.cuisine;
    dishType.textContent = dish.type;
    
    // Hide no results and show result
    noResults.classList.add('hidden');
    comboResultSection.classList.add('hidden');
    resultSection.classList.remove('hidden');
    
    // Scroll to result
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// Display combo recommendation
function displayComboRecommendation(combo) {
    rotiName.textContent = combo.roti.name;
    rotiDescription.textContent = combo.roti.description;
    curryName.textContent = combo.curry.name;
    curryDescription.textContent = combo.curry.description;
    
    // Hide no results and show result
    noResults.classList.add('hidden');
    resultSection.classList.add('hidden');
    comboResultSection.classList.remove('hidden');
    
    // Scroll to result
    comboResultSection.scrollIntoView({ behavior: 'smooth' });
}

// Show no results message
function showNoResults() {
    resultSection.classList.add('hidden');
    comboResultSection.classList.add('hidden');
    noResults.classList.remove('hidden');
    
    // Scroll to no results
    noResults.scrollIntoView({ behavior: 'smooth' });
}

// Try again function
function tryAgain() {
    resultSection.classList.add('hidden');
    comboResultSection.classList.add('hidden');
    noResults.classList.add('hidden');
    
    // Keep current filters but hide results
    // User can modify filters and try again
}

// Clear preferences function
function clearPreferences() {
    // Reset all filters
    selectedFilters = {
        cuisine: [],
        type: [],
        spice: [],
        meal: [],
        special: []
    };
    
    selectedComboFilters = {
        roti: [],
        curry: [],
        spice: []
    };
    
    // Remove active states from all filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'disabled');
        btn.disabled = false;
    });
    
    // Update display and button states
    updateSelectedFiltersDisplay();
    updateFilterButtonStates();
    updateSelectedFiltersDisplay(selectedComboFilters, comboSelectedFiltersList);
    updateFilterButtonStates(selectedComboFilters);
    
    // Hide results
    resultSection.classList.add('hidden');
    comboResultSection.classList.add('hidden');
    noResults.classList.add('hidden');
}

// Order dish function (placeholder for future integration)
function orderDish() {
    const dishName = document.getElementById('dish-name').textContent;
    
    // This would integrate with food delivery platforms
    alert(`Ordering ${dishName}...\n\nThis feature will integrate with food delivery platforms like Swiggy, Zomato, etc.`);
    
    // For now, just show a message
    console.log(`User wants to order: ${dishName}`);
}

// Order combo function (placeholder for future integration)
function orderCombo() {
    const rotiName = document.getElementById('roti-name').textContent;
    const curryName = document.getElementById('curry-name').textContent;
    
    // This would integrate with food delivery platforms
    alert(`Ordering ${rotiName} + ${curryName} combo...\n\nThis feature will integrate with food delivery platforms like Swiggy, Zomato, etc.`);
    
    // For now, just show a message
    console.log(`User wants to order combo: ${rotiName} + ${curryName}`);
}

// Update selected filters display
function updateSelectedFiltersDisplay(filters = selectedFilters, displayList = selectedFiltersList) {
    const allSelected = Object.values(filters).flat();
    
    if (allSelected.length === 0) {
        displayList.innerHTML = '<span class="no-selection">No filters selected - we\'ll surprise you!</span>';
    } else {
        displayList.innerHTML = allSelected.map(filter => 
            `<span class="selected-filter-tag">
                ${filter}
                <button class="remove-btn" title="Remove filter">×</button>
            </span>`
        ).join('');
    }
}

// Update filter button states
function updateFilterButtonStates(filters = selectedFilters) {
    Object.keys(filters).forEach(filterType => {
        const buttons = document.querySelectorAll(`[data-filter="${filterType}"]`);
        const selectedCount = filters[filterType].length;
        
        // Update selection count display
        const countElement = document.getElementById(`${filterType}-count`);
        if (countElement) {
            countElement.textContent = `(${selectedCount}/3)`;
        }
        
        buttons.forEach(button => {
            const isSelected = filters[filterType].includes(button.dataset.value);
            
            if (isSelected) {
                button.classList.add('active');
                button.disabled = false;
            } else if (selectedCount >= 3) {
                button.classList.add('disabled');
                button.disabled = true;
            } else {
                button.classList.remove('active', 'disabled');
                button.disabled = false;
            }
        });
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the selected filters display and button states
    updateSelectedFiltersDisplay();
    updateFilterButtonStates();
    updateSelectedFiltersDisplay(selectedComboFilters, comboSelectedFiltersList);
    updateFilterButtonStates(selectedComboFilters);
    
    // Show main menu by default
    showSection('main');
    
    console.log('Foodie Recommender App Loaded!');
    console.log(`Database contains ${dishDatabase.length} dishes`);
    console.log(`Combo database contains ${comboDatabase.roti.length} roti/rice options and ${comboDatabase.curry.length} curry options`);
    console.log('New interface with Single Dish, Combo Meal, and Surprise Me options ready!');
});
