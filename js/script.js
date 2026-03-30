/* =============================================
   CM TRADING & EXPORTS — BuildUp Theme
   Chandra Mohan (Chandru) | CM Trading & Exports
   ============================================= */

//  SMOOTH SCROLL 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            if (window.innerWidth <= 992) {
                mobileNavDrawer.classList.remove('open');
                mobileNavToggle.classList.remove('open');
            }
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

//  MOBILE NAV DRAWER TOGGLE 
const mobileNavToggle = document.getElementById('mobileNavToggle');
const mobileNavDrawer = document.getElementById('mobileNavDrawer');

if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', () => {
        mobileNavToggle.classList.toggle('open');
        mobileNavDrawer.classList.toggle('open');
        document.body.style.overflow = mobileNavDrawer.classList.contains('open') ? 'hidden' : '';
    });
}
// Close drawer when clicking outside
document.addEventListener('click', (e) => {
    if (mobileNavDrawer && mobileNavDrawer.classList.contains('open') &&
        !mobileNavDrawer.contains(e.target) && !mobileNavToggle.contains(e.target)) {
        mobileNavDrawer.classList.remove('open');
        mobileNavToggle.classList.remove('open');
        document.body.style.overflow = '';
    }
});

//  ANIMATED COUNTER 
function easeOutQuart(t) { return 1 - Math.pow(1 - t, 4); }

function animateCounter(el, target, duration = 2000) {
    let startTime = null;
    function step(ts) {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / duration, 1);
        el.textContent = Math.floor(easeOutQuart(progress) * target);
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = Math.floor(target);
    }
    requestAnimationFrame(step);
}

let statsAnimated = false;

//  SCROLL REVEAL 
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), index * 55);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.06, rootMargin: '0px 0px -35px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

//  COUNTER TRIGGER 
const statsSection = document.getElementById('stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !statsAnimated) {
            statsAnimated = true;
            document.querySelectorAll('.stat-number').forEach(el => {
                const target = parseInt(el.getAttribute('data-target'));
                if (!isNaN(target)) animateCounter(el, target);
            });
            statsObserver.disconnect();
        }
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
}

//  ACTIVE NAV LINK (header + mobile drawer) 
const sections   = document.querySelectorAll('section[id]');
const headerLinks = document.querySelectorAll('.header-nav a, .mobile-nav-drawer a');
const siteHeader  = document.getElementById('siteHeader');

function updateActiveNav() {
    const scrollY = window.pageYOffset;
    let current = '';

    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 140) current = section.id;
    });

    headerLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });

    // Header scroll shadow / scrolled state
    if (siteHeader) {
        siteHeader.classList.toggle('scrolled', scrollY > 20);
    }
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

//  BACK TO TOP BUTTON 
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        backToTopBtn.classList.toggle('visible', window.pageYOffset > 600);
    }, { passive: true });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

//  TYPEWRITER / CYCLING TEXT (Carlos signature animation) 
const typedEl = document.getElementById('typed-text');
const phrases = [
  'Verified Indian Suppliers',
  'Agricultural Commodities',
  'Bulk Spice & Turmeric Deals',
  'Global Sourcing Partners',
  'Direct Farm-to-Port Export',
];
let phraseIdx = 0, charIdx = 0, isDeleting = false;

function typeLoop() {
  const current = phrases[phraseIdx];
  if (!typedEl) return;

  if (isDeleting) {
    typedEl.textContent = current.slice(0, charIdx - 1);
    charIdx--;
  } else {
    typedEl.textContent = current.slice(0, charIdx + 1);
    charIdx++;
  }

  let delay = isDeleting ? 45 : 90;

  if (!isDeleting && charIdx === current.length) {
    delay = 1800;          // pause at end
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    phraseIdx = (phraseIdx + 1) % phrases.length;
    delay = 400;           // pause before next phrase
  }

  setTimeout(typeLoop, delay);
}

if (typedEl) setTimeout(typeLoop, 800);  // small start delay

//  PRODUCT CATEGORY ACCORDION
const prodCatCards = document.querySelectorAll('.prod-cat-card');

prodCatCards.forEach(card => {
    const banner = card.querySelector('.prod-cat-banner');
    if (!banner) return;
    banner.addEventListener('click', () => {
        const isActive = card.classList.contains('active');
        // Close all
        prodCatCards.forEach(c => c.classList.remove('active'));
        // Open clicked (toggle off if it was already active)
        if (!isActive) card.classList.add('active');
    });
});

