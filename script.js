// Menu Data
const menuItems = [
    {
        id: 1,
        category: "Sushi",
        name: "Omakase Nigiri Set",
        description: "Chef's selection of 10 premium nigiri sushi with seasonal fish",
        price: "Rp 450.000",
        image: "https://images.unsplash.com/photo-1570780775848-bc1897788ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdpcmklMjBzdXNoaSUyMHBsYXR0ZXJ8ZW58MXx8fHwxNzYzMTE0NzUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        id: 2,
        category: "Sushi",
        name: "Dragon Roll",
        description: "Eel, cucumber, avocado with special sauce and tobiko",
        price: "Rp 185.000",
        image: "https://images.unsplash.com/photo-1712192674556-4a89f20240c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFnb24lMjBzdXNoaSUyMHJvbGx8ZW58MXx8fHwxNzYzMTE0NzUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        id: 3,
        category: "Sashimi",
        name: "Sashimi Moriawase",
        description: "Assorted fresh sashimi platter with tuna, salmon, and yellowtail",
        price: "Rp 380.000",
        image: "https://images.unsplash.com/photo-1758384075930-6e3835d22b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXNoaW1pJTIwcGxhdHRlcnxlbnwxfHx8fDE3NjMwMjIzOTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        id: 4,
        category: "Sashimi",
        name: "Toro Sashimi",
        description: "Premium fatty tuna belly, hand-sliced to perfection",
        price: "Rp 520.000",
        image: "https://images.unsplash.com/photo-1638866381709-071747b518c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0dW5hJTIwc2FzaGltaXxlbnwxfHx8fDE3NjMwMzgyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        id: 5,
        category: "Ramen",
        name: "Tonkotsu Ramen",
        description: "Rich pork bone broth with chashu, soft-boiled egg, and nori",
        price: "Rp 95.000",
        image: "https://images.unsplash.com/photo-1635379511574-bc167ca085c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b25rb3RzdSUyMHJhbWVufGVufDF8fHx8MTc2MzAyOTA3M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        id: 6,
        category: "Ramen",
        name: "Spicy Miso Ramen",
        description: "Miso-based broth with ground pork, bamboo shoots, and chili oil",
        price: "Rp 98.000",
        image: "https://images.unsplash.com/photo-1697652974652-a2336106043b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHJhbWVuJTIwYm93bHxlbnwxfHx8fDE3NjMwODI2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        id: 7,
        category: "Tempura",
        name: "Ebi Tempura Set",
        description: "Crispy jumbo prawn tempura served with tentsuyu dipping sauce",
        price: "Rp 165.000",
        image: "https://images.unsplash.com/photo-1673238110633-876516a993c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaHJpbXAlMjB0ZW1wdXJhfGVufDF8fHx8MTc2MzA3NDE1OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        id: 8,
        category: "Tempura",
        name: "Vegetable Tempura",
        description: "Seasonal vegetables in light, crispy tempura batter",
        price: "Rp 85.000",
        image: "https://images.unsplash.com/photo-1666599207746-0868c6a556d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjB0ZW1wdXJhfGVufDF8fHx8MTc2MzA5MjY5NXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        id: 9,
        category: "Grilled",
        name: "Wagyu Yakiniku",
        description: "Premium A5 wagyu beef grilled to perfection with teriyaki glaze",
        price: "Rp 650.000",
        image: "https://images.unsplash.com/photo-1666014314497-c98c063d0f5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWd5dSUyMGJlZWYlMjBzdGVha3xlbnwxfHx8fDE3NjMwMjgyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        id: 10,
        category: "Grilled",
        name: "Unagi Don",
        description: "Grilled eel glazed with sweet soy sauce over steamed rice",
        price: "Rp 195.000",
        image: "https://images.unsplash.com/photo-1740895362852-8ea88c9ab65d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmFnaSUyMGVlbCUyMHJpY2V8ZW58MXx8fHwxNzYzMTE0NzU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
];

// State
let currentCategory = "All";
let currentIndex = 0;
let filteredItems = menuItems;

// ===== SPLASH SCREEN =====
window.addEventListener('load', function() {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const splashLogo = document.querySelector('.splash-logo');
    const shojiLeft = document.querySelector('.shoji-left');
    const shojiRight = document.querySelector('.shoji-right');
    const centerDivider = document.querySelector('.center-divider');

    // Start animation after 500ms
    setTimeout(() => {
        splashLogo.classList.add('fade-out');
        shojiLeft.classList.add('open');
        shojiRight.classList.add('open');
        centerDivider.classList.add('fade-out');
    }, 500);

    // Complete after 2500ms
    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 2500);
});

