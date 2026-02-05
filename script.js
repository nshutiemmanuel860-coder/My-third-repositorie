tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#10b981',
                'primary-dark': '#0d9488',
                'primary-light': '#34d399',
                gradient: {
                    start: '#0f766e',
                    middle: '#10b981',
                    end: '#34d399'
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'pulse-slow': 'pulse 3s infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' }
                }
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'display': ['Poppins', 'system-ui', 'sans-serif'],
            }
        }
    }
}

// Initialize Lucide icons
lucide.createIcons();

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1000);
    
    // Set current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // --- THEME TOGGLE ---
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const html = document.documentElement;
    
    // Check for saved theme or system preference
    const isDark = localStorage.getItem('theme') === 'dark' || 
                  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDark) {
        html.classList.add('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        html.classList.remove('dark');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
    
    themeToggle.addEventListener('click', () => {
        const isDarkMode = html.classList.contains('dark');
        
        if (isDarkMode) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
    });
    
    // --- MOBILE MENU ---
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    
    mobileMenuButton.addEventListener('click', () => {
        const isExpanded = mobileMenu.classList.toggle('hidden');
        menuIcon.innerHTML = isExpanded ? 
            '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>' :
            '<line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/>';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.innerHTML = '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>';
        });
    });
    
    // --- HERO CAROUSEL ---
    let currentSlide = 0;
    const heroSlides = document.querySelectorAll('#heroCarousel .carousel-item');
    const heroIndicators = document.querySelectorAll('#heroCarousel .carousel-indicator');
    let heroInterval;
    
    function showHeroSlide(index) {
        heroSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            heroIndicators[i].classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                heroIndicators[i].classList.add('active');
            }
        });
        currentSlide = index;
    }
    
    function nextHeroSlide() {
        showHeroSlide((currentSlide + 1) % heroSlides.length);
    }
    
    function prevHeroSlide() {
        showHeroSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
    }
    
    // Add click handlers to indicators
    heroIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showHeroSlide(index);
            resetHeroInterval();
        });
    });
    
    // Carousel controls
    document.querySelectorAll('#heroCarousel .carousel-control').forEach(control => {
        control.addEventListener('click', (e) => {
            if (e.target.closest('.prev') || e.target.closest('.next')) {
                if (e.target.closest('.prev')) prevHeroSlide();
                else nextHeroSlide();
                resetHeroInterval();
            }
        });
    });
    
    function startHeroCarousel() {
        heroInterval = setInterval(nextHeroSlide, 5000);
    }
    
    function resetHeroInterval() {
        clearInterval(heroInterval);
        startHeroCarousel();
    }
    
    // Initialize hero carousel
    showHeroSlide(0);
    startHeroCarousel();
    
    // Pause carousel on hover
    const heroCarousel = document.getElementById('heroCarousel');
    heroCarousel.addEventListener('mouseenter', () => clearInterval(heroInterval));
    heroCarousel.addEventListener('mouseleave', startHeroCarousel);
    
    // --- MEMBERSHIP SELECTION ---
    document.querySelectorAll('.membership-select').forEach(button => {
        button.addEventListener('click', function() {
            const plan = this.dataset.plan;
            const planNames = {
                'basic': 'Basic Plan ($49/month)',
                'premium': 'Premium Plan ($79/month)',
                'ultimate': 'Ultimate Plan ($149/month)'
            };
            
            // Scroll to contact form
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            
            // Show notification
            showNotification(`You selected the ${planNames[plan]}! Fill out the form below to get started.`, 'success');
            
            // Pre-fill contact form message
            setTimeout(() => {
                const messageField = document.getElementById('message');
                if (messageField) {
                    messageField.value = `Hello, I'm interested in the ${planNames[plan]}. Please contact me with more information.`;
                }
            }, 500);
        });
    });
    
    // --- FORM VALIDATION ---
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset errors
        document.querySelectorAll('[id^="error-"]').forEach(el => {
            el.textContent = '';
            el.classList.add('hidden');
        });
        formMessage.classList.add('hidden');
        
        // Get form values
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        // Validation
        if (firstName.length < 2) {
            document.getElementById('error-firstName').textContent = 'First name must be at least 2 characters';
            document.getElementById('error-firstName').classList.remove('hidden');
            isValid = false;
        }
        
        if (lastName.length < 2) {
            document.getElementById('error-lastName').textContent = 'Last name must be at least 2 characters';
            document.getElementById('error-lastName').classList.remove('hidden');
            isValid = false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('error-email').textContent = 'Please enter a valid email address';
            document.getElementById('error-email').classList.remove('hidden');
            isValid = false;
        }
        
        if (message.length < 10) {
            document.getElementById('error-message').textContent = 'Message must be at least 10 characters';
            document.getElementById('error-message').classList.remove('hidden');
            isValid = false;
        }
        
        if (isValid) {
            // Show success message
            formMessage.textContent = `Thank you, ${firstName}! Your message has been sent. We'll contact you within 24 hours.`;
            formMessage.className = 'bg-green-100 text-green-700 p-4 rounded-xl';
            formMessage.classList.remove('hidden');
            
            // Submit the form to FormSubmit
            const formData = new FormData(this);
            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    // Reset form on success
                    contactForm.reset();
                    // Hide message after 5 seconds
                    setTimeout(() => {
                        formMessage.classList.add('hidden');
                    }, 5000);
                }
            }).catch(error => {
                formMessage.textContent = 'There was an error sending your message. Please try again.';
                formMessage.className = 'bg-red-100 text-red-700 p-4 rounded-xl';
            });
        } else {
            formMessage.textContent = 'Please correct the errors above';
            formMessage.className = 'bg-red-100 text-red-700 p-4 rounded-xl';
            formMessage.classList.remove('hidden');
        }
    });
    
    // --- BACK TO TOP BUTTON ---
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.remove('opacity-0', 'translate-y-10');
            backToTop.classList.add('opacity-100', 'translate-y-0');
        } else {
            backToTop.classList.remove('opacity-100', 'translate-y-0');
            backToTop.classList.add('opacity-0', 'translate-y-10');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // --- SCROLL ANIMATIONS ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in', 'visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with scroll-fade class
    document.querySelectorAll('.scroll-fade').forEach(el => {
        observer.observe(el);
    });
    
    // Observe staggered items
    document.querySelectorAll('.stagger-item').forEach((el, index) => {
        setTimeout(() => observer.observe(el), index * 100);
    });
    
    // --- NOTIFICATION FUNCTION ---
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl transform translate-x-full transition-transform duration-300 ${
            type === 'success' ? 'bg-green-500 text-white' :
            type === 'error' ? 'bg-red-500 text-white' :
            'bg-primary text-white'
        }`;
        notification.innerHTML = `
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                    ${type === 'success' ? '<polyline points="20 6 9 17 4 12"/>' :
                      type === 'error' ? '<line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/>' :
                      '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'}
                </svg>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
            notification.classList.add('translate-x-0');
        }, 10);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.classList.remove('translate-x-0');
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }
    
    // --- NEWSLETTER FORM ---
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                showNotification(`Thank you for subscribing with ${email}!`, 'success');
                this.reset();
            }
        });
    }
    
    // --- SMOOTH SCROLL FOR ANCHOR LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // --- ACTIVE NAV LINK ON SCROLL ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function updateActiveNavLink() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Initialize
    updateActiveNavLink();
    
    // ===== NEW FUNCTIONALITIES ADDED BELOW =====
    
    // --- TESTIMONIALS CAROUSEL ---
    let currentTestimonial = 0;
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const testimonialPrev = document.querySelector('.testimonial-control.prev');
    const testimonialNext = document.querySelector('.testimonial-control.next');
    
    function showTestimonial(index) {
        testimonialItems.forEach((item, i) => {
            item.classList.remove('active');
            item.classList.add('hidden');
            if (i === index) {
                item.classList.add('active');
                item.classList.remove('hidden');
            }
        });
        currentTestimonial = index;
    }
    
    function nextTestimonial() {
        showTestimonial((currentTestimonial + 1) % testimonialItems.length);
    }
    
    function prevTestimonial() {
        showTestimonial((currentTestimonial - 1 + testimonialItems.length) % testimonialItems.length);
    }
    
    // Initialize testimonials carousel
    if (testimonialPrev && testimonialNext) {
        testimonialPrev.addEventListener('click', prevTestimonial);
        testimonialNext.addEventListener('click', nextTestimonial);
        
        // Auto-rotate testimonials every 8 seconds
        setInterval(nextTestimonial, 8000);
    }
    
    // --- MEMBERSHIP BILLING TOGGLE ---
    const billingToggle = document.getElementById('billingToggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const annualPrices = document.querySelectorAll('.annual-price');
    const billingLabels = document.querySelectorAll('#billingToggle + label span');
    
    if (billingToggle) {
        // Set initial state
        updateBillingDisplay();
        
        billingToggle.addEventListener('change', function() {
            updateBillingDisplay();
            
            // Show notification
            const isAnnual = this.checked;
            showNotification(
                `Switched to ${isAnnual ? 'annual' : 'monthly'} billing. ${isAnnual ? 'Save 20%!' : ''}`,
                'success'
            );
        });
    }
    
    function updateBillingDisplay() {
        const isAnnual = billingToggle.checked;
        
        // Toggle price display
        monthlyPrices.forEach(price => {
            price.classList.toggle('hidden', isAnnual);
        });
        annualPrices.forEach(price => {
            price.classList.toggle('hidden', !isAnnual);
        });
        
        // Update toggle button position
        if (billingLabels.length > 0) {
            billingLabels[0].style.transform = isAnnual ? 'translateX(2rem)' : 'translateX(0)';
        }
    }
    
    // --- FIXED: BOOKING MODAL FUNCTIONALITY ---
    const bookTourBtn = document.getElementById('bookTourBtn');
    const bookingModal = document.getElementById('bookingModal');
    const closeModalBtn = document.getElementById('closeModal');
    const tourBookingForm = document.getElementById('tourBookingForm');
    const successModal = document.getElementById('successModal');
    const closeSuccessModal = document.getElementById('closeSuccessModal');
    
    // Set minimum date to today for tour date
    const tourDateInput = document.getElementById('tourDate');
    if (tourDateInput) {
        const today = new Date().toISOString().split('T')[0];
        tourDateInput.min = today;
    }
    
   // FIXED: Open booking modal function
   function openBookingModal() {
    if (bookingModal) {
        bookingModal.classList.remove('hidden');
        bookingModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Trigger animation after display
        setTimeout(() => {
            const content = document.getElementById('bookingModalContent');
            if (content) {
                content.style.transform = 'scale(1)';
                content.style.opacity = '1';
            }
        }, 10);
    }
}
    
    // FIXED: Close booking modal function
    // FIXED: Close booking modal function
function closeBookingModal() {
    if (bookingModal) {
        const content = document.getElementById('bookingModalContent');
        if (content) {
            content.style.transform = 'scale(0.95)';
            content.style.opacity = '0';
        }
        
        setTimeout(() => {
            bookingModal.classList.remove('show');
            bookingModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 300);
    }
}
    
    // FIXED: Open booking modal on button click
    if (bookTourBtn) {
        bookTourBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openBookingModal();
        });
    }
    
    // FIXED: Close modal button
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeBookingModal);
    }
    
    // FIXED: Close modal when clicking outside
    if (bookingModal) {
        bookingModal.addEventListener('click', (e) => {
            if (e.target === bookingModal) {
                closeBookingModal();
            }
        });
    }
    
    // FIXED: Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && bookingModal && bookingModal.classList.contains('show')) {
            closeBookingModal();
        }
        if (e.key === 'Escape' && successModal && successModal.classList.contains('show')) {
            closeSuccessModalFunc();
        }
    });
    
    // FIXED: Handle tour booking form submission
    if (tourBookingForm) {
        tourBookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const tourDate = document.getElementById('tourDate').value;
            const tourTime = document.getElementById('tourTime').value;
            const guests = document.getElementById('guests').value;
            
            // Basic validation
            if (!tourDate || !tourTime) {
                showNotification('Please select both date and time for your tour.', 'error');
                return;
            }
            
            // FIXED: Close booking modal first
            closeBookingModal();
            
            // FIXED: Show success modal after a short delay
            setTimeout(() => {
                if (successModal) {
                    successModal.classList.add('show');
                    document.body.style.overflow = 'hidden';
                    
                    // Reset form
                    tourBookingForm.reset();
                }
            }, 300);
        });
    }
    
    // FIXED: Close success modal function
    function closeSuccessModalFunc() {
        if (successModal) {
            successModal.classList.remove('show');
            setTimeout(() => {
                document.body.style.overflow = 'auto';
            }, 300);
        }
    }
    
    // FIXED: Close success modal button
    if (closeSuccessModal) {
        closeSuccessModal.addEventListener('click', closeSuccessModalFunc);
    }
    
    // FIXED: Close success modal when clicking outside
    if (successModal) {
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                closeSuccessModalFunc();
            }
        });
    }
    
    // --- IMAGE LAZY LOADING ---
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // --- FORM INPUT ENHANCEMENTS ---
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 3 && value.length <= 6) {
                value = value.replace(/(\d{3})(\d+)/, '($1) $2');
            } else if (value.length > 6) {
                value = value.replace(/(\d{3})(\d{3})(\d+)/, '($1) $2-$3');
            }
            e.target.value = value;
        });
    }
    
    // --- SMOOTH SCROLL TO TOP ON PAGE RELOAD ---
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    };
    
    // --- INITIALIZE ALL MODIFICATIONS ---
    showTestimonial(0); // Show first testimonial
});
// script.js improvements

