// Food Menu System JavaScript
class FoodMenuApp {
    constructor() {
        this.userFoods = [];
        this.weeklyMenu = [];
        this.mealTimes = ['Breakfast', 'Lunch', 'Dinner'];
        this.daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        
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

        // Welcome screen elements
        this.startSetupBtn = document.getElementById('start-setup-btn');

        // Food setup elements
        this.foodInput = document.getElementById('food-input');
        this.addFoodBtn = document.getElementById('add-food-btn');
        this.foodList = document.getElementById('food-list');
        this.generateMenuBtn = document.getElementById('generate-menu-btn');

        // Menu display elements
        this.weeklyMenuContainer = document.getElementById('weekly-menu');
        this.addNewFoodBtn = document.getElementById('add-new-food-btn');
        this.regenerateMenuBtn = document.getElementById('regenerate-menu-btn');

        // Modal elements
        this.newFoodInput = document.getElementById('new-food-input');
        this.saveNewFoodBtn = document.getElementById('save-new-food-btn');
        this.closeModalBtn = document.getElementById('close-modal-btn');
    }

    attachEventListeners() {
        // Welcome screen
        this.startSetupBtn.addEventListener('click', () => this.showFoodSetup());

        // Food setup
        this.addFoodBtn.addEventListener('click', () => this.addFood());
        this.foodInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addFood();
        });
        this.generateMenuBtn.addEventListener('click', () => this.generateWeeklyMenu());

        // Menu display
        this.addNewFoodBtn.addEventListener('click', () => this.showAddFoodModal());
        this.regenerateMenuBtn.addEventListener('click', () => this.generateWeeklyMenu());

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
        const foodName = this.foodInput.value.trim();
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
        if (this.userFoods.length === 0) {
            this.foodList.innerHTML = '<p class="no-foods">No food items added yet</p>';
            this.generateMenuBtn.disabled = true;
        } else {
            this.foodList.innerHTML = this.userFoods.map(food => `
                <div class="food-item">
                    <span>${food}</span>
                    <button class="remove-btn" onclick="foodMenuApp.removeFood('${food}')">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `).join('');
            this.generateMenuBtn.disabled = false;
        }
    }

    generateWeeklyMenu() {
        if (this.userFoods.length < 3) {
            alert('Please add at least 3 food items to generate a menu!');
            return;
        }

        this.weeklyMenu = [];
        const totalMeals = this.daysOfWeek.length * this.mealTimes.length; // 21 meals
        const shuffledFoods = [...this.userFoods];
        
        // Shuffle foods to ensure variety
        for (let i = shuffledFoods.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledFoods[i], shuffledFoods[j]] = [shuffledFoods[j], shuffledFoods[i]];
        }

        // Generate menu ensuring no consecutive same meals
        let lastMeal = null;
        let foodIndex = 0;

        for (let dayIndex = 0; dayIndex < this.daysOfWeek.length; dayIndex++) {
            const day = this.daysOfWeek[dayIndex];
            const dayMeals = [];

            for (let mealIndex = 0; mealIndex < this.mealTimes.length; mealIndex++) {
                const mealTime = this.mealTimes[mealIndex];
                let selectedFood;

                // Ensure no consecutive same meals
                do {
                    selectedFood = shuffledFoods[foodIndex % shuffledFoods.length];
                    foodIndex++;
                } while (selectedFood === lastMeal && shuffledFoods.length > 1);

                dayMeals.push({
                    time: mealTime,
                    food: selectedFood
                });

                lastMeal = selectedFood;
            }

            this.weeklyMenu.push({
                day: day,
                meals: dayMeals
            });
        }

        this.showMenuDisplay();
        this.saveUserData();
    }

    renderWeeklyMenu() {
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Start from Monday

        this.weeklyMenuContainer.innerHTML = this.weeklyMenu.map((dayData, index) => {
            const currentDate = new Date(startOfWeek);
            currentDate.setDate(startOfWeek.getDate() + index);
            const dateString = currentDate.toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric' 
            });

            return `
                <div class="day-card">
                    <div class="day-header">
                        <div class="day-name">${dayData.day}</div>
                        <div class="day-date">${dateString}</div>
                    </div>
                    ${dayData.meals.map(meal => `
                        <div class="meal-item">
                            <span class="meal-name">${meal.food}</span>
                            <span class="meal-time">${meal.time}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }).join('');
    }

    showAddFoodModal() {
        this.addFoodModal.classList.remove('hidden');
        this.newFoodInput.focus();
    }

    hideAddFoodModal() {
        this.addFoodModal.classList.add('hidden');
        this.newFoodInput.value = '';
    }

    saveNewFood() {
        const foodName = this.newFoodInput.value.trim();
        if (!foodName) return;

        if (this.userFoods.includes(foodName)) {
            alert('This food item is already added!');
            return;
        }

        this.userFoods.push(foodName);
        this.hideAddFoodModal();
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
                this.userFoods = userData.foods || [];
                this.weeklyMenu = userData.weeklyMenu || [];
                
                // If user has foods and menu, show menu directly
                if (this.userFoods.length > 0 && this.weeklyMenu.length > 0) {
                    this.showMenuDisplay();
                } else if (this.userFoods.length > 0) {
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