//  SERVICE CARDS: Click to activate highlight 
const serviceItems = document.querySelectorAll('.service-item');
serviceItems.forEach(item => {
    item.addEventListener('click', () => {
        serviceItems.forEach(si => si.classList.remove('active-service'));
        item.classList.add('active-service');
    });
});

// ========= CONTACT FORM VALIDATION ========= 
const contactForm = document.getElementById('contactForm');
const formStatusMessage = document.getElementById('formStatusMessage');

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Phone validation regex (international format)
const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;

function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const errorEl = document.getElementById(inputId + 'Error');
    
    input.classList.add('error');
    errorEl.textContent = message;
    errorEl.classList.add('show');
}

function clearError(inputId) {
    const input = document.getElementById(inputId);
    const errorEl = document.getElementById(inputId + 'Error');
    
    input.classList.remove('error');
    errorEl.classList.remove('show');
}

function clearAllErrors() {
    const inputs = ['name', 'email', 'phone', 'subject', 'message'];
    inputs.forEach(id => clearError(id));
}

function showFormStatus(message, type) {
    formStatusMessage.textContent = message;
    formStatusMessage.className = 'form-status show ' + type;
    
    setTimeout(() => {
        formStatusMessage.classList.remove('show');
    }, 5000);
}

function validateForm() {
    clearAllErrors();
    let isValid = true;
    
    // Validate name
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        showError('name', 'Please enter your full name');
        isValid = false;
    } else if (name.length < 2) {
        showError('name', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    // Validate email
    const email = document.getElementById('email').value.trim();
    if (email === '') {
        showError('email', 'Please enter your email address');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate phone (optional but must be valid if provided)
    const phone = document.getElementById('phone').value.trim();
    if (phone !== '' && !phoneRegex.test(phone)) {
        showError('phone', 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Validate subject
    const subject = document.getElementById('subject').value;
    if (subject === '') {
        showError('subject', 'Please select a subject');
        isValid = false;
    }
    
    // Validate message
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        showError('message', 'Please enter your message');
        isValid = false;
    } else if (message.length < 10) {
        showError('message', 'Message must be at least 10 characters');
        isValid = false;
    }
    
    return isValid;
}

// Real-time validation
document.getElementById('name')?.addEventListener('blur', function() {
    const value = this.value.trim();
    if (value === '') {
        showError('name', 'Please enter your full name');
    } else if (value.length < 2) {
        showError('name', 'Name must be at least 2 characters');
    } else {
        clearError('name');
    }
});

document.getElementById('email')?.addEventListener('blur', function() {
    const value = this.value.trim();
    if (value === '') {
        showError('email', 'Please enter your email address');
    } else if (!emailRegex.test(value)) {
        showError('email', 'Please enter a valid email address');
    } else {
        clearError('email');
    }
});

document.getElementById('phone')?.addEventListener('blur', function() {
    const value = this.value.trim();
    if (value !== '' && !phoneRegex.test(value)) {
        showError('phone', 'Please enter a valid phone number');
    } else {
        clearError('phone');
    }
});

document.getElementById('subject')?.addEventListener('change', function() {
    if (this.value === '') {
        showError('subject', 'Please select a subject');
    } else {
        clearError('subject');
    }
});

document.getElementById('message')?.addEventListener('blur', function() {
    const value = this.value.trim();
    if (value === '') {
        showError('message', 'Please enter your message');
    } else if (value.length < 10) {
        showError('message', 'Message must be at least 10 characters');
    } else {
        clearError('message');
    }
});

// Form submit handler
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!validateForm()) {
            showFormStatus('Please fix the errors above and try again.', 'error');
            return;
        }
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            company: document.getElementById('company').value.trim(),
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value.trim()
        };
        
        // Disable submit button
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        // Build email body from form data
        const emailSubject = encodeURIComponent(`Inquiry: ${formData.subject} — from ${formData.name}`);
        const emailBody = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone || 'Not provided'}\n` +
            `Company: ${formData.company || 'Not provided'}\n` +
            `Subject: ${formData.subject}\n\n` +
            `Message:\n${formData.message}`
        );

        // Open mailto link
        window.location.href = `mailto:chandruselvam1012@gmail.com?subject=${emailSubject}&body=${emailBody}`;

        // Also open WhatsApp as a backup contact method
        const waMessage = encodeURIComponent(
            `Hi, I'm ${formData.name} from ${formData.company || 'N/A'}.\n` +
            `Subject: ${formData.subject}\n\n${formData.message}`
        );
        const waUrl = `https://wa.me/916369431485?text=${waMessage}`;

        // Open WhatsApp draft in a new tab as a fallback contact channel.
        window.open(waUrl, '_blank', 'noopener');

        setTimeout(() => {
            // Show success message
            showFormStatus('✓ Your email client has been opened and a WhatsApp draft is ready in a new tab.', 'success');

            // Reset form
            contactForm.reset();
            clearAllErrors();

            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }, 800);
    });
    
    // Reset button handler
    const resetBtn = contactForm.querySelector('.btn-reset');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            clearAllErrors();
            formStatusMessage.classList.remove('show');
        });
    }
}

