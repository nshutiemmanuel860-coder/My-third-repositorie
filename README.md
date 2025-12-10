<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apex Fitness & Wellness | Premium Fitness Experience</title>
    <meta name="description" content="Apex Fitness & Wellness - Transform your fitness journey with state-of-the-art facilities, expert coaching, and a supportive community. Achieve your peak performance.">
    <meta name="keywords" content="fitness, wellness, gym, personal training, yoga, nutrition, health">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@600;700;800;900&display=swap" rel="stylesheet">
    
    <!-- Favicon -->
    <link rel="icon" href="gymlogo.png">
    <link rel="stylesheet" href="style.css">
</head>
<body class="antialiased bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
    
    <!-- Loading Screen -->
    <div id="loadingScreen" class="fixed inset-0 bg-white dark:bg-gray-900 z-[9999] flex items-center justify-center transition-opacity duration-500">
        <div class="text-center">
            <div class="loader mb-4"></div>
            <p class="text-gray-600 dark:text-gray-400">Loading Apex Fitness...</p>
        </div>
    </div>
    <!-- Back to Top Button -->
    <button id="backToTop" class="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 opacity-0 transform translate-y-10 z-40">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m18 15-6-6-6 6"/>
        </svg>
    </button>
    <!-- Header -->
    <header class="sticky top-0 z-50 shadow-lg dark:shadow-gray-800/50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <a href="#home" class="flex items-center space-x-3 group">
                    <div class="bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                        </svg>
                    </div>
                    <div>
                        <h1 class="text-2xl font-extrabold brand-font">
                            <span class="text-gray-900 dark:text-white">APEX</span>
                            <span class="gradient-text">FITNESS</span>
                        </h1>
                        <p class="text-xs text-gray-500 dark:text-gray-400 -mt-1">Peak Performance</p>
                    </div>
                </a>
                <!-- Desktop Navigation -->
                <nav class="hidden lg:flex items-center space-x-8">
                    <a href="#home" class="nav-link font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 relative group">
                        Home
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#about" class="nav-link font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 relative group">
                        About
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#services" class="nav-link font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 relative group">
                        Services
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#testimonials" class="nav-link font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 relative group">
                        Testimonials
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#contact" class="nav-link font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 relative group">
                        Contact
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#membership" class="btn-primary px-6 py-2.5 rounded-full font-semibold text-white shadow-lg">
                        Join Now
                    </a>
                </nav>
                <!-- Theme Toggle & Mobile Menu Button -->
                <div class="flex items-center space-x-4">
                    <button id="themeToggle" aria-label="Toggle theme" class="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                        <svg id="sunIcon" class="hidden" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="4"/>
                            <path d="M12 2v2"/>
                            <path d="M12 20v2"/>
                            <path d="m4.93 4.93 1.41 1.41"/>
                            <path d="m17.66 17.66 1.41 1.41"/>
                            <path d="M2 12h2"/>
                            <path d="M20 12h2"/>
                            <path d="m6.34 17.66-1.41 1.41"/>
                            <path d="m19.07 4.93-1.41 1.41"/>
                        </svg>
                        <svg id="moonIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                        </svg>
                    </button>
                    <button id="mobileMenuButton" class="lg:hidden p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                        <svg id="menuIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="4" x2="20" y1="12" y2="12"/>
                            <line x1="4" x2="20" y1="6" y2="6"/>
                            <line x1="4" x2="20" y1="18" y2="18"/>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Mobile Menu -->
            <div id="mobileMenu" class="lg:hidden hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4 animate-slide-up">
                <div class="flex flex-col space-y-3">
                    <a href="#home" class="mobile-nav-link py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 font-medium">
                        Home
                    </a>
                    <a href="#about" class="mobile-nav-link py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 font-medium">
                        About
                    </a>
                    <a href="#services" class="mobile-nav-link py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 font-medium">
                        Services
                    </a>
                    <a href="#testimonials" class="mobile-nav-link py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 font-medium">
                        Testimonials
                    </a>
                    <a href="#contact" class="mobile-nav-link py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 font-medium">
                        Contact
                    </a>
                    <a href="#membership" class="btn-primary py-3 px-4 rounded-lg font-semibold text-white text-center mt-2">
                        Join Now
                    </a>
                </div>
            </div>
        </div>
    </header>
    <main>
        <!-- Hero Section -->
        <section id="home" class="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
            <!-- Background Gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-gradient-start via-gradient-middle to-gradient-end opacity-10"></div>
            
            <!-- Animated Background Elements -->
            <div class="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            
            <div class="container relative mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Hero Content -->
                    <div class="animate-slide-up">
                        <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                            </svg>
                            TRANSFORM YOUR LIFESTYLE
                        </div>
                        <h1 class="text-5xl md:text-7xl font-extrabold mb-6">
                            <span class="block text-gray-900 dark:text-white">Achieve Your</span>
                            <span class="gradient-text">Peak Performance</span>
                        </h1>
                        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
                            Join the elite community where fitness meets wellness. State-of-the-art facilities, expert coaching, and personalized programs designed for your success.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="#membership" class="btn-primary px-8 py-4 rounded-full font-bold text-white text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                                Start Free Trial
                            </a>
                            <a href="#services" class="px-8 py-4 rounded-full border-2 border-primary text-primary dark:text-primary-light font-bold hover:bg-primary/5 transition-colors duration-300">
                                View Programs
                            </a>
                        </div>
                        <!-- Stats -->
                        <div class="mt-12 grid grid-cols-3 gap-6">
                            <div class="text-center">
                                <div class="text-3xl font-bold gradient-text mb-2">2,500+</div>
                                <div class="text-gray-600 dark:text-gray-400">Active Members</div>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl font-bold gradient-text mb-2">24/7</div>
                                <div class="text-gray-600 dark:text-gray-400">Access</div>
                            </div>
                            <div class="text-center">
                                <div class="text-3xl font-bold gradient-text mb-2">50+</div>
                                <div class="text-gray-600 dark:text-gray-400">Expert Coaches</div>
                            </div>
                        </div>
                    </div>
                    <!-- Hero Image Carousel -->
                    <div class="relative">
                        <div id="heroCarousel" class="relative overflow-hidden rounded-2xl shadow-2xl">
                            <div class="carousel-item active">
                                <img src="gymphoto1.avif" alt="Modern gym facility" class="w-full h-96 object-cover">
                            </div>
                            <div class="carousel-item">
                                <img src="gymphoto1.jpg" alt="Personal training session" class="w-full h-96 object-cover">
                            </div>
                            <div class="carousel-item">
                                <img src="gymphoto2.jpg" alt="Group fitness class" class="w-full h-96 object-cover">
                            </div>
                            <!-- Carousel Controls -->
                            <button class="carousel-control prev absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur-sm transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m15 18-6-6 6-6"/>
                                </svg>
                            </button>
                            <button class="carousel-control next absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur-sm transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m9 18 6-6-6-6"/>
                                </svg>
                            </button>
                            <!-- Carousel Indicators -->
                            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                <button class="carousel-indicator w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors duration-300"></button>
                                <button class="carousel-indicator w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors duration-300"></button>
                                <button class="carousel-indicator w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors duration-300"></button>
                            </div>
                        </div>
                        <!-- Floating Badge -->
                        <div class="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl floating">
                            <div class="flex items-center space-x-3">
                                <div class="bg-primary/10 p-3 rounded-xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                        <path d="m9 11 3 3L22 4"/>
                                    </svg>
                                </div>
                                <div>
                                    <div class="font-bold text-gray-900 dark:text-white">Certified Coaches</div>
                                    <div class="text-sm text-gray-600 dark:text-gray-400">Expert Guidance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- About Section -->
        <section id="about" class="py-20 bg-white dark:bg-gray-800">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-extrabold mb-6">
                        <span class="text-gray-900 dark:text-white">Our</span>
                        <span class="gradient-text"> Story</span>
                    </h2>
                    <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Founded on the principles of excellence, community, and transformation
                    </p>
                </div>
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- About Image -->
                    <div class="relative">
                        <div class="rounded-2xl overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                                 alt="Apex Fitness community" 
                                 class="w-full h-auto object-cover">
                        </div>
                        <div class="absolute -bottom-6 -left-6 bg-gradient-to-br from-gradient-start to-gradient-end text-white p-8 rounded-2xl shadow-2xl">
                            <div class="text-4xl font-bold mb-2">10+</div>
                            <div class="text-lg font-semibold">Years of Excellence</div>
                        </div>
                    </div>
                    <!-- About Content -->
                    <div class="space-y-8">
                        <div class="space-y-4">
                            <h3 class="text-3xl font-bold text-gray-900 dark:text-white">Redefining Fitness Standards</h3>
                            <p class="text-gray-600 dark:text-gray-400 text-lg">
                                At Apex Fitness, we believe that true wellness encompasses mind, body, and community. Our journey began with a simple mission: to create a space where everyone can achieve their personal best.
                            </p>
                        </div>
                        <!-- Values -->
                        <div class="grid sm:grid-cols-2 gap-6">
                            <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300">
                                <div class="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                                    </svg>
                                </div>
                                <h4 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Community First</h4>
                                <p class="text-gray-600 dark:text-gray-400">Building strong connections for lasting success.</p>
                            </div>
                            <div class="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300">
                                <div class="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                                        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                                        <path d="M5 3v4"/>
                                        <path d="M19 17v4"/>
                                        <path d="M3 5h4"/>
                                        <path d="M17 19h4"/>
                                    </svg>
                                </div>
                                <h4 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Innovation</h4>
                                <p class="text-gray-600 dark:text-gray-400">Latest equipment and cutting-edge techniques.</p>
                            </div>
                        </div>
                        <a href="#contact" class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors duration-300">
                            Learn more about us
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
                                <path d="M5 12h14"/>
                                <path d="m12 5 7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- Services Section -->
        <section id="services" class="py-20 bg-gray-50 dark:bg-gray-900">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-extrabold mb-6">
                        <span class="text-gray-900 dark:text-white">Our</span>
                        <span class="gradient-text"> Services</span>
                    </h2>
                    <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Comprehensive wellness solutions tailored to your unique goals
                    </p>
                </div>
                <!-- Services Grid -->
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <!-- Service 1 -->
                    <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 membership-card">
                        <div class="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                                <path d="M22 18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                                <circle cx="12" cy="13" r="4"/>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Personal Training</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-6">
                            1-on-1 coaching with certified trainers. Custom programs designed for your specific fitness goals and lifestyle.
                        </p>
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mr-3">
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                                <span class="text-gray-700 dark:text-gray-300">Custom workout plans</span>
                            </li>
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mr-3">
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                                <span class="text-gray-700 dark:text-gray-300">Nutrition guidance</span>
                            </li>
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mr-3">
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                                <span class="text-gray-700 dark:text-gray-300">Progress tracking</span>
                            </li>
                        </ul>
                        <a href="#contact" class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors duration-300">
                            Book a session
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
                                <path d="M5 12h14"/>
                                <path d="m12 5 7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                    <!-- Service 2 -->
                    <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 membership-card">
                        <div class="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                                <circle cx="12" cy="12" r="10"/>
                                <polyline points="12 6 12 12 16 14"/>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Group Classes</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-6">
                            High-energy group sessions including HIIT, Yoga, Spin, and more. Motivating environment with expert instructors.
                        </p>
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mr-3">
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                                <span class="text-gray-700 dark:text-gray-300">50+ weekly classes</span>
                            </li>
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mr-3">
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                                <span class="text-gray-700 dark:text-gray-300">All fitness levels</span>
                            </li>
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mr-3">
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                                <span class="text-gray-700 dark:text-gray-300">Live & virtual options</span>
                            </li>
                        </ul>
                        <a href="#contact" class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors duration-300">
                            View schedule
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
                                <path d="M5 12h14"/>
                                <path d="m12 5 7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                    <!-- Service 3 -->
                    <div class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 membership-card">
                        <div class="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Wellness Programs</h3>
                        <p class="text-gray-600 dark:text-gray-400 mb-6">
                            Holistic approach including meditation, recovery sessions, and nutritional counseling for complete wellness.
                        </p>
                        <ul class="space-y-3 mb-6">
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mr-3">
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                                <span class="text-gray-700 dark:text-gray-300">Meditation sessions</span>
                            </li>
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mr-3">
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                                <span class="text-gray-700 dark:text-gray-300">Recovery therapy</span>
                            </li>
                            <li class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mr-3">
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                                <span class="text-gray-700 dark:text-gray-300">Nutrition planning</span>
                            </li>
                        </ul>
                        <a href="#contact" class="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors duration-300">
                            Explore wellness
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2">
                                <path d="M5 12h14"/>
                                <path d="m12 5 7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <!-- Membership Plans -->
                <div id="membership" class="pt-16 border-t border-gray-200 dark:border-gray-800">
                    <div class="text-center mb-12">
                        <h3 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Choose Your Membership</h3>
                        <p class="text-gray-600 dark:text-gray-400">Flexible plans for every fitness journey</p>
                    </div>
                    <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <!-- Basic Plan -->
                        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-2 border-gray-200 dark:border-gray-700 membership-card">
                            <div class="text-center mb-8">
                                <h4 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Basic</h4>
                                <div class="text-5xl font-extrabold gradient-text mb-2">$49</div>
                                <p class="text-gray-600 dark:text-gray-400">per month</p>
                            </div>
                            <ul class="space-y-4 mb-8">
                                <li class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mr-3">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                    <span>Gym Access (6am-10pm)</span>
                                </li>
                                <li class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mr-3">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                    <span>Basic Equipment</span>
                                </li>
                                <li class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 mr-3">
                                        <path d="M18 6 6 18"/>
                                        <path d="m6 6 12 12"/>
                                    </svg>
                                    <span class="text-gray-500">Group Classes</span>
                                </li>
                            </ul>
                            <button class="w-full py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors duration-300 membership-select" data-plan="basic">
                                Select Plan
                            </button>
                        </div>
                        <!-- Premium Plan -->
                        <div class="bg-gradient-to-b from-gradient-start to-gradient-end rounded-2xl shadow-2xl p-8 relative membership-card transform scale-105">
                            <div class="absolute -top-3 left-1/2 -translate-x-1/2">
                                <span class="bg-white text-primary px-4 py-1 rounded-full text-sm font-bold">
                                    MOST POPULAR
                                </span>
                            </div>
                            <div class="text-center mb-8 text-white">
                                <h4 class="text-2xl font-bold mb-2">Premium</h4>
                                <div class="text-5xl font-extrabold mb-2">$79</div>
                                <p class="text-white/80">per month</p>
                            </div>
                            <ul class="space-y-4 mb-8 text-white">
                                <li class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                    <span>24/7 Gym Access</span>
                                </li>
                                <li class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                    <span>All Group Classes</span>
                                </li>
                                <li class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-3">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                    <span>Locker & Towel Service</span>
                                </li>
                            </ul>
                            <button class="w-full py-3 rounded-xl bg-white text-primary font-bold hover:bg-gray-100 transition-colors duration-300 membership-select" data-plan="premium">
                                Select Plan
                            </button>
                        </div>
                        <!-- Ultimate Plan -->
                        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-2 border-primary/20 membership-card">
                            <div class="text-center mb-8">
                                <h4 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Ultimate</h4>
                                <div class="text-5xl font-extrabold gradient-text mb-2">$149</div>
                                <p class="text-gray-600 dark:text-gray-400">per month</p>
                            </div>
                            <ul class="space-y-4 mb-8">
                                <li class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mr-3">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                    <span>Everything in Premium</span>
                                </li>
                                <li class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mr-3">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                    <span>2 Personal Training Sessions</span>
                                </li>
                                <li class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary mr-3">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                    <span>Nutrition Consultation</span>
                                </li>
                            </ul>
                            <button class="w-full py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors duration-300 membership-select" data-plan="ultimate">
                                Select Plan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Testimonials Section -->
        <section id="testimonials" class="py-20 bg-white dark:bg-gray-800">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-extrabold mb-6">
                        <span class="text-gray-900 dark:text-white">Success</span>
                        <span class="gradient-text"> Stories</span>
                    </h2>
                    <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Hear from our members who transformed their lives with Apex Fitness
                    </p>
                </div>
                <!-- Testimonials Carousel -->
                <div id="testimonialsCarousel" class="relative max-w-4xl mx-auto">
                    <div class="testimonial-item active">
                        <div class="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
                            <div class="flex items-center mb-6">
                                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                                     alt="Sarah Johnson" 
                                     class="w-16 h-16 rounded-full object-cover mr-4">
                                <div>
                                    <h4 class="font-bold text-gray-900 dark:text-white">Sarah Johnson</h4>
                                    <p class="text-primary">Lost 30lbs in 4 months</p>
                                </div>
                            </div>
                            <p class="text-gray-600 dark:text-gray-400 italic text-lg">
                                "Apex Fitness changed my life. The supportive community and expert trainers helped me achieve goals I never thought possible. The premium facilities and personalized attention are worth every penny!"
                            </p>
                            <div class="flex mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" class="text-yellow-400">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" class="text-yellow-400">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" class="text-yellow-400">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" class="text-yellow-400">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" class="text-yellow-400">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item hidden">
                        <!-- Additional testimonial items would go here -->
                    </div>
                    <!-- Testimonial Controls -->
                    <button class="testimonial-control prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m15 18-6-6 6-6"/>
                        </svg>
                    </button>
                    <button class="testimonial-control next absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6"/>
                        </svg>
                    </button>
                </div>
                <!-- Trust Indicators -->
                <div class="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div class="text-3xl font-bold gradient-text mb-2">4.9/5</div>
                            <div class="text-gray-600 dark:text-gray-400">Member Rating</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold gradient-text mb-2">98%</div>
                            <div class="text-gray-600 dark:text-gray-400">Retention Rate</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold gradient-text mb-2">50+</div>
                            <div class="text-gray-600 dark:text-gray-400">Classes Weekly</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold gradient-text mb-2">24/7</div>
                            <div class="text-gray-600 dark:text-gray-400">Support</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Contact Section -->
        <section id="contact" class="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-extrabold mb-6">
                        <span class="text-gray-900 dark:text-white">Get In</span>
                        <span class="gradient-text"> Touch</span>
                    </h2>
                    <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        Ready to start your fitness journey? Contact us today for a free consultation
                    </p>
                </div>
                <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <!-- Contact Form -->
                    <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
                        <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Us a Message</h3>
                        <form id="contactForm" class="space-y-6">
                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label for="firstName" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required 
                                           class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300">
                                    <div id="error-firstName" class="text-sm text-red-500 mt-1 hidden"></div>
                                </div>
                                <div>
                                    <label for="lastName" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required 
                                           class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300">
                                    <div id="error-lastName" class="text-sm text-red-500 mt-1 hidden"></div>
                                </div>
                            </div>
                            
                            <div>
                                <label for="email" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email Address *</label>
                                <input type="email" id="email" name="email" required 
                                       class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300">
                                <div id="error-email" class="text-sm text-red-500 mt-1 hidden"></div>
                            </div>
                            
                            <div>
                                <label for="phone" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Phone Number</label>
                                <input type="tel" id="phone" name="phone" 
                                       class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300">
                            </div>
                            
                            <div>
                                <label for="message" class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Your Message *</label>
                                <textarea id="message" name="message" rows="4" required 
                                          class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition duration-300"></textarea>
                                <div id="error-message" class="text-sm text-red-500 mt-1 hidden"></div>
                            </div>
                            
                            <div>
                                <label class="flex items-center">
                                    <input type="checkbox" name="newsletter" class="rounded border-gray-300 text-primary focus:ring-primary">
                                    <span class="ml-2 text-sm text-gray-700 dark:text-gray-300">Subscribe to our newsletter for fitness tips and updates</span>
                                </label>
                            </div>
                            
                            <div id="formMessage" class="hidden p-4 rounded-xl"></div>
                            
                            <button type="submit" class="w-full btn-primary py-4 rounded-xl font-bold text-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <!-- Contact Info -->
                    <div class="space-y-8">
                        <!-- Info Cards -->
                        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
                            
                            <div class="space-y-6">
                                <div class="flex items-start">
                                    <div class="bg-primary/10 p-3 rounded-xl mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                            <circle cx="12" cy="10" r="3"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-900 dark:text-white mb-1">Visit Us</h4>
                                        <p class="text-gray-600 dark:text-gray-400">123 Fitness Avenue, Wellness District<br>Metropolis, CA 90210</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <div class="bg-primary/10 p-3 rounded-xl mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-7.53-7.53A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-900 dark:text-white mb-1">Call Us</h4>
                                        <p class="text-gray-600 dark:text-gray-400">(555) 555-APEX (2739)<br>Mon-Fri: 6am-10pm</p>
                                    </div>
                                </div>
                                
                                <div class="flex items-start">
                                    <div class="bg-primary/10 p-3 rounded-xl mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary">
                                            <rect width="20" height="16" x="2" y="4" rx="2"/>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-900 dark:text-white mb-1">Email Us</h4>
                                        <p class="text-gray-600 dark:text-gray-400">info@apexfitness.com<br>Support: support@apexfitness.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Hours -->
                        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                            <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Hours of Operation</h3>
                            
                            <div class="space-y-3">
                                <div class="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
                                    <span class="font-medium text-gray-700 dark:text-gray-300">Monday - Friday</span>
                                    <span class="font-semibold text-primary">5:00 AM - 11:00 PM</span>
                                </div>
                                <div class="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
                                    <span class="font-medium text-gray-700 dark:text-gray-300">Saturday</span>
                                    <span class="font-semibold text-primary">7:00 AM - 8:00 PM</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <span class="font-medium text-gray-700 dark:text-gray-300">Sunday</span>
                                    <span class="font-semibold text-primary">8:00 AM - 6:00 PM</span>
                                </div>
                            </div>
                            
                            <div class="mt-6 p-4 bg-primary/5 rounded-xl">
                                <p class="text-sm text-gray-600 dark:text-gray-400">
                                    <span class="font-semibold text-primary">Note:</span> 24/7 access available for Premium and Ultimate members
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- CTA Section -->
        <section class="py-20 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
                    Ready to Transform Your Life?
                </h2>
                <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Join thousands of members who have achieved their fitness goals with Apex Fitness
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#membership" class="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
                        Start Free 7-Day Trial
                    </a>
                    <a href="#contact" class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300">
                        Book a Tour
                    </a>
                </div>
            </div>
        </section>
    </main>
    <!-- Footer -->
    <footer class="bg-gray-900 dark:bg-gray-950 text-gray-400 py-12">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                <!-- Brand -->
                <div>
                    <a href="#home" class="inline-flex items-center space-x-3 mb-4">
                        <div class="bg-primary p-2 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-extrabold text-white">APEX FITNESS</h3>
                            <p class="text-xs">Peak Performance</p>
                        </div>
                    </a>
                    <p class="text-sm mb-4">
                        Elevating fitness standards since 2013. Join us in the journey to peak health and wellness.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" aria-label="Facebook" class="text-gray-400 hover:text-primary transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Instagram" class="text-gray-400 hover:text-primary transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                            </svg>
                        </a>
                        <a href="#" aria-label="Twitter" class="text-gray-400 hover:text-primary transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.6-14 11.4 2.8.2 5.6-.6 7.8-2.6.2.2.3.2 0 0 .1.2.2.3.4.4.6.4 1.2.6 1.8.6.6.1 1.2.1 1.8 0 1.2-.1 2.3-.4 3.4-1.2l-1.4-.4c-.6.3-1.3.5-2 .5-1.4 0-2.7-.4-3.8-1.2-1.2-.8-1.9-2.1-2-3.4-.6 0-1.2-.1-1.8-.3-.6-.2-1.1-.5-1.6-.9.6.1 1.2.2 1.8.2.6 0 1.2-.1 1.8-.3 1.2-.4 2.3-.9 3.4-1.8 1-.8 1.8-1.9 2.4-3.1 0 0 0 0 0 0C19.8 6.4 21.3 4.9 22 4z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <!-- Quick Links -->
                <div>
                    <h4 class="text-lg font-bold text-white mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="#home" class="hover:text-primary transition-colors duration-300">Home</a></li>
                        <li><a href="#about" class="hover:text-primary transition-colors duration-300">About Us</a></li>
                        <li><a href="#services" class="hover:text-primary transition-colors duration-300">Services</a></li>
                        <li><a href="#membership" class="hover:text-primary transition-colors duration-300">Membership</a></li>
                        <li><a href="#contact" class="hover:text-primary transition-colors duration-300">Contact</a></li>
                    </ul>
                </div>
                <!-- Programs -->
                <div>
                    <h4 class="text-lg font-bold text-white mb-4">Programs</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="hover:text-primary transition-colors duration-300">Personal Training</a></li>
                        <li><a href="#" class="hover:text-primary transition-colors duration-300">Group Fitness</a></li>
                        <li><a href="#" class="hover:text-primary transition-colors duration-300">Nutrition Coaching</a></li>
                        <li><a href="#" class="hover:text-primary transition-colors duration-300">Wellness Retreats</a></li>
                        <li><a href="#" class="hover:text-primary transition-colors duration-300">Corporate Wellness</a></li>
                    </ul>
                </div>
                <!-- Newsletter -->
                <div>
                    <h4 class="text-lg font-bold text-white mb-4">Stay Updated</h4>
                    <p class="text-sm mb-4">Subscribe for fitness tips and exclusive offers</p>
                    <form id="newsletterForm" class="space-y-2">
                        <input type="email" placeholder="Your email" 
                               class="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary focus:ring-primary transition duration-300">
                        <button type="submit" class="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div class="pt-8 border-t border-gray-800 text-center">
                <p>&copy; <span id="currentYear"></span> Apex Fitness & Wellness. All rights reserved.</p>
                <div class="mt-2 space-x-4 text-sm">
                    <a href="#" class="hover:text-primary transition-colors duration-300">Privacy Policy</a>
                    <a href="#" class="hover:text-primary transition-colors duration-300">Terms of Service</a>
                    <a href="#" class="hover:text-primary transition-colors duration-300">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>
    <script src="script.js"></script>
</body>
</html>
