(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
      // Wait for the page to load
      window.addEventListener('load', function() {
        // Set a timeout to hide the loading screen and show the main content
        setTimeout(function() {
            document.getElementById('loading-screen').classList.add('hidden');
            document.getElementById('main-content').classList.add('visible');
        }, 1500); // Change this value to adjust how long the loading screen shows (1.5 seconds)
    });
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        animateOut: 'fadeOutLeft',
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);
//Gallery Project
document.addEventListener('DOMContentLoaded', () => {
    const galleryTrack = document.getElementById('gallery-track');
    
    // Array of different image sources
    // Using placeholder images with different dimensions to simulate different images
    const images = [
        { src: "./img/4.jpg", caption: "Image 1" },
        { src: "./img/5.jpg", caption: "Image 2" },
        { src: "./img/6.jpg", caption: "Image 3" },
        { src: "./img/7.jpg", caption: "Image 4" },
        { src: "./img/8.jpg", caption: "Image 5" },
        { src: "./img/10.jpg", caption: "Image 6" },
        { src: "./img/11.jpg", caption: "Image 7" },
        { src: "./img/12.jpg", caption: "Image 8" },
        { src: "./img/13.jpg", caption: "Image 9" },
        { src: "./img/14.jpg", caption: "Image 10" }
    ];
    
    
    // Function to create a single slide
    function createSlide(imageData) {
        const slide = document.createElement('div');
        slide.className = 'gallery-slide';
        
        // Wrapper pour l'image pour maintenir les proportions
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'image-wrapper';
        slide.appendChild(imgWrapper);
        
        const img = document.createElement('img');
        img.src = imageData.src;
        img.alt = imageData.caption;
        imgWrapper.appendChild(img);
        
        const caption = document.createElement('div');
        caption.className = 'caption';
        caption.textContent = imageData.caption;
        slide.appendChild(caption);
        
        return slide;
    }
    
    // Function to create gallery slides
    function createGallerySlides() {
        // Create original set of images
        images.forEach(image => {
            const slide = createSlide(image);
            galleryTrack.appendChild(slide);
        });
        
        // Create duplicate set for seamless scrolling
        images.forEach(image => {
            const slide = createSlide(image);
            galleryTrack.appendChild(slide);
        });
        
        // Calculate the width of the gallery track
        const slideWidth = 200; // 400px width + 10px margin (5px on each side)
        const totalSlides = images.length * 2; // Original set + duplicate set
        const trackWidth = slideWidth * totalSlides;
        
        // Set the width of the gallery track
        galleryTrack.style.width = `${trackWidth}px`;
        
        // Adjust animation to move exactly one complete set
        const style = document.createElement('style');
        style.textContent = `
            @keyframes scroll {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-${slideWidth * images.length}px);
                }
            }
            
            .gallery-track {
                animation: scroll ${images.length * 3}s linear infinite;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize the gallery
    createGallerySlides();
    
    // Pause animation on hover
    galleryTrack.addEventListener('mouseenter', () => {
        galleryTrack.style.animationPlayState = 'paused';
    });
    
    galleryTrack.addEventListener('mouseleave', () => {
        galleryTrack.style.animationPlayState = 'running';
    });
});
// gallery project 1
document.addEventListener('DOMContentLoaded', () => {
    const galleryT = document.getElementById('gallery-t');
    
    // Array of different image sources
    // Using placeholder images with different dimensions to simulate different images
    const images = [
        { src: "./img/17.jpg", caption: "Image 1" },
        { src: "./img/18.jpg", caption: "Image 2" },
        { src: "./img/19.jpg", caption: "Image 3" },
        { src: "./img/20.jpg", caption: "Image 4" },
        { src: "./img/21.jpg", caption: "Image 5" },
        { src: "./img/22.jpg", caption: "Image 6" },
        { src: "./img/23.jpg", caption: "Image 7" },
        { src: "./img/24.jpg", caption: "Image 8" },
        { src: "./img/25.jpg", caption: "Image 9" },
        { src: "./img/26.jpg", caption: "Image 10" },
        { src: "./img/27.jpg", caption: "Image 10" },
        { src: "./img/28.jpg", caption: "Image 10" },
        { src: "./img/29.jpg", caption: "Image 10" },
        { src: "./img/30.jpg", caption: "Image 10" },
        { src: "./img/31.jpg", caption: "Image 10" },
        { src: "./img/32.jpg", caption: "Image 10" },
        { src: "./img/33.jpg", caption: "Image 10" },
        { src: "./img/34.jpg", caption: "Image 10" },
        { src: "./img/35.jpg", caption: "Image 10" },
        { src: "./img/36.jpg", caption: "Image 10" },
        { src: "./img/37.jpg", caption: "Image 10" },
        { src: "./img/38.jpg", caption: "Image 10" },
        { src: "./img/39.jpg", caption: "Image 10" },
        { src: "./img/40.jpg", caption: "Image 10" },
        { src: "./img/41.jpg", caption: "Image 10" },
        { src: "./img/42.jpg", caption: "Image 10" },
        { src: "./img/43.jpg", caption: "Image 10" },
        { src: "./img/44.jpg", caption: "Image 10" },
        { src: "./img/45.jpg", caption: "Image 10" },
        { src: "./img/46.jpg", caption: "Image 10" },
        { src: "./img/47.jpg", caption: "Image 10" },
        { src: "./img/48.jpg", caption: "Image 10" },
        { src: "./img/49.jpg", caption: "Image 10" },
        { src: "./img/50.jpg", caption: "Image 10" },
        { src: "./img/51.jpg", caption: "Image 10" },
        { src: "./img/52.jpg", caption: "Image 10" },
        { src: "./img/53.jpg", caption: "Image 10" },
        { src: "./img/54.jpg", caption: "Image 10" },
        { src: "./img/55.jpg", caption: "Image 10" },
        { src: "./img/56.jpg", caption: "Image 10" },
    ];
    
    
    // Function to create a single slide
    function createSlide(imageData) {
        const slide = document.createElement('div');
        slide.className = 'gallery-slide';
        
        // Wrapper pour l'image pour maintenir les proportions
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'image-wrapper';
        slide.appendChild(imgWrapper);
        
        const img = document.createElement('img');
        img.src = imageData.src;
        img.alt = imageData.caption;
        imgWrapper.appendChild(img);
        
        const caption = document.createElement('div');
        caption.className = 'caption';
        caption.textContent = imageData.caption;
        slide.appendChild(caption);
        
        return slide;
    }
    
    // Function to create gallery slides
    function createGallerySlides() {
        // Create original set of images
        images.forEach(image => {
            const slide = createSlide(image);
            galleryT.appendChild(slide);
        });
        
        // Create duplicate set for seamless scrolling
        images.forEach(image => {
            const slide = createSlide(image);
            galleryT.appendChild(slide);
        });
        
        // Calculate the width of the gallery t
        const slideWidth = 200; // 400px width + 10px margin (5px on each side)
        const totalSlides = images.length * 2; // Original set + duplicate set
        const trackWidth = slideWidth * totalSlides;
        
        // Set the width of the gallery track
        galleryTrack.style.width = `${trackWidth}px`;
        
        // Adjust animation to move exactly one complete set
        const style = document.createElement('style');
        style.textContent = `
            @keyframes scroll {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-${slideWidth * images.length}px);
                }
            }
            
            .gallery-t {
                animation: scroll ${images.length * 3}s linear infinite;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Initialize the gallery
    createGallerySlides();
    
    // Pause animation on hover
    galleryTrack.addEventListener('mouseenter', () => {
        galleryTrack.style.animationPlayState = 'paused';
    });
    
    galleryTrack.addEventListener('mouseleave', () => {
        galleryTrack.style.animationPlayState = 'running';
    });
});
// services
 // Animation of cards on scroll
 document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.service-card');
    
    function checkScroll() {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.9) {
                card.style.animationPlayState = 'running';
            }
        });
    }
    
    // Initialization
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);
});