// ========= FAQ ACCORDION ========= 
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faq => {
            faq.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// ========= COOKIE CONSENT ========= 
const cookieConsent = document.getElementById('cookieConsent');
const cookieAccept = document.getElementById('cookieAccept');
const cookieDecline = document.getElementById('cookieDecline');

function hideCookieBanner() {
    if (cookieConsent) cookieConsent.classList.remove('visible');
}

if (cookieConsent && !localStorage.getItem('cookie-consent')) {
    // Show banner after a short delay
    setTimeout(() => cookieConsent.classList.add('visible'), 2000);
}

if (cookieAccept) {
    cookieAccept.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'accepted');
        hideCookieBanner();
    });
}

if (cookieDecline) {
    cookieDecline.addEventListener('click', () => {
        localStorage.setItem('cookie-consent', 'declined');
        hideCookieBanner();
    });
}

// ========= SECTION TAB NAV (shared for product pages) =========
const sectionTabs = document.querySelectorAll('.section-tab');

if (sectionTabs.length) {
    sectionTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            sectionTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    const sectionsMap = Array.from(sectionTabs)
        .map(tab => ({
            id: (tab.getAttribute('href') || '').replace('#', ''),
            tab
        }))
        .filter(item => item.id);

    if (sectionsMap.length) {
        const updateActiveSectionTab = () => {
            const scrollY = window.pageYOffset + 160;

            sectionsMap.forEach(({ id, tab }) => {
                const el = document.getElementById(id);
                if (el && scrollY >= el.offsetTop) {
                    sectionsMap.forEach(s => s.tab.classList.remove('active'));
                    tab.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', updateActiveSectionTab, { passive: true });
        updateActiveSectionTab();
    }
}

// ========= PRODUCT ITEM FEATURE MODAL =========
const productItems = document.querySelectorAll('.gallery-item, .pp-gallery-item, .pp-variety-card');

if (productItems.length) {
    const modal = document.createElement('div');
    modal.className = 'feature-modal';
    modal.innerHTML = `
        <div class="feature-modal-backdrop" data-modal-close="true"></div>
        <div class="feature-modal-card" role="dialog" aria-modal="true" aria-labelledby="featureModalTitle">
            <div class="feature-modal-head">
                <div class="feature-modal-title-wrap">
                    <span class="feature-modal-eyebrow" id="featureModalCategory">Product Detail</span>
                    <h3 id="featureModalTitle">Product Features</h3>
                </div>
                <button class="feature-modal-close" aria-label="Close features modal" data-modal-close="true">&times;</button>
            </div>
            <div class="feature-modal-body">
                <div class="feature-modal-layout">
                    <div class="feature-modal-side">
                        <div class="feature-modal-image-wrap" id="featureModalImageWrap"></div>
                        <div class="feature-modal-meta-grid" id="featureModalMeta"></div>
                        <div class="feature-modal-chips" id="featureModalChips"></div>
                    </div>
                    <div class="feature-modal-right">
                        <div class="feature-modal-section">
                            <h4 class="feature-modal-section-title">Overview</h4>
                            <p class="feature-modal-sub" id="featureModalSummary">Key features for the selected product item.</p>
                        </div>
                        <div class="feature-modal-section">
                            <h4 class="feature-modal-section-title">Key Highlights</h4>
                            <ul class="feature-modal-list" id="featureModalHighlights"></ul>
                        </div>
                        <div class="feature-modal-section">
                            <h4 class="feature-modal-section-title">Technical Snapshot</h4>
                            <div class="feature-modal-specs" id="featureModalSpecs"></div>
                        </div>
                        <div class="feature-modal-section">
                            <h4 class="feature-modal-section-title">Recommended Applications</h4>
                            <ul class="feature-modal-list" id="featureModalApplications"></ul>
                        </div>
                        <div class="feature-modal-actions">
                            <a id="featureModalQuote" href="https://wa.me/916369431485" target="_blank" rel="noopener" class="feature-modal-action feature-modal-action-primary">
                                <i class="fab fa-whatsapp"></i> Request Quote
                            </a>
                            <a id="featureModalEnquiry" href="#contact" class="feature-modal-action feature-modal-action-secondary">
                                <i class="fas fa-envelope"></i> Send Enquiry
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const modalTitle = modal.querySelector('#featureModalTitle');
    const modalCategory = modal.querySelector('#featureModalCategory');
    const modalSummary = modal.querySelector('#featureModalSummary');
    const modalChips = modal.querySelector('#featureModalChips');
    const modalMeta = modal.querySelector('#featureModalMeta');
    const modalImageWrap = modal.querySelector('#featureModalImageWrap');
    const modalHighlights = modal.querySelector('#featureModalHighlights');
    const modalSpecs = modal.querySelector('#featureModalSpecs');
    const modalApplications = modal.querySelector('#featureModalApplications');
    const modalQuote = modal.querySelector('#featureModalQuote');
    const modalEnquiry = modal.querySelector('#featureModalEnquiry');

    const buildList = (targetEl, items) => {
        targetEl.innerHTML = '';
        items.forEach(text => {
            const li = document.createElement('li');
            li.textContent = text;
            targetEl.appendChild(li);
        });
    };

    const buildSpecs = (targetEl, specs) => {
        targetEl.innerHTML = '';
        specs.forEach(spec => {
            const div = document.createElement('div');
            div.className = 'feature-modal-spec';
            div.innerHTML = `<span>${spec.label}</span><strong>${spec.value}</strong>`;
            targetEl.appendChild(div);
        });
    };

    const buildMeta = (targetEl, detail) => {
        targetEl.innerHTML = '';
        const metaItems = [
            { label: 'Category', value: detail.category },
            { label: 'Type', value: detail.itemType },
            { label: 'Availability', value: 'Bulk / Export Ready' },
            { label: 'Support', value: 'Sourcing + Logistics' }
        ];

        metaItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'feature-modal-meta-item';
            div.innerHTML = `<span>${item.label}</span><strong>${item.value}</strong>`;
            targetEl.appendChild(div);
        });
    };

    const ensureHighlights = (features, title, summary) => {
        const clean = features.filter(Boolean).slice(0, 8);
        if (clean.length >= 3) return clean;

        const fallback = [
            summary,
            `${title} is available for export orders with quality-focused sourcing support.`,
            'Custom packaging, branding, and bulk quantity options can be arranged.',
            'Documentation and shipment coordination support are available end-to-end.'
        ];

        fallback.forEach(text => {
            if (text && !clean.includes(text)) clean.push(text);
        });

        return clean.slice(0, 5);
    };

    const ensureApplications = (detail) => {
        const fromText = [];

        detail.highlights.forEach(text => {
            if (/best for|ideal for|applications?/i.test(text)) {
                fromText.push(text.replace(/^best for:\s*/i, '').replace(/^ideal for:\s*/i, ''));
            }
        });

        if (fromText.length) {
            return fromText.slice(0, 4);
        }

        return [
            `Commercial sourcing and distribution of ${detail.title.toLowerCase()}.`,
            'Private-label and custom-packaging export requirements.',
            'Recurring B2B procurement with quality and documentation support.'
        ];
    };

    const getDetailSpecs = (item, detail) => {
        const specs = [];

        item.querySelectorAll('.pp-spec-tag').forEach(tag => {
            const text = tag.textContent.trim();
            if (text) {
                specs.push({ label: 'Variant', value: text });
            }
        });

        const section = item.closest('.product-section, .pp-section, .pp-body, .product-content');
        if (section) {
            section.querySelectorAll('.spec-item').forEach(specItem => {
                const labelEl = specItem.querySelector('h4');
                const valueEl = specItem.querySelector('p');
                if (labelEl && valueEl) {
                    const label = labelEl.textContent.trim();
                    const value = valueEl.textContent.trim();
                    if (label && value) specs.push({ label, value });
                }
            });
        }

        if (!specs.length) {
            specs.push({ label: 'Product', value: detail.title });
            specs.push({ label: 'Service', value: 'Export-ready sourcing' });
            specs.push({ label: 'Packaging', value: 'Custom options available' });
            specs.push({ label: 'Support', value: 'Documentation assistance' });
        }

        return specs.slice(0, 6);
    };

    const openFeatureModal = (detail) => {
        modalTitle.textContent = detail.title;
        modalCategory.textContent = detail.category;
        modalSummary.textContent = detail.summary;

        modalImageWrap.innerHTML = '';
        if (detail.imageSrc) {
            const img = document.createElement('img');
            img.className = 'feature-modal-image';
            img.src = detail.imageSrc;
            img.alt = detail.imageAlt || detail.title;
            img.loading = 'lazy';
            modalImageWrap.appendChild(img);
        }

        modalChips.innerHTML = '';
        detail.chips.forEach(chipText => {
            const chip = document.createElement('span');
            chip.className = 'feature-modal-chip';
            chip.textContent = chipText;
            modalChips.appendChild(chip);
        });

        buildMeta(modalMeta, detail);
        buildList(modalHighlights, ensureHighlights(detail.highlights, detail.title, detail.summary));
        buildSpecs(modalSpecs, detail.specs);
        buildList(modalApplications, ensureApplications(detail));

        const quoteMsg = encodeURIComponent(`Hi, I am interested in ${detail.title}. Please share pricing, MOQ, and lead time.`);
        modalQuote.href = `https://wa.me/916369431485?text=${quoteMsg}`;

        const isInPages = window.location.pathname.includes('/pages/');
        modalEnquiry.href = isInPages ? '../index.html#contact' : '#contact';

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeFeatureModal = () => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    };

    const extractDetail = (item) => {
        const titleEl = item.querySelector('.gallery-caption h3, .pp-gallery-caption h4, .pp-variety-head h3');
        const title = (titleEl ? titleEl.textContent : 'Product Item').trim().replace(/\s+/g, ' ');
        const summaryEl = item.querySelector('.gallery-caption p, .pp-gallery-caption p, .pp-variety-head p');
        const summary = summaryEl
            ? summaryEl.textContent.trim().replace(/\s+/g, ' ')
            : `${title} from CM Trading & Exports with reliable quality and export support.`;

        const imageEl = item.querySelector('img');
        const imageSrc = imageEl ? imageEl.getAttribute('src') || '' : '';
        const imageAlt = imageEl ? imageEl.getAttribute('alt') || title : title;

        const featureSet = new Set();

        item.querySelectorAll('.pp-variety-list li').forEach(li => {
            const text = li.textContent.trim().replace(/\s+/g, ' ');
            if (text) featureSet.add(text);
        });

        if (summary) {
            featureSet.add(summary);
        }

        const tags = Array.from(item.querySelectorAll('.pp-spec-tag')).map(tag => tag.textContent.trim()).filter(Boolean);
        if (tags.length) {
            featureSet.add(`Available variants: ${tags.join(', ')}`);
        }

        const chips = [];
        if (item.classList.contains('pp-variety-card')) chips.push('Variety');
        if (item.classList.contains('gallery-item')) chips.push('Gallery Item');
        if (item.classList.contains('pp-gallery-item')) chips.push('Gallery Product');
        if (tags.length) chips.push(`${tags.length}+ Variants`);
        chips.push('Export Ready');

        const itemType = item.classList.contains('pp-variety-card') ? 'Catalog Variety' : 'Gallery Product';

        let category = 'Product Detail';
        const containerSection = item.closest('.product-section, .pp-section');
        const sectionTitle = containerSection ? containerSection.querySelector('h2, .gallery-title') : null;
        if (sectionTitle) {
            category = sectionTitle.textContent.trim().replace(/\s+/g, ' ');
        }

        const specs = getDetailSpecs(item, { title, category, itemType });

        return {
            title,
            summary,
            imageSrc,
            imageAlt,
            category,
            itemType,
            highlights: Array.from(featureSet),
            chips,
            specs
        };
    };

    productItems.forEach(item => {
        item.classList.add('product-item-clickable');
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');

        const titleEl = item.querySelector('.gallery-caption h3, .pp-gallery-caption h4, .pp-variety-head h3');
        const title = titleEl ? titleEl.textContent.trim() : 'Product Item';
        item.setAttribute('aria-label', `Open features for ${title}`);

        const onOpen = () => openFeatureModal(extractDetail(item));

        item.addEventListener('click', onOpen);
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpen();
            }
        });
    });

    modal.addEventListener('click', (e) => {
        const target = e.target;
        if (target instanceof HTMLElement && target.dataset.modalClose === 'true') {
            closeFeatureModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeFeatureModal();
        }
    });
}