// 1. Fix mobile menu toggle
document.getElementById('mobileMenuButton').addEventListener('click', function() {
  const menu = document.getElementById('mobileMenu');
  const icon = document.getElementById('menuIcon');
  
  menu.classList.toggle('hidden');
  menu.classList.toggle('animate-slide-up');
  
  // Change icon based on state
  if (menu.classList.contains('hidden')) {
    icon.innerHTML = `<line x1="4" x2="20" y1="12" y2="12"/>
                      <line x1="4" x2="20" y1="6" y2="6"/>
                      <line x1="4" x2="20" y1="18" y2="18"/>`;
  } else {
    icon.innerHTML = `<line x1="18" x2="6" y1="6" y2="18"/>
                      <line x1="6" x2="18" y1="6" y2="18"/>`;
  }
});

// 2. Touch-friendly carousel
let touchStartX = 0;
let touchEndX = 0;

document.querySelectorAll('.carousel-item').forEach(item => {
  item.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  item.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
});

function handleSwipe() {
  const threshold = 50;
  if (touchEndX < touchStartX - threshold) {
    // Swipe left - next
    nextCarouselSlide();
  }
  if (touchEndX > touchStartX + threshold) {
    // Swipe right - previous
    prevCarouselSlide();
  }
}

// 3. Optimize animations for mobile
if ('matchMedia' in window) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (!prefersReducedMotion.matches) {
    // Only load heavy animations if user hasn't requested reduced motion
    import('https://unpkg.com/aos@next/dist/aos.js')
      .then(module => {
        module.default.init({
          duration: 800,
          once: true,
          offset: 100
        });
      });
  }
}
  if (window.innerWidth > 768) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/aos@next/dist/aos.css';
    document.head.appendChild(link);
  }

  // ============================================
