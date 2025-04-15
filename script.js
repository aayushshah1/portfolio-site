const languages = ['Hello', 'Namaste', 'Bonjour', 'Hola', 'Ciao', 'Konnichiwa'];

// Function to change language every 3 seconds
function changeLanguage() {
    const languageElement = document.getElementById('languageLink');
    let currentIndex = 0;

    setInterval(() => {
        languageElement.innerText = languages[currentIndex];
        currentIndex = (currentIndex + 1) % languages.length;
    }, 3000);
}

// Show or hide the button based on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".back-to-top").style.display = "block";
    } else {
        document.querySelector(".back-to-top").style.display = "none";
    }
};

// Scroll to the top of the page
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCarousels();
    changeLanguage();
    // Start automatic image rotation for all carousels
    startAutoImageRotation();
});

// Function to initialize all carousels on the page
function initializeCarousels() {
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');
        const sectionId = carousel.closest('section').id;
        const dotsContainer = document.getElementById(`${sectionId}-dots`);
        
        if (!dotsContainer) return;
        
        // Create the dots
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.dataset.slide = index;
            dot.addEventListener('click', () => goToSlide(carousel, index));
            dotsContainer.appendChild(dot);
        });
        
        // Set up button event listeners
        prevBtn.addEventListener('click', () => {
            changeSlide(carousel, 'prev');
        });
        
        nextBtn.addEventListener('click', () => {
            changeSlide(carousel, 'next');
        });
    });
}

// Function to automatically rotate images in all carousels
function startAutoImageRotation() {
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(carousel => {
        // Set a different interval for each carousel to prevent synchronous changes
        const intervalTime = 5000 + Math.random() * 2000; // Between 5-7 seconds
        
        setInterval(() => {
            changeSlide(carousel, 'next');
        }, intervalTime);
    });
}

// Function to change slides
function changeSlide(carousel, direction) {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dotsContainer = document.querySelector(`#${carousel.closest('section').id}-dots`);
    const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];
    
    let activeIndex = 0;
    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            activeIndex = index;
            slide.classList.remove('active');
        }
    });
    
    if (dots.length) {
        dots[activeIndex].classList.remove('active');
    }
    
    if (direction === 'prev') {
        activeIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    } else {
        activeIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    }
    
    slides[activeIndex].classList.add('active');
    if (dots.length) {
        dots[activeIndex].classList.add('active');
    }
}

// Function to go to a specific slide
function goToSlide(carousel, index) {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dotsContainer = document.querySelector(`#${carousel.closest('section').id}-dots`);
    const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];
    
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    
    if (dots.length) {
        dots.forEach((dot) => {
            dot.classList.remove('active');
        });
    }
    
    slides[index].classList.add('active');
    if (dots.length) {
        dots[index].classList.add('active');
    }
}

