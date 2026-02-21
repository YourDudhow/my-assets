const menuBtn = document.getElementById('yt-menu-btn');
const sidebar = document.getElementById('yt-sidebar');
const overlay = document.getElementById('yt-overlay');
const searchTrigger = document.getElementById('yt-search-trigger');
const searchInput = document.getElementById('yt-search-input');
const subBtn = document.getElementById('yt-sub-btn');

// Buka Menu
menuBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

// Tutup Menu
overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Animasi Search
searchTrigger.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    if(searchInput.classList.contains('active')) searchInput.focus();
});

// Tombol Subscribe
subBtn.addEventListener('click', function() {
    if (this.innerText === "Subscribe") {
        this.innerText = "Disubscribe";
        this.style.background = "#f2f2f2";
        this.style.color = "#000";
    } else {
        this.innerText = "Subscribe";
        this.style.background = "#0f0f0f";
        this.style.color = "#fff";
    }
});

// Fitur Warna Dominan (Color Thief)
window.addEventListener('load', () => {
    const video = document.getElementById('yt-main-video');
    const poster = video.getAttribute('poster');
    if (poster) {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = poster;
        img.onload = () => {
            const thief = new ColorThief();
            const color = thief.getColor(img);
            document.querySelector('.yt-player-container').style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
        };
    }
});