document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // THEME TOGGLE (Light / Dark Mode)
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference, otherwise default to dark-theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    
    if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('portfolio-theme', 'dark');
            showToast('Switched to Dark Mode', 'success');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('portfolio-theme', 'light');
            showToast('Switched to Light Mode', 'success');
        }
    });

    // ==========================================================================
    // MOBILE NAVIGATION MENU
    // ==========================================================================
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Open/Close Mobile Menu
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close Mobile Menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // ==========================================================================
    // HEADER SCROLL ACTION (Add shadow & shrink padding)
    // ==========================================================================
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ==========================================================================
    // SCROLL-SPY (Highlight active nav link based on scroll position)
    // ==========================================================================
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // Offset for header height
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // REVEAL ANIMATION ON SCROLL (IntersectionObserver)
    // ==========================================================================
    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left, .fade-in-right');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(element => {
        revealOnScroll.observe(element);
    });

    // ==========================================================================
    // PROJECTS & CASE STUDIES TAB FILTER
    // ==========================================================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const workCards = document.querySelectorAll('.work-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            workCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || filterValue === category) {
                    // Show item with animation
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // Hide item with animation
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ==========================================================================
    // CERTIFICATIONS LIVE SEARCH & TAB FILTER
    // ==========================================================================
    const certSearchInput = document.getElementById('cert-search');
    const certTabButtons = document.querySelectorAll('.cert-tab-btn');
    const certCards = document.querySelectorAll('.cert-card');
    const certGrid = document.getElementById('cert-grid');

    // Create a "No Results" message placeholder if not exists
    let noResultsMsg = document.getElementById('no-certs-msg');
    if (!noResultsMsg) {
        noResultsMsg = document.createElement('div');
        noResultsMsg.id = 'no-certs-msg';
        noResultsMsg.style.gridColumn = '1 / -1';
        noResultsMsg.style.textAlign = 'center';
        noResultsMsg.style.padding = '40px 0';
        noResultsMsg.style.color = 'var(--text-muted)';
        noResultsMsg.style.fontFamily = 'var(--font-display)';
        noResultsMsg.style.fontWeight = '600';
        noResultsMsg.innerHTML = '<span style="font-size: 2rem; display: block; margin-bottom: 10px;">🔍</span> No certifications match your criteria.';
        noResultsMsg.style.display = 'none';
        certGrid.appendChild(noResultsMsg);
    }

    let activeCertFilter = 'all';
    let searchQuery = '';

    // Handle Category Filter click
    certTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            certTabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            activeCertFilter = button.getAttribute('data-cert-filter');
            applyCertFilters();
        });
    });

    // Handle Search input keyup
    certSearchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        applyCertFilters();
    });

    function applyCertFilters() {
        let visibleCount = 0;

        certCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const title = card.querySelector('h3').textContent.toLowerCase();
            const issuer = card.querySelector('.cert-issuer').textContent.toLowerCase();
            
            const matchesCategory = (activeCertFilter === 'all' || activeCertFilter === category);
            const matchesSearch = (title.includes(searchQuery) || issuer.includes(searchQuery));

            if (matchesCategory && matchesSearch) {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 50);
                visibleCount++;
            } else {
                card.style.opacity = '0';
                card.style.display = 'none';
            }
        });

        // Toggle "No Results" message
        if (visibleCount === 0) {
            noResultsMsg.style.display = 'block';
        } else {
            noResultsMsg.style.display = 'none';
        }
    }

    // ==========================================================================
    // CREATIVE GALLERY LIGHTBOX MODAL
    // ==========================================================================
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const lightboxClose = document.getElementById('lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const image = item.querySelector('.gallery-img');
        const overlay = item.querySelector('.gallery-overlay');
        const titleText = overlay.querySelector('h4').textContent;
        const descText = overlay.querySelector('p').textContent;
        const triggerBtn = item.querySelector('.btn-lightbox');

        // Open Lightbox when clicking the expand button or the card overlay
        const openLightbox = (e) => {
            e.stopPropagation();
            lightboxImg.src = image.src;
            lightboxImg.alt = image.alt;
            lightboxTitle.textContent = titleText;
            lightboxDesc.textContent = descText;
            
            lightboxModal.classList.add('active');
            lightboxModal.setAttribute('aria-hidden', 'false');
            body.style.overflow = 'hidden'; // Disable page scrolling
        };

        triggerBtn.addEventListener('click', openLightbox);
        overlay.addEventListener('click', openLightbox);
    });

    // Close Lightbox
    const closeLightbox = () => {
        lightboxModal.classList.remove('active');
        lightboxModal.setAttribute('aria-hidden', 'true');
        body.style.overflow = ''; // Re-enable page scrolling
        setTimeout(() => {
            lightboxImg.src = '';
        }, 300); // Clear source after animation ends
    };

    lightboxClose.addEventListener('click', closeLightbox);
    
    // Close when clicking outside the content area
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });

    // Close on Escape Key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
            closeLightbox();
        }
    });

    // ==========================================================================
    // CONTACT FORM HANDLER WITH CUSTOM TOAST FEEDBACK
    // ==========================================================================
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get Form Values
        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;
        const subject = document.getElementById('form-subject').value;
        const message = document.getElementById('form-message').value;

        // Perform simple validation check
        if (name && email && subject && message) {
            // Simulate API transmission / mailto launch
            console.log('Sending message:', { name, email, subject, message });

            // Display success feedback to user
            showToast(`Thank you, ${name}! Your message has been sent successfully.`, 'success');
            
            // Optional: trigger mailto dynamically
            // window.location.href = `mailto:aswinbinu@zohomail.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;

            // Reset Form Fields
            contactForm.reset();
            
            // Remove floating labels state by triggering input resets
            const inputs = contactForm.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.blur();
            });
        } else {
            showToast('Please fill out all fields before submitting.', 'error');
        }
    });

    // ==========================================================================
    // CUSTOM TOAST NOTIFICATION UTILITY
    // ==========================================================================
    function showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        
        // Create Toast element
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        // Dynamic icons depending on toast type
        let iconSvg = '';
        if (type === 'success') {
            iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        } else {
            iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
        }

        toast.innerHTML = `
            ${iconSvg}
            <span>${message}</span>
        `;
        
        container.appendChild(toast);

        // Remove toast after 4 seconds
        setTimeout(() => {
            toast.style.animation = 'slideIn 0.3s ease reverse forwards';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 4000);
    }
});
