function adjustTitle() {
    var width = window.innerWidth;
    var longTitle = document.getElementById('title-long');
    var shortTitle = document.getElementById('title-short');

    if (width < 768) {
        longTitle.style.display = 'none';
        shortTitle.style.display = 'block';
    } else {
        longTitle.style.display = 'block';
        shortTitle.style.display = 'none';
    }
}

// Run on initial load
adjustTitle();

// Add event listener for window resize
window.addEventListener('resize', adjustTitle);
