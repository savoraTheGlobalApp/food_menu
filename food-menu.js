// Food Menu System JavaScript
class FoodMenuApp {
    constructor() {
        this.userFoods = {
            breakfast: [],
            dal: [],
            vegetables: [],
            fruits: []
        };
        this.weeklyMenu = [];
        this.mealTimes = ['Breakfast', 'Lunch', 'Dinner'];
        this.daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.categorizedFoodOptions = {
            breakfast: [
                "Poha", "Daliya", "Upma", "Aloo Paratha", "Paneer Paratha", 
                "Gobhi Paratha", "Masala Dosa", "Idli Sambhar", "Veg Sandwich",
                "Cornflakes", "Oats", "Pancakes", "French Toast", "Scrambled Eggs"
            ],
            dal: [
                "Moong Dal", "Masoor Dal", "Chana Dal", "Toor (Arhar) Dal", 
                "Urad Dal", "Rajma", "Chhole", "Lobia", "Black Gram Dal",
                "Green Gram Dal", "Red Lentils", "Yellow Dal"
            ],
            vegetables: [
                "Potato", "Paneer", "Mushroom", "Spinach", "Cauliflower", 
                "Broccoli", "Cabbage", "Beans", "Peas", "Brinjal", 
                "Okra (Bhindi)", "Capsicum", "Bottle Gourd (Lauki)", "Pumpkin", "Carrot",
                "Tomato", "Onion", "Cucumber", "Radish", "Beetroot"
            ],
            fruits: [
                "Apple", "Banana", "Carrot", "Beetroot", "Papaya", 
                "Orange", "Grapes", "Mango", "Pomegranate", "Guava", 
                "Watermelon", "Pineapple", "Strawberry", "Kiwi", "Pear"
            ]
        };
        
        this.initializeElements();
        this.attachEventListeners();
        this.loadUserData();
        this.showWelcomeScreen();
    }

    initializeElements() {
        // Screen elements
        this.welcomeScreen = document.getElementById('welcome-screen');
        this.foodSetup = document.getElementById('food-setup');
        this.menuDisplay = document.getElementById('menu-display');
        this.addFoodModal = document.getElementById('add-food-modal');
        this.setupBackBtn = document.getElementById('setup-back-btn');
        
        // Category containers
        this.breakfastOptions = document.getElementById('breakfast-options');
        this.dalOptions = document.getElementById('dal-options');
        this.vegetablesOptions = document.getElementById('vegetables-options');
        this.fruitsOptions = document.getElementById('fruits-options');

        // Welcome screen elements
        this.startSetupBtn = document.getElementById('start-setup-btn');

        // Food setup elements
        this.foodInput = document.getElementById('food-input'); // may not exist after UI change
        this.addFoodBtn = document.getElementById('add-food-btn'); // may not exist
        this.foodList = document.getElementById('food-list');
        this.generateMenuBtn = document.getElementById('generate-menu-btn');
        this.addOtherBtn = document.getElementById('add-other-btn');

        // Menu display elements
        this.weeklyMenuContainer = document.getElementById('weekly-menu');
        this.addNewFoodBtn = document.getElementById('add-new-food-btn');
        this.regenerateMenuBtn = document.getElementById('regenerate-menu-btn');
        this.menuBackBtn = document.getElementById('menu-back-btn');
        this.viewToggleBtn = document.getElementById('view-toggle-btn');
        this.weeklyMenuEl = document.getElementById('weekly-menu');
        this.dailyMenuEl = document.getElementById('daily-menu');
        this.dailyDayTitle = document.getElementById('daily-day-title');
        this.dailyMealsEl = document.getElementById('daily-meals');

        // Modal elements
        this.newFoodInput = document.getElementById('new-food-input');
        this.saveNewFoodBtn = document.getElementById('save-new-food-btn');
        this.closeModalBtn = document.getElementById('close-modal-btn');
    }

