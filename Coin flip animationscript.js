// Coin flip animation
function flipCoin() {
    const coin = document.getElementById('coin');
    coin.classList.toggle('flipped');
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Gallery modal functionality
function openModal(imageId) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    
    // You would replace these with your actual image URLs
    const images = {
        'coin1': 'https://via.placeholder.com/800x800/DAA520/FFFFFF?text=Roman+Denarius',
        'bust1': 'https://via.placeholder.com/800x800/CD853F/FFFFFF?text=Imperial+Bust',
        'portrait1': 'https://via.placeholder.com/800x800/B8860B/FFFFFF?text=Royal+Portrait',
        'coin2': 'https://via.placeholder.com/800x800/DAA520/FFFFFF?text=Aureus+Gold',
        'bust2': 'https://via.placeholder.com/800x800/CD853F/FFFFFF?text=Marble+Sculpture',
        'portrait2': 'https://via.placeholder.com/800x800/B8860B/FFFFFF?text=Emperor+Regalia'
    };
    
    modal.style.display = 'block';
    modalImg.src = images[imageId];
}

// Close modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Auto-flip coin every 5 seconds
setInterval(() => {
    if (Math.random() > 0.7) {
        flipCoin();
    }
}, 5000);
