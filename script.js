// Elemen
const overlay = document.getElementById('yt-overlay');
const sidebar = document.getElementById('yt-sidebar');
const menuBtn = document.getElementById('yt-menu-btn');
const searchTrigger = document.getElementById('yt-search-trigger');
const searchInput = document.getElementById('yt-search-input');
const clearSearch = document.getElementById('yt-clear-search');
const descBox = document.getElementById('yt-open-desc');
const descPanel = document.getElementById('yt-desc-panel');
const closeDesc = document.getElementById('yt-close-desc');
const subBtn = document.getElementById('yt-sub-btn');

// Sidebar
menuBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

// Search
searchTrigger.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) searchInput.focus();
});

clearSearch.addEventListener('click', () => {
    searchInput.value = "";
    searchInput.focus();
});

// Bottom Sheet
descBox.addEventListener('click', () => {
    descPanel.classList.add('active');
    overlay.classList.add('active');
});

closeDesc.addEventListener('click', () => {
    descPanel.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    descPanel.classList.remove('active');
    overlay.classList.remove('active');
});

// Subscribe
subBtn.addEventListener('click', function() {
    this.innerText = (this.innerText === "Subscribe") ? "Disubscribe" : "Subscribe";
    this.classList.toggle('subscribed');
});

// Color Thief Logic (Tetap Sama)
const videoElement = document.getElementById('yt-main-video');
const container = document.querySelector('.yt-player-container');

window.addEventListener('load', () => {
    const posterUrl = videoElement.getAttribute('poster');
    if (posterUrl) {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = posterUrl;
        img.onload = () => {
            const colorThief = new ColorThief();
            const color = colorThief.getColor(img);
            container.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        };
    }
});