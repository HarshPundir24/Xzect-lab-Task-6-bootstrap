// JavaScript to add scrolled class on scroll down 
window.addEventListener('scroll', function() {
    var navBar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
//hero slider
    var swiper = new Swiper('.hero-slider .swiper-container', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.hero-slider_arrows__nextbtn',
            prevEl: '.hero-slider_arrows__prevbtn',
        },
    });

//top quality services
    var swiper = new Swiper('.service-section .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop:true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

//blog post
    var swiper = new Swiper('.postsection .swiper-post', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop:true,
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
    });

//clients review    
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
});

// counting
document.addEventListener('DOMContentLoaded', () => {
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
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

//brand section
var swiper2 = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
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