// MOBILE-SPECIFIC FUNCTIONALITY
// ============================================

// 1. Viewport meta tag adjustment for mobile
function adjustViewport() {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (window.innerWidth <= 768) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5');
  } else {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1');
  }
}

// 2. Touch-friendly carousel swiping
function initializeTouchCarousel() {
  const heroCarousel = document.getElementById('heroCarousel');
  let touchStartX = 0;
  let touchEndX = 0;
  const swipeThreshold = 50;

  if (!heroCarousel) return;

  heroCarousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  heroCarousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleCarouselSwipe();
  }, { passive: true });

  function handleCarouselSwipe() {
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next slide
        nextHeroSlide();
      } else {
        // Swipe right - previous slide
        prevHeroSlide();
      }
      resetHeroInterval();
    }
  }
}

// 3. Mobile menu improvements
function enhanceMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  
  if (!mobileMenu || !mobileMenuButton) return;
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('hidden') && 
        !mobileMenu.contains(e.target) && 
        !mobileMenuButton.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      updateMenuIcon(false);
    }
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      updateMenuIcon(false);
    }
  });
  
  // Prevent body scroll when menu is open
  mobileMenuButton.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Close menu on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
      updateMenuIcon(false);
    });
  });
}

function updateMenuIcon(isOpen) {
  const menuIcon = document.getElementById('menuIcon');
  if (!menuIcon) return;
  
  if (isOpen) {
    menuIcon.innerHTML = `<line x1="18" x2="6" y1="6" y2="18"/>
                         <line x1="6" x2="18" y1="6" y2="18"/>`;
  } else {
    menuIcon.innerHTML = `<line x1="4" x2="20" y1="12" y2="12"/>
                         <line x1="4" x2="20" y1="6" y2="6"/>
                         <line x1="4" x2="20" y1="18" y2="18"/>`;
  }
}

