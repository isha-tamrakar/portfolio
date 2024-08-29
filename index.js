// script.js

document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.display = 'none';  // Hide the current image
        currentIndex = (currentIndex + 1) % images.length;  // Move to the next index
        images[currentIndex].style.display = 'block';  // Show the next image
    }

    // Start the image rotation
    setInterval(showNextImage, 4000);
});


document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery-image2');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.display = 'none';  // Hide the current image
        currentIndex = (currentIndex + 1) % images.length;  // Move to the next index
        images[currentIndex].style.display = 'block';  // Show the next image
    }

    // Start the image rotation
    setInterval(showNextImage, 4000);
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery-image3');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.display = 'none';  // Hide the current image
        currentIndex = (currentIndex + 1) % images.length;  // Move to the next index
        images[currentIndex].style.display = 'block';  // Show the next image
    }

    // Start the image rotation
    setInterval(showNextImage, 4000);
});