    attachEventListeners() {
        // Welcome screen
        this.startSetupBtn.addEventListener('click', () => this.showFoodSetup());

        // Food setup
        this.generateMenuBtn.addEventListener('click', () => this.generateWeeklyMenu());
        this.setupBackBtn.addEventListener('click', () => this.showWelcomeScreen());

        // Menu display
        this.addNewFoodBtn.addEventListener('click', () => this.showAddFoodModal());
        this.regenerateMenuBtn.addEventListener('click', () => this.generateWeeklyMenu());
        this.menuBackBtn.addEventListener('click', () => this.showFoodSetup());
        this.viewToggleBtn.addEventListener('click', () => this.toggleView());

        // Modal
        this.saveNewFoodBtn.addEventListener('click', () => this.saveNewFood());
        this.newFoodInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.saveNewFood();
        });
        this.closeModalBtn.addEventListener('click', () => this.hideAddFoodModal());

        // Close modal on outside click
        this.addFoodModal.addEventListener('click', (e) => {
            if (e.target === this.addFoodModal) this.hideAddFoodModal();
        });

        // Render categorized options and attach listeners
        this.renderCategorizedOptions();
    }

    toggleView() {
        const weeklyVisible = !this.weeklyMenuEl.classList.contains('hidden');
        if (weeklyVisible) {
            // Switch to daily view
            this.weeklyMenuEl.classList.add('hidden');
            this.dailyMenuEl.classList.remove('hidden');
            this.viewToggleBtn.innerHTML = '<i class="fas fa-columns"></i> Weekly View';
            this.currentDailyIndex = this.currentDailyIndex || 0;
            this.renderDailyView(this.currentDailyIndex);
            this.attachSwipeHandlers();
        } else {
            // Switch to weekly view
            this.dailyMenuEl.classList.add('hidden');
            this.weeklyMenuEl.classList.remove('hidden');
            this.viewToggleBtn.innerHTML = '<i class="fas fa-columns"></i> Daily View';
        }
    }

    renderDailyView(dayIndex) {
        if (!this.weeklyMenu || this.weeklyMenu.length === 0) return;
        const clamped = Math.max(0, Math.min(dayIndex, this.weeklyMenu.length - 1));
        this.currentDailyIndex = clamped;
        const dayData = this.weeklyMenu[clamped];
        this.dailyDayTitle.textContent = dayData.day;
        this.dailyMealsEl.innerHTML = dayData.meals.map(m => `
            <div class="meal-item">
                <div class="meal-time">${m.time}</div>
                <div class="meal-name">${m.food}</div>
            </div>
        `).join('');
    }

    attachSwipeHandlers() {
        // Simple touch swipe for day navigation
        let touchStartX = 0;
        let touchEndX = 0;
        const threshold = 50; // px

        const onTouchStart = (e) => { touchStartX = e.changedTouches[0].screenX; };
        const onTouchEnd = (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const delta = touchEndX - touchStartX;
            if (Math.abs(delta) < threshold) return;
            if (delta < 0) {
                // swipe left => next day
                this.renderDailyView((this.currentDailyIndex || 0) + 1);
            } else {
                // swipe right => prev day
                this.renderDailyView((this.currentDailyIndex || 0) - 1);
            }
        };

        this.dailyMenuEl.removeEventListener('touchstart', this._onTouchStart);
        this.dailyMenuEl.removeEventListener('touchend', this._onTouchEnd);
        this._onTouchStart = onTouchStart;
        this._onTouchEnd = onTouchEnd;
        this.dailyMenuEl.addEventListener('touchstart', onTouchStart, { passive: true });
        this.dailyMenuEl.addEventListener('touchend', onTouchEnd, { passive: true });
    }

    showWelcomeScreen() {
        this.hideAllScreens();
        this.welcomeScreen.classList.remove('hidden');
    }

    showFoodSetup() {
        this.hideAllScreens();
        this.foodSetup.classList.remove('hidden');
        this.updateFoodList();
    }

    showMenuDisplay() {
        this.hideAllScreens();
        this.menuDisplay.classList.remove('hidden');
        this.renderWeeklyMenu();
    }

    hideAllScreens() {
        this.welcomeScreen.classList.add('hidden');
        this.foodSetup.classList.add('hidden');
        this.menuDisplay.classList.add('hidden');
    }

    addFood() {
        const foodName = (this.foodInput ? this.foodInput.value.trim() : '');
        if (!foodName) return;

        if (this.userFoods.includes(foodName)) {
            alert('This food item is already added!');
            return;
        }

        this.userFoods.push(foodName);
        this.foodInput.value = '';
        this.updateFoodList();
        this.saveUserData();
    }

    removeFood(foodName) {
        this.userFoods = this.userFoods.filter(food => food !== foodName);
        this.updateFoodList();
        this.saveUserData();
        
        // Regenerate menu if it exists
        if (this.weeklyMenu.length > 0) {
            this.generateWeeklyMenu();
        }
    }

    updateFoodList() {
        const allFoods = Object.values(this.userFoods).flat();
        if (allFoods.length === 0) {
            this.foodList.innerHTML = '<p class="no-foods">No food items selected yet</p>';
            this.generateMenuBtn.disabled = true;
        } else {
            this.foodList.innerHTML = allFoods.map(food => `
                <div class="food-item">
                    <span>${food}</span>
                    <button class="remove-btn" onclick="foodMenuApp.removeFoodFromCategory('${food}')">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `).join('');
            this.generateMenuBtn.disabled = allFoods.length < 1;
        }
    }

    renderCategorizedOptions() {
        // Render breakfast options
        this.renderCategoryOptions('breakfast', this.breakfastOptions);
        
        // Render dal options
        this.renderCategoryOptions('dal', this.dalOptions);
        
        // Render vegetables options
        this.renderCategoryOptions('vegetables', this.vegetablesOptions);
        
        // Render fruits options
        this.renderCategoryOptions('fruits', this.fruitsOptions);
        
        // Attach custom add buttons
        document.querySelectorAll('.add-custom-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.showAddFoodModal(category);
            });
        });
    }

    renderCategoryOptions(category, container) {
        if (container) {
            container.innerHTML = this.categorizedFoodOptions[category].map(food => `
                <span class="food-chip ${this.userFoods[category].includes(food) ? 'active' : ''}" data-food="${food}" data-category="${category}">
                    ${food}
                </span>
            `).join('');

            container.querySelectorAll('.food-chip').forEach(chip => {
                chip.addEventListener('click', (e) => this.toggleCategorizedFoodSelection(e.target.dataset.food, e.target.dataset.category));
            });
        }
    }

    toggleCategorizedFoodSelection(foodName, category) {
        if (this.userFoods[category].includes(foodName)) {
            this.userFoods[category] = this.userFoods[category].filter(food => food !== foodName);
        } else {
            this.userFoods[category].push(foodName);
        }
        this.renderCategoryOptions(category, this[`${category}Options`]);
        this.updateFoodList();
        this.saveUserData();
    }

    removeFoodFromCategory(foodName) {
        // Find which category contains this food and remove it
        for (const category in this.userFoods) {
            if (this.userFoods[category].includes(foodName)) {
                this.userFoods[category] = this.userFoods[category].filter(food => food !== foodName);
                this.renderCategoryOptions(category, this[`${category}Options`]);
                break;
            }
        }
        this.updateFoodList();
        this.saveUserData();
    }

    generateWeeklyMenu() {
        const totalFoods = Object.values(this.userFoods).flat().length;
        if (totalFoods < 1) {
            alert('Please select at least 1 food item to generate a menu!');
            return;
        }

        this.weeklyMenu = [];

        for (let dayIndex = 0; dayIndex < this.daysOfWeek.length; dayIndex++) {
            const day = this.daysOfWeek[dayIndex];
            const dayMeals = [];

            // Generate breakfast: 1 from breakfast + 1 from fruits
            const breakfastItems = this.getRandomItems(this.userFoods.breakfast, 1);
            const fruitItems = this.getRandomItems(this.userFoods.fruits, 1);
            const breakfastMeal = [...breakfastItems, ...fruitItems].join(', ');
            
            dayMeals.push({
                time: 'Breakfast',
                food: breakfastMeal
            });

            // Generate lunch: 1 from dal + 1 from vegetables + 1 from fruits + Roti/Rice
            const lunchItems = [
                ...this.getRandomItems(this.userFoods.dal, 1),
                ...this.getRandomItems(this.userFoods.vegetables, 1),
                ...this.getRandomItems(this.userFoods.fruits, 1),
                'Roti/Rice'
            ].join(', ');
            
            dayMeals.push({
                time: 'Lunch',
                food: lunchItems
            });

            // Generate dinner: 1 from dal + 1 from vegetables + 1 from fruits + Roti/Rice
            const dinnerItems = [
                ...this.getRandomItems(this.userFoods.dal, 1),
                ...this.getRandomItems(this.userFoods.vegetables, 1),
                ...this.getRandomItems(this.userFoods.fruits, 1),
                'Roti/Rice'
            ].join(', ');
            
            dayMeals.push({
                time: 'Dinner',
                food: dinnerItems
            });

            this.weeklyMenu.push({
                day: day,
                meals: dayMeals
            });
        }

        this.showMenuDisplay();
        this.saveUserData();
    }

    getRandomItems(array, count) {
        if (array.length === 0) return [];
        if (array.length <= count) return [...array];
        
        const shuffled = [...array].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    renderWeeklyMenu() {
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Start from Monday

        const header = `
            <div class="calendar-row calendar-header">
                <div class="calendar-cell head">Day</div>
                <div class="calendar-cell head">Breakfast</div>
                <div class="calendar-cell head">Lunch</div>
                <div class="calendar-cell head">Dinner</div>
            </div>
        `;

        const rows = this.weeklyMenu.map((dayData, index) => {
            const currentDate = new Date(startOfWeek);
            currentDate.setDate(startOfWeek.getDate() + index);
            const dateString = currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

            const mealsByTime = {
                Breakfast: dayData.meals.find(m => m.time === 'Breakfast')?.food || '',
                Lunch: dayData.meals.find(m => m.time === 'Lunch')?.food || '',
                Dinner: dayData.meals.find(m => m.time === 'Dinner')?.food || ''
            };

            return `
                <div class="calendar-row">
                    <div class="calendar-cell day">
                        <div class="day-name">${dayData.day}</div>
                        <div class="day-date">${dateString}</div>
                    </div>
                    <div class="calendar-cell">${mealsByTime.Breakfast}</div>
                    <div class="calendar-cell">${mealsByTime.Lunch}</div>
                    <div class="calendar-cell">${mealsByTime.Dinner}</div>
                </div>
            `;
        }).join('');

        this.weeklyMenuContainer.innerHTML = `
            <div class="calendar-grid">
                ${header}
                ${rows}
            </div>
        `;
    }

    showAddFoodModal(category = null) {
        this.addFoodModal.classList.remove('hidden');
        this.newFoodInput.focus();
        this.currentCategory = category;
    }

    hideAddFoodModal() {
        this.addFoodModal.classList.add('hidden');
        this.newFoodInput.value = '';
    }

    saveNewFood() {
        const foodName = this.newFoodInput.value.trim();
        if (!foodName) return;

        // Check if food already exists in any category
        const allFoods = Object.values(this.userFoods).flat();
        if (allFoods.includes(foodName)) {
            alert('This food item is already added!');
            return;
        }

        // Add to the specified category or default to breakfast
        const category = this.currentCategory || 'breakfast';
        this.userFoods[category].push(foodName);
        
        this.hideAddFoodModal();
        this.renderCategoryOptions(category, this[`${category}Options`]);
        this.updateFoodList();
        this.saveUserData();
        
        // Regenerate menu if it exists
        if (this.weeklyMenu.length > 0) {
            this.generateWeeklyMenu();
        }
    }

    saveUserData() {
        const userData = {
            foods: this.userFoods,
            weeklyMenu: this.weeklyMenu
        };
        localStorage.setItem('foodMenuUserData', JSON.stringify(userData));
    }

    loadUserData() {
        const savedData = localStorage.getItem('foodMenuUserData');
        if (savedData) {
            try {
                const userData = JSON.parse(savedData);
                // Handle migration from old format to new categorized format
                if (Array.isArray(userData.foods)) {
                    // Old format - migrate to new format
                    this.userFoods = {
                        breakfast: [],
                        dal: [],
                        vegetables: [],
                        fruits: []
                    };
                } else {
                    // New format
                    this.userFoods = userData.foods || {
                        breakfast: [],
                        dal: [],
                        vegetables: [],
                        fruits: []
                    };
                }
                this.weeklyMenu = userData.weeklyMenu || [];
                
                // Check if user has any foods selected
                const totalFoods = Object.values(this.userFoods).flat().length;
                
                // If user has foods and menu, show menu directly
                if (totalFoods > 0 && this.weeklyMenu.length > 0) {
                    this.showMenuDisplay();
                } else if (totalFoods > 0) {
                    this.showFoodSetup();
                } else {
                    // Show welcome screen if no data
                    this.showWelcomeScreen();
                }
            } catch (error) {
                console.error('Error loading user data:', error);
            }
        } else {
            // Show welcome screen for new users
            this.showWelcomeScreen();
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.foodMenuApp = new FoodMenuApp();
});
