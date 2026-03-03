document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Animation (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));

    // 2. Typing effect and AI code generation simulation in Hero Section
    const typingText = document.querySelector('.typing-text');
    const aiResponse = document.querySelector('.ai-response');
    const cursor = document.querySelector('.cursor');
    
    // Original text to type out
    const textToType = '"Make a beautiful floating dashboard with a dark neon theme and smoothly animating charts."';
    typingText.textContent = ''; // Clear initial text
    
    let charIndex = 0;
    
    // Simulate natural typing with slight random delays
    function typeEffect() {
        if (charIndex < textToType.length) {
            typingText.textContent += textToType.charAt(charIndex);
            
            // Re-append cursor
            typingText.appendChild(cursor);
            
            charIndex++;
            setTimeout(typeEffect, Math.random() * 50 + 30);
        } else {
            // Typing finished, show AI response after a delay
            setTimeout(() => {
                aiResponse.classList.remove('hide');
                // Trigger CSS transition
                setTimeout(() => {
                    aiResponse.classList.add('show');
                }, 50);
            }, 800);
        }
    }

    // Start typing effect slightly after page load
    setTimeout(typeEffect, 1500);
    
    // 3. Simple Mouse Tracking for Glowing Orb (Optional Desktop Only Effect)
    const orb = document.querySelector('.glowing-orb');
    if (orb) {
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;
            
            orb.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
        });
    }
});
