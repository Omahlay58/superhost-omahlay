const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const adminPanel = document.getElementById('admin-panel');
const photoGallery = document.getElementById('photo-gallery');
const musicList = document.getElementById('music-list');
const socialLinksContainer = document.querySelector('.social-links');
const heroTitle = document.querySelector('.hero-title');
const heroSubtitle = document.querySelector('.hero-subtitle');
const heroDescription = document.querySelector('.hero-description');
const heroSection = document.querySelector('.hero');
const phoneValue = document.querySelector('.contact-info .info-item:nth-child(1) p');
const whatsappValue = document.querySelector('.contact-info .info-item:nth-child(2) p');
const emailValue = document.querySelector('.contact-info .info-item:nth-child(3) p');
const locationValue = document.querySelector('.contact-info .info-item:nth-child(4) p');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

let observer;

function getQueryParam(key) {
    return new URLSearchParams(window.location.search).get(key);
}

function setupNav() {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container')) {
            navMenu.classList.remove('active');
        }
    });
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
}

function setupNavbarScroll() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(to bottom, rgba(10, 10, 10, 0.98), transparent)';
        } else {
            navbar.style.background = 'linear-gradient(to bottom, rgba(10, 10, 10, 0.95), transparent)';
        }
    });
}

function setupHeroParallax() {
    window.addEventListener('scroll', () => {
        if (heroSection) {
            const scrolled = window.pageYOffset;
            heroSection.style.backgroundPosition = `center ${scrolled * 0.5}px`;
        }
    });
}

function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        if (name && email && message) {
            alert('Thank you for your inquiry! We will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

function animateOnScroll(targets) {
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    targets.forEach(el => observer.observe(el));
}

function animateCounter(element) {
    const text = element.textContent;
    const number = parseInt(text.match(/\d+/)[0], 10);
    const duration = 1500;
    const increment = number / (duration / 16);
    let current = 0;

    const counter = setInterval(() => {
        current += increment;
        if (current >= number) {
            element.textContent = text.replace(/\d+/, number);
            clearInterval(counter);
        } else {
            element.textContent = text.replace(/\d+/, Math.floor(current));
        }
    }, 16);
}

function populateHero(data) {
    if (heroSection && data.heroImage) {
        heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(111, 29, 119, 0.3)), url('${data.heroImage}')`;
    }
    if (heroTitle) heroTitle.textContent = data.heroTitle || heroTitle.textContent;
    if (heroSubtitle) heroSubtitle.textContent = data.heroSubtitle || heroSubtitle.textContent;
    if (heroDescription) heroDescription.textContent = data.heroDescription || heroDescription.textContent;
}

function renderGallery(gallery) {
    if (!photoGallery) return;

    photoGallery.innerHTML = gallery.map(item => {
        return `
            <div class="gallery-item">
                <img src="${item.file}" alt="${item.title}">
                <div class="gallery-overlay">
                    <p>${item.title}</p>
                    <a href="${item.file}" download class="download-btn"><i class="fas fa-download"></i> Download</a>
                </div>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('mouseenter', () => item.style.transform = 'scale(1.05)');
        item.addEventListener('mouseleave', () => item.style.transform = 'scale(1)');
    });
}

