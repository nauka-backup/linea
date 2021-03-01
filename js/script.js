//animate main page
import gsap from 'gsap';

gsap.fromTo(
    '#logo',
    {
        ease: 'elastic',
    },
    {
        y: -100,
        opacity: 0,
        duration: 0.8,
        delay: 5,
    }
);
gsap.fromTo(
    '.l-overlay',
    {
        ease: 'elastic',
    },
    {
        top: '-100%',
        duration: 0.4,
        delay: 4.5,
    }
);
gsap.fromTo(
    '.contact-section',
    {
        ease: 'elastic',
        opacity: 0,
    },
    {
        opacity: 1,
        duration: 1.5,
        delay: 5,
    }
);
