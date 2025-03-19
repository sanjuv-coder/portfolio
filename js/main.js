// Main JavaScript for Portfolio
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const themeToggle = document.getElementById('theme-toggle');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const html = document.documentElement;
    const sections = document.querySelectorAll('section');
    const skillCards = document.querySelectorAll('.skill-card');
    const projectCards = document.querySelectorAll('.project-card');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const contactForm = document.querySelector('.contact-form');
    
    // Theme Toggle
    const initTheme = () => {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            html.classList.toggle('dark', savedTheme === 'dark');
        }

        // Theme toggle handler
        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
        });
    };

    // Update theme icon based on current theme
    function updateThemeIcon(isLight) {
        themeToggle.innerHTML = isLight
            ? '<svg class="sun-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>'
            : '<svg class="moon-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>';
    }

    // Mobile Menu Toggle
    const initMobileMenu = () => {
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                mobileMenuToggle.classList.toggle('active');
                
                // Animate the hamburger icon
                const spans = mobileMenuToggle.querySelectorAll('span');
                if (mobileMenuToggle.classList.contains('active')) {
                    spans[0].style.transform = 'translateY(8px) rotate(45deg)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
                } else {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
            
            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-item').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                });
            });
        }
    };

    // Smooth scroll for navigation links
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu after clicking a link
                    navLinks.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            });
        });
    };

    // Intersection Observer for animations
    const initAnimations = () => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe sections
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(section);
        });

        // Observe skill cards with delay
        skillCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.animationDelay = `${index * 0.1}s`;
            observer.observe(card);
        });
        
        // Observe project cards with delay
        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.animationDelay = `${index * 0.1}s`;
            observer.observe(card);
        });
        
        // Observe timeline items with delay
        timelineItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.animationDelay = `${index * 0.2}s`;
            observer.observe(item);
        });
    };

    // Active section highlighting in navigation
    const initActiveNavHighlight = () => {
        const navItems = document.querySelectorAll('.nav-item');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });
            
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href') === `#${current}`) {
                    item.classList.add('active');
                }
            });
        });
    };

    // Form submission handler
    const initContactForm = () => {
        if (contactForm) {
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value
                };

                try {
                    // Here you would typically send the form data to your backend
                    // For now, we'll just show a success message
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                } catch (error) {
                    alert('Sorry, there was an error sending your message. Please try again later.');
                }
            });
        }
    };

    // Typing effect for hero section
    const initTypingEffect = () => {
        const heroTitle = document.querySelector('.gradient-text');
        if (heroTitle) {
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    heroTitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            // Start typing effect after a short delay
            setTimeout(typeWriter, 500);
        }
    };

    // Initialize all features
    const init = () => {
        initTheme();
        initMobileMenu();
        initSmoothScroll();
        initAnimations();
        initActiveNavHighlight();
        initContactForm();
        initTypingEffect();
    };

    // Run initialization
    init();
}); 