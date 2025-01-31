const contentRight = document.querySelector('.content-right');
let targetScrollLeft = 0;
let isScrolling = false;

contentRight.addEventListener('wheel', (e) => {
    e.preventDefault(); // Prevent default vertical scrolling
    targetScrollLeft += e.deltaY; // Use vertical scroll input to control horizontal scrolling

    // Ensure targetScrollLeft stays within valid boundaries
    targetScrollLeft = Math.max(0, Math.min(targetScrollLeft, contentRight.scrollWidth - contentRight.clientWidth));

    if (!isScrolling) smoothScroll();
});

function smoothScroll() {
    isScrolling = true;
    const currentScrollLeft = contentRight.scrollLeft;
    const distance = targetScrollLeft - currentScrollLeft;

    if (Math.abs(distance) > 1) {
        contentRight.scrollLeft += distance * 0.1; // Smooth scrolling
        requestAnimationFrame(smoothScroll);
    } else {
        contentRight.scrollLeft = targetScrollLeft;
        isScrolling = false;
    }
}
