// menubar for small screen
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');
    const navItems = document.querySelectorAll('.navigation nav ul li');

    menuToggle.addEventListener('click', () => {
        navigation.classList.toggle('active');
    });
    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {  
                item.classList.toggle('open');
            }
        });
    });
    document.addEventListener('click', (event) => {
        if (!menuToggle.contains(event.target) && !navigation.contains(event.target)) {
            navigation.classList.remove('active');
        }
    });
});

// JavaScript to add scrolled class on scroll down 
window.addEventListener('scroll', function() {
    var navBar = document.querySelector('.nav-bar');
    if (window.scrollY > 0) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});

//sliders
document.addEventListener('DOMContentLoaded', function () {
    // Feature slider code
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    const featureImages = document.querySelector('.slider-images');
    let index1 = 0;
    let cardsToShow = 1;
    const mediaQueryMobile = window.matchMedia('(max-width: 600px)');
    const mediaQueryTablet = window.matchMedia('(min-width: 601px) and (max-width: 1024px)');
    const mediaQueryDesktop = window.matchMedia('(min-width: 1025px)');

    function updateCardsToShow() {
    if (mediaQueryMobile.matches) {
        cardsToShow = 1;
    } else if (mediaQueryTablet.matches) {
        cardsToShow = 2;
    } else if (mediaQueryDesktop.matches) {
        cardsToShow = 3;
    }
    updateFeatureSlider();
    }
    function updateFeatureSlider() {
    const cardWidth = document.querySelector('.slider-card').offsetWidth + 50;
    featureImages.style.transform = `translateX(${-index1 * cardWidth}px)`;
    }
    prevButton.addEventListener('click', () => {
    if (index1 > 0) {
        index1--;
        updateFeatureSlider();
    }
    });
    nextButton.addEventListener('click', () => {
    const totalCards = document.querySelectorAll('.slider-card').length;
    const maxIndex = totalCards - cardsToShow;
    if (index1 < maxIndex) {
        index1++;
        updateFeatureSlider();
    }
    });

   mediaQueryMobile.addEventListener('change', updateCardsToShow);
   mediaQueryTablet.addEventListener('change', updateCardsToShow);
   mediaQueryDesktop.addEventListener('change', updateCardsToShow);

   updateCardsToShow();
   window.addEventListener('resize', updateFeatureSlider);


    // Review slider code
    let currentIndex = 0;
    const reviews = document.querySelectorAll('.review');
    const totalReviews = reviews.length;

    function showReview(index2) {
        reviews.forEach((review, i) => {
            review.classList.toggle('active', i === index2);
        });
    }
    document.querySelector('.prev').addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalReviews - 1;
        showReview(currentIndex);
    });
    document.querySelector('.next').addEventListener('click', function () {
        currentIndex = (currentIndex < totalReviews - 1) ? currentIndex + 1 : 0;
        showReview(currentIndex);
    });
    showReview(currentIndex);

    // blog slider code
    const prevBtn = document.querySelector('.prevbtn');
    const nextBtn = document.querySelector('.nextbtn');
    const track = document.querySelector('.swiper-post');
    const items = document.querySelectorAll('.slide');
    const itemCount = items.length;
    let index = 0;
    const itemWidth = items[0].getBoundingClientRect().width+20;
    track.style.width = `${itemCount * itemWidth}px`;

    prevBtn.addEventListener('click', () => {
        index = Math.max(index - 1, 0);
        updateMainSlider();
    });
    nextBtn.addEventListener('click', () => {
        index = Math.min(index + 1, itemCount - 1);
        updateMainSlider();
    });
    function updateMainSlider() {
        const translateX = -index * itemWidth;
        track.style.transform = `translateX(${translateX}px)`;
    }
});

// JS for hero slider
document.addEventListener('DOMContentLoaded', function () {      
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1, 
        loop: true,  
        navigation: {
            nextEl: '.hero-slider_arrows__nextbtn',
            prevEl: '.hero-slider_arrows__prevbtn',
        },
    });
});
    
// JS for Counting
    document.addEventListener('DOMContentLoaded', () => {
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            console.log('Viewport Check:', el, rect);
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        function formatNumberWithCommas(number) {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        function countUp(el) {
            const countTo = parseInt(el.getAttribute('data-count').replace(/,/g, ''), 10);
            console.log('Counting to:', countTo);
            const duration = 1000; 
            const frameRate = 1000 / 60; 
            const totalFrames = Math.round(duration / frameRate);
            let frame = 0;
            const count = () => {
                frame++;
                const progress = frame / totalFrames;
                const currentCount = Math.round(countTo * progress);
                el.textContent = formatNumberWithCommas(currentCount);
                if (frame < totalFrames) {
                    requestAnimationFrame(count);
                } else {
                    el.textContent = formatNumberWithCommas(countTo) + "+";
                }
            };
            count();
        }
        function handleScroll() {
            const counters = document.querySelectorAll('.counterup__number');
            counters.forEach(counter => {
                if (isElementInViewport(counter) && !counter.classList.contains('counted')) {
                    countUp(counter);
                    counter.classList.add('counted');
                }
            });
        }
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    });
      
//JS for back to top
    document.addEventListener('scroll', function() {
        const backToTopButton = document.getElementById('back-to-top');
        if (window.scrollY > 200) {  
            backToTopButton.style.opacity = 1;
            backToTopButton.style.transform = 'scale(1)';
        } else {
            backToTopButton.style.opacity = 0;
            backToTopButton.style.transform = 'scale(0.8)';
        }
    });
    document.getElementById('back-to-top').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
      