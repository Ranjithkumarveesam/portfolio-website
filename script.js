// Project data
const projects = [
    {
        name: 'Multifunctional Smart Street Lamp',
        description: 'Advanced highway smart street pole integrating Savonius wind turbine, solar panels, dynamo, air purifier, 360° WiFi/5G cameras, accident/speed detection, drone integration for rescue operations, and real-time emergency alerts. A comprehensive solution for highway safety and renewable energy generation.',
        language: 'Python',
        url: 'https://github.com/Smart-chinnodu/multifunctional-smart-street-lamp',
        color: '#3776ab'
    },
    {
        name: 'Smart Bio-Sensing Seatbelt',
        description: 'Innovative smart seatbelt system with integrated health monitoring sensors, Brain-Computer Interface (BCI) technology, and emergency vehicle control. Prevents road accidents caused by driver fatigue and sudden health issues through real-time monitoring and automated safety responses.',
        language: 'C++',
        url: 'https://github.com/Smart-chinnodu/smart-bio-sensing-seatbelt',
        color: '#00599c'
    },
    {
        name: 'Quantum Leaf Energy Tree',
        description: 'Revolutionary energy-generating wind tree featuring quantum leaf air-purification technology. IoT-enabled renewable energy solution designed for urban environments, combining aesthetic design with sustainable power generation and air quality improvement.',
        language: 'IoT',
        url: 'https://github.com/Smart-chinnodu/quantum-leaf-energy-tree',
        color: '#10b981'
    },
    {
        name: 'Smart Robotic Dustbin',
        description: 'Professional robot-shaped smart dustbin with auto-opening lid, intelligent waste sorting (wet/dry/paper/plastic), eco-reward system with paper-seeded chocolates, sanitizer dispenser, daily motivational quotes, expressive LED display, and voice interaction capabilities.',
        language: 'C++',
        url: 'https://github.com/Smart-chinnodu/smart-robotic-dustbin',
        color: '#00599c'
    },
    {
        name: 'GitHub Profile',
        description: 'My GitHub profile README showcasing my journey as an IoT engineer and electrical engineering student. Explore my complete collection of innovative projects, technical skills, and contributions to smart infrastructure development.',
        language: 'Markdown',
        url: 'https://github.com/Smart-chinnodu/Smart-chinnodu',
        color: '#083fa1'
    }
];

// Load projects dynamically
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-header">
                <h3>${project.name}</h3>
                <span class="project-language" style="background: ${project.color}33; color: ${project.color};">
                    <i class="fas fa-circle" style="font-size: 0.6rem;"></i> ${project.language}
                </span>
            </div>
            <div class="project-body">
                <p class="project-description">${project.description}</p>
            </div>
            <div class="project-footer">
                <a href="${project.url}" target="_blank" class="project-link">
                    View Project <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        
        // Animate burger
        burger.classList.toggle('toggle');
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('toggle');
        });
    });
}

// Smooth scrolling for navigation links
function setupSmoothScroll() {
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
}

// Scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    setupMobileMenu();
    setupSmoothScroll();
    
    // Setup scroll animations after projects are loaded
    setTimeout(setupScrollAnimations, 100);
});

// Add active state to navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});