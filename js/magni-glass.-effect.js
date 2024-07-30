document.addEventListener("DOMContentLoaded", function() {
    const productImg = document.querySelector('.product-img');
    const img = productImg.querySelector('img');
    const magnifier = productImg.querySelector('.magnifier');

    productImg.addEventListener('mousemove', function(e) {
        const imgRect = img.getBoundingClientRect();
        const x = e.clientX - imgRect.left;
        const y = e.clientY - imgRect.top;

        if (x > 0 && x < imgRect.width && y > 0 && y < imgRect.height) {
            magnifier.style.display = 'block';
            const bgPosX = (x / imgRect.width) * 100;
            const bgPosY = (y / imgRect.height) * 100;

            magnifier.style.left = `${x}px`;
            magnifier.style.top = `${y}px`;
            magnifier.style.backgroundImage = `url(${img.src})`;
            magnifier.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
        } else {
            magnifier.style.display = 'none';
        }
    });

    productImg.addEventListener('mouseleave', function() {
        magnifier.style.display = 'none';
    });
});
