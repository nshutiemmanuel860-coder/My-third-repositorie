// ==================== GLOBAL INIT ====================
document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ---------- Lucide Icons ----------
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // ---------- Loading Screen ----------
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    }

    // ---------- Current Year ----------
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // ---------- Theme Toggle (Dark/Light) ----------
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const html = document.documentElement;

    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        html.classList.add('dark');
        if (sunIcon) sunIcon.classList.remove('hidden');
        if (moonIcon) moonIcon.classList.add('hidden');
    } else {
        html.classList.remove('dark');
        if (sunIcon) sunIcon.classList.add('hidden');
        if (moonIcon) moonIcon.classList.remove('hidden');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                sunIcon?.classList.add('hidden');
                moonIcon?.classList.remove('hidden');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                sunIcon?.classList.remove('hidden');
                moonIcon?.classList.add('hidden');
            }
        });
    }

    // ---------- Mobile Menu ----------
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');

    if (mobileMenuButton && mobileMenu) {
        // Toggle menu
        mobileMenuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            const isHidden = mobileMenu.classList.contains('hidden');
            mobileMenu.classList.toggle('hidden');
            // Update aria-expanded
            mobileMenuButton.setAttribute('aria-expanded', isHidden);
            // Update icon
            if (menuIcon) {
                menuIcon.innerHTML = isHidden
                    ? `<line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/>`  // X
                    : `<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>`; // hamburger
            }
            // Prevent body scroll when menu open
            document.body.style.overflow = isHidden ? 'hidden' : 'auto';
        });

        // Close on link click
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                if (menuIcon) {
                    menuIcon.innerHTML = `<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>`;
                }
                document.body.style.overflow = 'auto';
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!mobileMenu.classList.contains('hidden') &&
                !mobileMenu.contains(e.target) &&
                !mobileMenuButton.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                if (menuIcon) {
                    menuIcon.innerHTML = `<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>`;
                }
                document.body.style.overflow = 'auto';
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                if (menuIcon) {
                    menuIcon.innerHTML = `<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>`;
                }
                document.body.style.overflow = 'auto';
            }
        });
    }

    // ---------- Hero Carousel ----------
    let heroCurrent = 0;
    const heroSlides = document.querySelectorAll('#heroCarousel .carousel-item');
    const heroIndicators = document.querySelectorAll('#heroCarousel .carousel-indicator');
    let heroInterval;

    function showHeroSlide(index) {
        if (!heroSlides.length) return;
        heroSlides.forEach((s, i) => {
            s.classList.toggle('active', i === index);
            if (heroIndicators[i]) heroIndicators[i].classList.toggle('active', i === index);
        });
        heroCurrent = index;
    }

    function nextHeroSlide() { showHeroSlide((heroCurrent + 1) % heroSlides.length); }
    function prevHeroSlide() { showHeroSlide((heroCurrent - 1 + heroSlides.length) % heroSlides.length); }

    function startHeroCarousel() { heroInterval = setInterval(nextHeroSlide, 5000); }
    function resetHeroCarousel() { clearInterval(heroInterval); startHeroCarousel(); }

    if (heroSlides.length) {
        showHeroSlide(0);
        startHeroCarousel();

        // Controls
        document.querySelectorAll('#heroCarousel .carousel-control').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                btn.classList.contains('prev') ? prevHeroSlide() : nextHeroSlide();
                resetHeroCarousel();
            });
        });

        // Indicators
        heroIndicators.forEach((ind, i) => {
            ind.addEventListener('click', () => {
                showHeroSlide(i);
                resetHeroCarousel();
            });
        });

        // Pause on hover
        const heroCarousel = document.getElementById('heroCarousel');
        heroCarousel?.addEventListener('mouseenter', () => clearInterval(heroInterval));
        heroCarousel?.addEventListener('mouseleave', startHeroCarousel);

        // Touch swipe for mobile
        let touchStartX = 0, touchEndX = 0;
        heroCarousel?.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
        heroCarousel?.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                diff > 0 ? nextHeroSlide() : prevHeroSlide();
                resetHeroCarousel();
            }
        }, { passive: true });
    }

    // ---------- Testimonials Carousel ----------
    let testimonialCurrent = 0;
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const testimonialPrev = document.querySelector('.testimonial-control.prev');
    const testimonialNext = document.querySelector('.testimonial-control.next');

    function showTestimonial(index) {
        if (!testimonialItems.length) return;
        testimonialItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
            item.classList.toggle('hidden', i !== index);
        });
        testimonialCurrent = index;
    }

    function nextTestimonial() { showTestimonial((testimonialCurrent + 1) % testimonialItems.length); }
    function prevTestimonial() { showTestimonial((testimonialCurrent - 1 + testimonialItems.length) % testimonialItems.length); }

    if (testimonialItems.length) {
        showTestimonial(0);
        testimonialPrev?.addEventListener('click', (e) => { e.preventDefault(); prevTestimonial(); });
        testimonialNext?.addEventListener('click', (e) => { e.preventDefault(); nextTestimonial(); });
        // Auto-rotate every 8 seconds
        setInterval(nextTestimonial, 8000);

        // Touch swipe
        const carousel = document.getElementById('testimonialsCarousel');
        let tStart = 0, tEnd = 0;
        carousel?.addEventListener('touchstart', (e) => { tStart = e.changedTouches[0].screenX; }, { passive: true });
        carousel?.addEventListener('touchend', (e) => {
            tEnd = e.changedTouches[0].screenX;
            const diff = tStart - tEnd;
            if (Math.abs(diff) > 50) {
                diff > 0 ? nextTestimonial() : prevTestimonial();
            }
        }, { passive: true });
    }

    // ---------- Membership Billing Toggle ----------
    const billingToggle = document.getElementById('billingToggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const annualPrices = document.querySelectorAll('.annual-price');

    function updateBilling() {
        if (!billingToggle) return;
        const isAnnual = billingToggle.checked;
        monthlyPrices.forEach(el => el.classList.toggle('hidden', isAnnual));
        annualPrices.forEach(el => el.classList.toggle('hidden', !isAnnual));
        const toggleSpan = document.querySelector('#billingToggle + label span');
        if (toggleSpan) toggleSpan.style.transform = isAnnual ? 'translateX(2rem)' : 'translateX(0)';
    }

    if (billingToggle) {
        billingToggle.addEventListener('change', updateBilling);
        updateBilling();
    }

    // ---------- Membership Select ----------
    document.querySelectorAll('.membership-select').forEach(btn => {
        btn.addEventListener('click', function() {
            const plan = this.dataset.plan;
            const planNames = { basic: 'Basic Plan ($49/month)', premium: 'Premium Plan ($79/month)', ultimate: 'Ultimate Plan ($149/month)' };
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            showNotification(`You selected the ${planNames[plan] || plan}! Fill out the form below.`, 'success');
            const msgField = document.getElementById('message');
            if (msgField) {
                msgField.value = `Hello, I'm interested in the ${planNames[plan] || plan}. Please contact me.`;
            }
        });
    });

    // ---------- Contact Form Validation & Submission ----------
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Clear previous errors
            document.querySelectorAll('[id^="error-"]').forEach(el => {
                el.textContent = ''; el.classList.add('hidden');
            });
            if (formMessage) formMessage.classList.add('hidden');

            const firstName = document.getElementById('firstName')?.value.trim() || '';
            const lastName = document.getElementById('lastName')?.value.trim() || '';
            const email = document.getElementById('email')?.value.trim() || '';
            const message = document.getElementById('message')?.value.trim() || '';
            const phone = document.getElementById('phone')?.value.trim() || '';

            let isValid = true;

            if (firstName.length < 2) {
                showError('firstName', 'First name must be at least 2 characters');
                isValid = false;
            }
            if (lastName.length < 2) {
                showError('lastName', 'Last name must be at least 2 characters');
                isValid = false;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
            if (message.length < 10) {
                showError('message', 'Message must be at least 10 characters');
                isValid = false;
            }

            function showError(id, msg) {
                const errorEl = document.getElementById('error-' + id);
                if (errorEl) {
                    errorEl.textContent = msg;
                    errorEl.classList.remove('hidden');
                }
            }

            if (isValid) {
                // Submit via fetch (FormSubmit)
                const formData = new FormData(contactForm);
                fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                })
                .then(response => {
                    if (response.ok) {
                        if (formMessage) {
                            formMessage.textContent = `Thank you, ${firstName}! Your message has been sent. We'll reply within 24h.`;
                            formMessage.className = 'bg-green-100 text-green-700 p-4 rounded-xl';
                            formMessage.classList.remove('hidden');
                        }
                        contactForm.reset();
                        setTimeout(() => { if (formMessage) formMessage.classList.add('hidden'); }, 5000);
                    } else {
                        throw new Error('Submission failed');
                    }
                })
                .catch(() => {
                    if (formMessage) {
                        formMessage.textContent = 'There was an error. Please try again.';
                        formMessage.className = 'bg-red-100 text-red-700 p-4 rounded-xl';
                        formMessage.classList.remove('hidden');
                    }
                });
            } else {
                if (formMessage) {
                    formMessage.textContent = 'Please correct the errors above.';
                    formMessage.className = 'bg-red-100 text-red-700 p-4 rounded-xl';
                    formMessage.classList.remove('hidden');
                }
            }
        });

        // Phone number formatting
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function() {
                let val = this.value.replace(/\D/g, '');
                if (val.length > 3 && val.length <= 6) val = val.replace(/(\d{3})(\d+)/, '($1) $2');
                else if (val.length > 6) val = val.replace(/(\d{3})(\d{3})(\d+)/, '($1) $2-$3');
                this.value = val;
            });
        }
    }

    // ---------- Newsletter Form ----------
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput?.value) {
                showNotification(`Thank you for subscribing with ${emailInput.value}!`, 'success');
                this.reset();
            }
        });
    }

    // ---------- Back to Top Button ----------
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (!backToTop) return;
        if (window.scrollY > 300) {
            backToTop.classList.remove('opacity-0', 'translate-y-10');
            backToTop.classList.add('opacity-100', 'translate-y-0');
        } else {
            backToTop.classList.remove('opacity-100', 'translate-y-0');
            backToTop.classList.add('opacity-0', 'translate-y-10');
        }
    });
    backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // ---------- Smooth Scroll for Anchor Links ----------
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ---------- Active Nav Link on Scroll ----------
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // ---------- Booking Modal ----------
    const bookTourBtn = document.getElementById('bookTourBtn');
    const bookingModal = document.getElementById('bookingModal');
    const closeModalBtn = document.getElementById('closeModal');
    const tourBookingForm = document.getElementById('tourBookingForm');
    const successModal = document.getElementById('successModal');
    const closeSuccessModal = document.getElementById('closeSuccessModal');

    // Set min date for tour date picker
    const tourDate = document.getElementById('tourDate');
    if (tourDate) {
        const today = new Date().toISOString().split('T')[0];
        tourDate.min = today;
    }

    function openBookingModal() {
        if (!bookingModal) return;
        bookingModal.classList.remove('hidden');
        bookingModal.classList.add('show');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            const content = document.getElementById('bookingModalContent');
            if (content) {
                content.style.transform = 'scale(1)';
                content.style.opacity = '1';
            }
        }, 10);
    }

    function closeBookingModal() {
        if (!bookingModal) return;
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

    bookTourBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        openBookingModal();
    });

    closeModalBtn?.addEventListener('click', closeBookingModal);
    bookingModal?.addEventListener('click', (e) => {
        if (e.target === bookingModal) closeBookingModal();
    });

    // Close modal with Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && bookingModal?.classList.contains('show')) {
            closeBookingModal();
        }
        if (e.key === 'Escape' && successModal?.classList.contains('show')) {
            closeSuccessModalFunc();
        }
    });

    // Tour Booking Form Submission
    if (tourBookingForm) {
        tourBookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const date = document.getElementById('tourDate')?.value;
            const time = document.getElementById('tourTime')?.value;
            if (!date || !time) {
                showNotification('Please select both date and time.', 'error');
                return;
            }
            closeBookingModal();
            setTimeout(() => {
                if (successModal) {
                    successModal.classList.remove('hidden');
                    successModal.classList.add('show');
                    document.body.style.overflow = 'hidden';
                    const successContent = document.getElementById('successModalContent');
                    if (successContent) {
                        successContent.style.transform = 'scale(1)';
                        successContent.style.opacity = '1';
                    }
                    tourBookingForm.reset();
                }
            }, 300);
        });
    }

    // Success Modal Close
    function closeSuccessModalFunc() {
        if (!successModal) return;
        const content = document.getElementById('successModalContent');
        if (content) {
            content.style.transform = 'scale(0.95)';
            content.style.opacity = '0';
        }
        setTimeout(() => {
            successModal.classList.remove('show');
            successModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 300);
    }

    closeSuccessModal?.addEventListener('click', closeSuccessModalFunc);
    successModal?.addEventListener('click', (e) => {
        if (e.target === successModal) closeSuccessModalFunc();
    });

    // ---------- Notification System ----------
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-xl shadow-2xl transform transition-transform duration-300 translate-x-full ${
            type === 'success' ? 'bg-green-500 text-white' :
            type === 'error' ? 'bg-red-500 text-white' :
            'bg-primary text-white'
        }`;
        notification.innerHTML = `<div class="flex items-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="mr-2">
                ${type === 'success' ? '<polyline points="20 6 9 17 4 12"/>' :
                  type === 'error' ? '<line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/>' :
                  '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'}
            </svg>
            <span>${message}</span>
        </div>`;
        document.body.appendChild(notification);
        setTimeout(() => notification.classList.remove('translate-x-full'), 10);
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
    window.showNotification = showNotification; // expose if needed

    // ---------- Lazy Loading Images (Intersection Observer) ----------
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        }, { rootMargin: '50px' });
        document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
    }

    // ---------- Reduced Motion / Animation Optimizations ----------
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.floating, .animate-slide-up, .membership-card').forEach(el => {
            el.style.animation = 'none';
            el.style.transition = 'none';
        });
    }

    // ---------- iOS vh fix ----------
    function setVh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setVh();
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);

    // ---------- Debounced Scroll for Performance ----------
    let scrollTimer;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => updateActiveNav(), 100);
    });

    console.log('Apex Fitness: All systems operational.');
});