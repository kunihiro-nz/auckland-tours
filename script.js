document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');

    mobileBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        // Simple animation or icon change could go here
    });

    // Close mobile nav when link is clicked
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });

    // Image Loader (Setting background images dynamically to handle external URLs easily)
    function setImage(id, url) {
        const el = document.getElementById(id);
        if (el) {
            el.style.backgroundImage = `url('${url}')`;
        }
    }

    // Using Unsplash source URLs for high quality placeholders since generation failed
    // Keywords: New Zealand, Auckland, Driving, Nature, Fishing
    const images = {
        // Hero background - City street scene seems appropriate
        'hero-bg': 'assets/シティの街並み１.jpg',

        // About/Profile - Using a nice city shot or generic until profile pic provided
        'about-img': 'assets/フェリー乗り場.jpg',

        // Fishing
        'fishing-1': 'assets/日の出.jpg',  // Sunrise seems like a good main shot
        'fishing-2': 'assets/魚.jpg',
        'fishing-3': 'assets/魚２.jpg',

        // Vehicle Images
        'prius-1': 'assets/車横.jpg',      // Side/Front view
        'prius-2': 'assets/車正面.jpg',    // Front view
        'prius-3': 'assets/車後ろ.jpg',    // Rear view
        'prius-4': 'assets/車のブート.jpg', // Trunk/Boot view

        // Gallery Images
        'gallery-1': 'assets/オークランドズーのエントランス.jpg',
        'gallery-2': 'assets/シティの街並み２.jpg',
        'gallery-3': 'assets/シティの街並み３.jpg',
        'gallery-4': 'assets/フェリー乗り場.jpg',
        'gallery-5': 'assets/シティの街並み１.jpg',

        // Extra detail image
        'boot-detail-img': 'assets/車のブート.jpg'
    };

    for (const [id, url] of Object.entries(images)) {
        setImage(id, url);
    }

    // Scroll Header effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.boxShadow = 'none';
            header.style.background = 'rgba(255, 255, 255, 0.9)';
        }
    });

    // Image Modal Logic
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.querySelector('.modal-close');

    function openModal(imgUrl) {
        modal.classList.add('active');
        modalImg.src = imgUrl;
    }

    // Attach click events to vehicle images (including boot)
    // We need to map IDs to URLs manually or grab from style background-image
    // Since background-image is set via JS, we can use the 'images' object map

    // Boot detail
    const bootDetail = document.getElementById('boot-detail-img');
    if (bootDetail) {
        bootDetail.addEventListener('click', () => {
            openModal(images['boot-detail-img']);
        });
    }

    // Vehicle gallery & Main Gallery & Special Gallery
    const clickableImages = [
        'prius-1', 'prius-2', 'prius-3', 'prius-4',
        'gallery-1', 'gallery-2', 'gallery-3', 'gallery-4', 'gallery-5',
        'fishing-1', 'fishing-2', 'fishing-3'
    ];

    clickableImages.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('click', () => {
                openModal(images[id]);
            });
        }
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});
