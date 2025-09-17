// Food Menu System JavaScript
class FoodMenuApp {
    constructor() {
        this.userFoods = [];
        this.weeklyMenu = [];
        this.mealTimes = ['Breakfast', 'Lunch', 'Dinner'];
        this.daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.predefinedFoodOptions = [
            'Paneer Sabji', 'Gobhi Sabji', 'Moong Dal', 'Chana Dal', 'Masoor Dal',
            'Jeera Rice', 'Plain Rice', 'Biryani Rice', 'Roti', 'Paratha',
            'Aloo Sabji', 'Bhindi Sabji', 'Palak Paneer', 'Paneer Butter Masala',
            'Rajma', 'Chole', 'Kadhi', 'Egg Curry', 'Chicken Curry',
            'Veg Pulao', 'Curd Rice', 'Lemon Rice', 'Dosa', 'Idli'
        ];
        
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
        this.predefinedOptionsContainer = document.getElementById('predefined-options');

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

        // Modal elements
        this.newFoodInput = document.getElementById('new-food-input');
        this.saveNewFoodBtn = document.getElementById('save-new-food-btn');
        this.closeModalBtn = document.getElementById('close-modal-btn');
    }

    attachEventListeners() {
        // Welcome screen
        this.startSetupBtn.addEventListener('click', () => this.showFoodSetup());

        // Food setup
        if (this.addFoodBtn) this.addFoodBtn.addEventListener('click', () => this.addFood());
        if (this.foodInput) {
            this.foodInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.addFood();
            });
        }
        this.addOtherBtn.addEventListener('click', () => this.showAddFoodModal());
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

        // Build predefined selectable chips
        this.renderPredefinedOptions();
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
        if (this.userFoods.length === 0) {
            this.foodList.innerHTML = '<p class="no-foods">No food items selected yet</p>';
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
            this.generateMenuBtn.disabled = this.userFoods.length < 1;
        }
    }

    renderPredefinedOptions() {
        if (!this.predefinedOptionsContainer) return;
        this.predefinedOptionsContainer.innerHTML = this.predefinedFoodOptions.map(item => `
            <button class="food-chip" data-food="${item}">${item}</button>
        `).join('');

        this.predefinedOptionsContainer.addEventListener('click', (e) => {
            const chip = e.target.closest('.food-chip');
            if (!chip) return;
            const food = chip.dataset.food;
            const isActive = chip.classList.contains('active');

            if (isActive) {
                chip.classList.remove('active');
                this.userFoods = this.userFoods.filter(f => f !== food);
            } else {
                if (!this.userFoods.includes(food)) this.userFoods.push(food);
                chip.classList.add('active');
            }
            this.updateFoodList();
            this.saveUserData();
        });

        // Preselect chips if userFoods already has items
        setTimeout(() => {
            document.querySelectorAll('.food-chip').forEach(chip => {
                if (this.userFoods.includes(chip.dataset.food)) {
                    chip.classList.add('active');
                }
            });
        }, 0);
    }

    generateWeeklyMenu() {
        if (this.userFoods.length < 1) {
            alert('Please select at least 1 food item to generate a menu!');
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
