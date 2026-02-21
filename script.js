// Navigasi Sidebar
const menuToggle = document.getElementById('yt-menu-toggle');
const sidebar = document.getElementById('yt-sidebar');
const overlay = document.getElementById('yt-overlay');

menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

// Logika Tombol Subscribe
const subBtn = document.getElementById('yt-subscribe-btn');
subBtn.addEventListener('click', function() {
    if (this.innerText === "Subscribe") {
        this.innerText = "Disubscribe";
        this.classList.add('active');
    } else {
        this.innerText = "Subscribe";
        this.classList.remove('active');
    }
});

// Ambient Mode (Warna Dominan)
window.addEventListener('load', () => {
    const video = document.getElementById('yt-video');
    const poster = video.getAttribute('poster');
    if (poster) {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = poster;
        img.onload = () => {
            const thief = new ColorThief();
            const color = thief.getColor(img);
            document.querySelector('.yt-video-card').style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
        };
    }
});