// ===== SCROLL TO MENU =====
function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    menuSection.scrollIntoView({ behavior: 'smooth' });
}

// ===== MENU FUNCTIONALITY =====
function filterItems() {
    if (currentCategory === "All") {
        filteredItems = menuItems;
    } else {
        filteredItems = menuItems.filter(item => item.category === currentCategory);
    }
    currentIndex = 0;
    updateMenu();
    updateDots();
}

function updateMenu() {
    const item = filteredItems[currentIndex];
    
    document.getElementById('menu-img').src = item.image;
    document.getElementById('menu-img').alt = item.name;
    document.getElementById('menu-category').textContent = item.category;
    document.getElementById('menu-name').textContent = item.name;
    document.getElementById('menu-description').textContent = item.description;
    document.getElementById('menu-price').textContent = item.price;
    document.getElementById('current-menu').textContent = currentIndex + 1;
    document.getElementById('total-menu').textContent = filteredItems.length;
}

function updateDots() {
    const dotsContainer = document.getElementById('dots-indicator');
    dotsContainer.innerHTML = '';
    
    filteredItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'dot' + (index === currentIndex ? ' active' : '');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateMenu();
            updateDots();
        });
        dotsContainer.appendChild(dot);
    });
}

// Category filter buttons
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentCategory = this.dataset.category;
        filterItems();
    });
});

// Previous button
document.getElementById('prev-btn').addEventListener('click', function() {
    currentIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    updateMenu();
    updateDots();
});

// Next button
document.getElementById('next-btn').addEventListener('click', function() {
    currentIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    updateMenu();
    updateDots();
});

// Initialize menu
updateMenu();
updateDots();

// ===== GALLERY NAVIGATION (ARROWS) =====
const gallerySlider = document.querySelector('.gallery-slider');
const galleryTrack = document.getElementById('gallery-track');
const galleryPrev = document.getElementById('gallery-prev');
const galleryNext = document.getElementById('gallery-next');

const ANIMATION_DURATION = 24; // seconds, must match CSS
const STEP_ITEMS = 3; // move 3 items per click
let stepSeconds = 2; // calculated per layout
let currentOffsetSeconds = 0;

function calculateStepSeconds() {
    const items = Array.from(document.querySelectorAll('#gallery-track .gallery-item'));
    if (!items.length) return;
    const half = Math.floor(items.length / 2);
    const gapPx = parseFloat(getComputedStyle(galleryTrack).gap) || 0;

    let halfWidth = 0;
    const itemWidth = items[0].getBoundingClientRect().width;
    for (let i = 0; i < half; i++) {
        const w = items[i].getBoundingClientRect().width;
        halfWidth += w;
        if (i < half - 1) halfWidth += gapPx;
    }

    const stepDistance = (itemWidth + gapPx) * STEP_ITEMS;
    stepSeconds = ANIMATION_DURATION * (stepDistance / halfWidth);
}

function applyDelay() {
    // Normalize to [0, ANIMATION_DURATION)
    currentOffsetSeconds = ((currentOffsetSeconds % ANIMATION_DURATION) + ANIMATION_DURATION) % ANIMATION_DURATION;
    galleryTrack.style.animationDelay = `-${currentOffsetSeconds}s`;
}

function seekSmooth(direction, durationMs = 350) {
    const start = currentOffsetSeconds;
    const end = start + direction * stepSeconds;
    const startTime = performance.now();

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function step(now) {
        const p = Math.min(1, (now - startTime) / durationMs);
        const eased = easeInOutCubic(p);
        currentOffsetSeconds = start + (end - start) * eased;
        applyDelay();
        if (p < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

// Init
calculateStepSeconds();
applyDelay();

// Recalculate on resize (item width changes)
window.addEventListener('resize', () => {
    const previousStep = stepSeconds;
    calculateStepSeconds();
    // Preserve perceived position by approximating new offset
    // No special handling needed; animationDelay continues.
});

// Bind buttons
if (galleryPrev) galleryPrev.addEventListener('click', () => seekSmooth(-1, 450));
if (galleryNext) galleryNext.addEventListener('click', () => seekSmooth(1, 450));