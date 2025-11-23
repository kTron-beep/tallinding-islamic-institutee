// Main JavaScript for Tallinding Islamic Institution

// Language Management
let currentLang = localStorage.getItem('lang') || 'ar'; // Default to Arabic

// Apply translations and direction
function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // Update HTML attributes
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    
    // Update all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update language switcher UI
    updateLanguageSwitcher(lang);
}

// Update language switcher buttons
function updateLanguageSwitcher(lang) {
    const arBtn = document.getElementById('lang-ar');
    const enBtn = document.getElementById('lang-en');
    const arBtnMobile = document.getElementById('lang-ar-mobile');
    const enBtnMobile = document.getElementById('lang-en-mobile');
    
    // Desktop switcher
    if (arBtn && enBtn) {
        if (lang === 'ar') {
            arBtn.classList.add('active');
            enBtn.classList.remove('active');
        } else {
            enBtn.classList.add('active');
            arBtn.classList.remove('active');
        }
    }
    
    // Mobile switcher
    if (arBtnMobile && enBtnMobile) {
        if (lang === 'ar') {
            arBtnMobile.classList.add('active');
            enBtnMobile.classList.remove('active');
        } else {
            enBtnMobile.classList.add('active');
            arBtnMobile.classList.remove('active');
        }
    }
}

// Initialize language on page load
function initLanguage() {
    applyTranslations(currentLang);
    
    // Desktop language switcher event listeners
    const arBtn = document.getElementById('lang-ar');
    const enBtn = document.getElementById('lang-en');
    
    if (arBtn) {
        arBtn.addEventListener('click', () => applyTranslations('ar'));
    }
    
    if (enBtn) {
        enBtn.addEventListener('click', () => applyTranslations('en'));
    }
    
    // Mobile language switcher event listeners
    const arBtnMobile = document.getElementById('lang-ar-mobile');
    const enBtnMobile = document.getElementById('lang-en-mobile');
    
    if (arBtnMobile) {
        arBtnMobile.addEventListener('click', () => applyTranslations('ar'));
    }
    
    if (enBtnMobile) {
        enBtnMobile.addEventListener('click', () => applyTranslations('en'));
    }
}

// Mobile Navbar Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language system first
    initLanguage();
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            const icon = mobileMenuButton.querySelector('svg');
            if (mobileMenu.classList.contains('active')) {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
            } else {
                icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
            }
        });
    }

    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            const icon = mobileMenuButton.querySelector('svg');
            icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
        });
    });

    // Lightbox Gallery
    initLightbox();

    // Smooth Scrolling
    initSmoothScrolling();

    // Form Validation
    initFormValidation();

    // Hero Carousel
    initHeroCarousel();
});

// Lightbox Functionality
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.getElementById('close-lightbox');

    if (!lightbox || !lightboxImg) return;

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    if (closeLightbox) {
        closeLightbox.addEventListener('click', function() {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    }

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Form Validation
function initFormValidation() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            let errorMessage = '';

            // Validate name
            if (name === '') {
                isValid = false;
                errorMessage += 'Name is required.\n';
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                isValid = false;
                errorMessage += 'Email is required.\n';
            } else if (!emailRegex.test(email)) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
            }

            // Validate phone (basic check)
            if (phone === '') {
                isValid = false;
                errorMessage += 'Phone number is required.\n';
            }

            // Validate message
            if (message === '') {
                isValid = false;
                errorMessage += 'Message is required.\n';
            }

            if (isValid) {
                // Show success message
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please correct the following errors:\n' + errorMessage);
            }
        });
    }
}

// Navbar scroll effect (optional enhancement)
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    }
});

// Hero Carousel Functionality
function initHeroCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const heroSection = document.querySelector('.hero-carousel');
    
    if (!slides.length || !heroSection) return;
    
    // Set background images from data attributes with fallback handling
    slides.forEach((slide, index) => {
        const imagePath = slide.getAttribute('data-bg');
        if (imagePath) {
            const img = new Image();
            img.onload = function() {
                slide.style.backgroundImage = `url('${imagePath}')`;
            };
            img.onerror = function() {
                // Image failed to load, CSS gradient fallback will be used
                console.log(`Hero image ${index + 1} not found, using gradient fallback`);
            };
            img.src = imagePath;
        }
    });
    
    let currentSlide = 0;
    let carouselInterval;
    const slideInterval = 5000; // 5 seconds
    
    // Function to show next slide
    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Start auto-slide
    function startCarousel() {
        carouselInterval = setInterval(showNextSlide, slideInterval);
    }
    
    // Stop auto-slide
    function stopCarousel() {
        clearInterval(carouselInterval);
    }
    
    // Pause on hover (desktop only)
    if (window.innerWidth >= 768) {
        heroSection.addEventListener('mouseenter', stopCarousel);
        heroSection.addEventListener('mouseleave', startCarousel);
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        stopCarousel();
        if (window.innerWidth >= 768) {
            heroSection.addEventListener('mouseenter', stopCarousel);
            heroSection.addEventListener('mouseleave', startCarousel);
        } else {
            heroSection.removeEventListener('mouseenter', stopCarousel);
            heroSection.removeEventListener('mouseleave', startCarousel);
        }
        startCarousel();
    });
    
    // Initialize carousel
    startCarousel();
}