// 4. Optimize animations for mobile
function optimizeAnimations() {
  if ('matchMedia' in window) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      // Disable all non-essential animations
      document.querySelectorAll('*').forEach(el => {
        el.style.animationPlayState = 'paused';
      });
    }
  }
  
  // Disable heavy animations on mobile
  if (window.innerWidth < 768) {
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach(el => {
      el.style.animation = 'none';
    });
  }
}

// 5. Lazy load images for mobile
function initializeLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
          }
          
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.getAttribute('data-src');
    });
  }
}

// 6. Mobile form validation enhancements
function enhanceFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const inputs = this.querySelectorAll('input[required], textarea[required], select[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          showInputError(input, 'This field is required');
        } else {
          clearInputError(input);
        }
        
        // Email validation
        if (input.type === 'email' && input.value.trim()) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value.trim())) {
            isValid = false;
            showInputError(input, 'Please enter a valid email address');
          }
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        // Scroll to first error
        const firstError = this.querySelector('.error-message');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
  });
  
  function showInputError(input, message) {
    const errorId = `error-${input.id || input.name}`;
    let errorElement = document.getElementById(errorId);
    
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.id = errorId;
      errorElement.className = 'error-message text-red-500 text-sm mt-1';
      input.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
    input.classList.add('border-red-500');
  }
  
  function clearInputError(input) {
    const errorId = `error-${input.id || input.name}`;
    const errorElement = document.getElementById(errorId);
    
    if (errorElement) {
      errorElement.remove();
    }
    
    input.classList.remove('border-red-500');
  }
}

