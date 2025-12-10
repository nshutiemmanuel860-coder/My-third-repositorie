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
                document.getElementById('loadingScreen').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('loadingScreen').style.display = 'none';
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
                    // Simulate form submission
                    formMessage.textContent = `Thank you, ${firstName}! Your message has been sent. We'll contact you within 24 hours.`;
                    formMessage.className = 'bg-green-100 text-green-700 p-4 rounded-xl';
                    formMessage.classList.remove('hidden');
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Hide message after 5 seconds
                    setTimeout(() => {
                        formMessage.classList.add('hidden');
                    }, 5000);
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
        });