function renderMusic(music) {
    if (!musicList) return;

    musicList.innerHTML = music.map(track => {
        return `
            <div class="music-card">
                <div class="music-icon">
                    <i class="fas fa-music"></i>
                </div>
                <h3>${track.title}</h3>
                <p class="artist">${track.artist}</p>
                <audio controls preload="none">
                    <source src="${track.file}" type="audio/mpeg">
                    Your browser does not support audio playback.
                </audio>
                <a href="${track.file}" download class="download-btn"><i class="fas fa-download"></i> Download</a>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.music-card').forEach(card => {
        card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-10px)');
        card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0)');
    });
}

function renderSocial(social) {
    if (!socialLinksContainer) return;

    socialLinksContainer.innerHTML = social.map(item => {
        return `
            <a href="${item.url}" target="_blank" class="social-link">
                <i class="${item.icon}"></i>
                <span>${item.label}</span>
            </a>
        `;
    }).join('');
}

function renderContact(contact) {
    if (phoneValue) {
        phoneValue.innerHTML = `<a href="tel:${contact.phone.replace(/\s+/g, '')}" style="color: inherit; text-decoration: none;">${contact.phone}</a>`;
    }
    if (whatsappValue) {
        whatsappValue.innerHTML = `<a href="${contact.whatsapp}" target="_blank" style="color: inherit; text-decoration: none;">${contact.phone}</a>`;
    }
    if (emailValue) {
        emailValue.innerHTML = `<a href="mailto:${contact.email}" style="color: inherit; text-decoration: none;">${contact.email}</a>`;
    }
    if (locationValue) {
        locationValue.textContent = contact.location;
    }
}

function showAdminPanel() {
    if (!adminPanel) return;
    adminPanel.classList.remove('hidden');
}

function formatTitle(fileName) {
    return fileName
        .replace(/\.[^/.]+$/, '')
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
}

function buildPhotoSnippet(files) {
    return files.map(file => {
        return {
            title: formatTitle(file.name),
            file: `assets/photos/${file.name}`
        };
    });
}

function buildMusicSnippet(files) {
    return files.map(file => {
        return {
            title: formatTitle(file.name),
            artist: 'Omah Lay',
            file: `assets/music/${file.name}`
        };
    });
}

function initAdmin(data) {
    const photoUpload = document.getElementById('photo-upload');
    const musicUpload = document.getElementById('music-upload');
    const photoBtn = document.getElementById('photo-snippet-btn');
    const musicBtn = document.getElementById('music-snippet-btn');
    const copyBtn = document.getElementById('copy-json');
    const adminJson = document.getElementById('admin-json');

    if (adminJson) {
        adminJson.value = JSON.stringify(data, null, 2);
    }

    if (photoBtn && photoUpload) {
        photoBtn.addEventListener('click', () => {
            const files = Array.from(photoUpload.files);
            if (!files.length) return alert('Select at least one photo file.');
            const snippet = buildPhotoSnippet(files);
            if (adminJson) adminJson.value = JSON.stringify(snippet, null, 2);
        });
    }

    if (musicBtn && musicUpload) {
        musicBtn.addEventListener('click', () => {
            const files = Array.from(musicUpload.files);
            if (!files.length) return alert('Select at least one music file.');
            const snippet = buildMusicSnippet(files);
            if (adminJson) adminJson.value = JSON.stringify(snippet, null, 2);
        });
    }

    if (copyBtn && adminJson) {
        copyBtn.addEventListener('click', () => {
            adminJson.select();
            document.execCommand('copy');
            alert('JSON copied to clipboard. Paste it into content.json.');
        });
    }
}

async function loadContent() {
    try {
        const response = await fetch('content.json');
        if (!response.ok) throw new Error('Content file not found');
        const data = await response.json();
        populateHero(data);
        renderGallery(data.gallery);
        renderMusic(data.music);
        renderSocial(data.social);
        renderContact(data.contact);

        animateOnScroll([
            ...document.querySelectorAll('.about'),
            ...document.querySelectorAll('.gallery-item'),
            ...document.querySelectorAll('.music-card'),
            ...document.querySelectorAll('.social-link'),
            ...document.querySelectorAll('.info-item')
        ]);

        const statsSection = document.querySelector('.about-stats');
        if (statsSection) {
            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        document.querySelectorAll('.stat h3').forEach(animateCounter);
                        statsObserver.unobserve(entry.target);
                    }
                });
            });
            statsObserver.observe(statsSection);
        }

        if (getQueryParam('admin') === 'true') {
            showAdminPanel();
            initAdmin(data);
        }
    } catch (error) {
        console.error('Unable to load site content:', error);
    }
}

function initializePage() {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
    setupNav();
    setupSmoothScrolling();
    setupNavbarScroll();
    setupHeroParallax();
    setupContactForm();
    loadContent();
}

window.addEventListener('load', () => {
    initializePage();
});