// 7. Mobile device detection and adjustments
function detectMobileFeatures() {
  // Check if device has touch capability
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (isTouchDevice) {
    document.body.classList.add('touch-device');
    
    // Add touch-specific styles
    const style = document.createElement('style');
    style.textContent = `
      .touch-device .nav-link:hover span,
      .touch-device .membership-card:hover {
        transform: none !important;
      }
      
      .touch-device button:active {
        transform: scale(0.98) !important;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Check for iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (isIOS) {
    document.body.classList.add('ios-device');
    
    // Fix for iOS viewport height
    function setVh() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVh();
    window.addEventListener('resize', setVh);
  }
}

// 8. Performance optimization for mobile
function optimizePerformance() {
  // Debounce scroll events
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      // Update active nav only after scrolling stops
      updateActiveNavLink();
    }, 100);
  });
  
  // Throttle resize events
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      adjustViewport();
      optimizeAnimations();
    }, 250);
  });
}

// 9. Mobile-friendly modals
function enhanceMobileModals() {
  const modals = document.querySelectorAll('#bookingModal, #successModal');
  
  modals.forEach(modal => {
    // Prevent background scroll when modal is open
    modal.addEventListener('shown', () => {
      document.body.style.overflow = 'hidden';
    });
    
    modal.addEventListener('hidden', () => {
      document.body.style.overflow = '';
    });
    
    // Close on tap outside for mobile
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        const closeBtn = modal.querySelector('[data-dismiss="modal"], .close-modal');
        if (closeBtn) closeBtn.click();
      }
    });
  });
}

// 10. Initialize all mobile enhancements
function initializeMobileEnhancements() {
  // Run on DOM ready
  document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for everything to load
    setTimeout(() => {
      adjustViewport();
      initializeTouchCarousel();
      enhanceMobileMenu();
      optimizeAnimations();
      initializeLazyLoading();
      enhanceFormValidation();
      detectMobileFeatures();
      optimizePerformance();
      enhanceMobileModals();
      
      // Add mobile-specific event listeners
      addMobileEventListeners();
    }, 100);
  });
  
  // Run on window load
  window.addEventListener('load', () => {
    // Final optimizations after everything loads
    if (window.innerWidth < 768) {
      // Hide loading screen faster on mobile
      const loadingScreen = document.getElementById('loadingScreen');
      if (loadingScreen) {
        loadingScreen.style.transitionDuration = '300ms';
      }
    }
  });
}

// 11. Additional mobile event listeners
function addMobileEventListeners() {
  // Handle orientation change
  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      adjustViewport();
      // Force redraw for certain elements
      document.querySelectorAll('.carousel-item.active').forEach(item => {
        item.style.display = 'none';
        item.offsetHeight; // Trigger reflow
        item.style.display = 'block';
      });
    }, 300);
  });
  
  // Handle virtual keyboard appearance
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      if (window.innerWidth < 768) {
        // Scroll input into view when keyboard appears
        setTimeout(() => {
          input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
      }
    });
  });
}

// ============================================
// MOBILE-SPECIFIC UTILITY FUNCTIONS
// ============================================

// Check if device is mobile
function isMobileDevice() {
  return window.innerWidth <= 768 || 
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Check connection speed for mobile
function checkConnectionSpeed() {
  if (navigator.connection) {
    const connection = navigator.connection;
    const speed = connection.effectiveType;
    
    if (speed === 'slow-2g' || speed === '2g') {
      // Disable animations and heavy images for slow connections
      document.querySelectorAll('.bg-animated, .parallax').forEach(el => {
        el.style.display = 'none';
      });
    }
  }
}

// Initialize everything
initializeMobileEnhancements();

// Export functions if needed
window.mobileUtils = {
  isMobileDevice,
  checkConnectionSpeed,
  adjustViewport
};