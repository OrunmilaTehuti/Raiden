document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sticky Navigation Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple animation switch for burger icon
        const bars = document.querySelectorAll('.bar');
        bars[0].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(-5px, 6px)' : 'none';
        bars[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        bars[2].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(-5px, -6px)' : 'none';
    });

    // Close menu when clicking a link on mobile
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 3. City Switcher / Booking Tabs Engine
    const tabs = document.querySelectorAll('.tab-btn');
    const vegasEvents = document.getElementById('vegas-events');
    const miamiEvents = document.getElementById('miami-events');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active status from all buttons
            tabs.forEach(t => t.classList.remove('active'));
            // Add active to clicked button
            tab.classList.add('active');

            // Handle content view switches
            const targetCity = tab.getAttribute('data-city');
            if (targetCity === 'vegas') {
                vegasEvents.classList.add('active');
                miamiEvents.classList.remove('active');
            } else if (targetCity === 'miami') {
                miamiEvents.classList.add('active');
                vegasEvents.classList.remove('active');
            }
        });
    });
});
