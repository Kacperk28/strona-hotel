document.addEventListener('DOMContentLoaded', () => {

    const gallery = document.querySelector('.gallery');

    if (gallery) {
        const images = gallery.querySelectorAll('img');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach(img => {
                img.classList.remove('active');
            });

            images[index].classList.add('active');
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        showImage(currentIndex);

        setInterval(nextImage, 3000);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});