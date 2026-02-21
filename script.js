// ELEMEN UMUM
const overlay = document.getElementById('overlay');
const header = document.querySelector('.header'); // Tambahkan ini agar variabel header terdeteksi

// LOGIKA SIDEBAR
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
});

// LOGIKA SEARCH
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');

searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
        header.classList.add('search-active'); // Menambah class aktif ke header
    } else {
        header.classList.remove('search-active');
    }
});

clearBtn.addEventListener('click', () => {
    if (searchInput.value.length > 0) {
        searchInput.value = "";
        searchInput.focus();
    } else {
        searchInput.classList.remove('active');
        header.classList.remove('search-active');
    }
});

// LOGIKA BOTTOM SHEET
const descArea = document.getElementById('descArea');
const descPanel = document.getElementById('descPanel');
const closeDesc = document.getElementById('closeDesc');

descArea.addEventListener('click', () => {
    descPanel.classList.add('active');
    overlay.classList.add('active');
});

closeDesc.addEventListener('click', () => {
    descPanel.classList.remove('active');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    descPanel.classList.remove('active');
    overlay.classList.remove('active');
    // Tambahkan agar kolom search juga tertutup saat klik overlay
    searchInput.classList.remove('active');
    header.classList.remove('search-active');
});

// TOMBOL SUBSCRIBE
const btnSub = document.getElementById('btnSub');
btnSub.addEventListener('click', function() {
    this.innerHTML = (this.innerHTML === "Subscribe") ? "Disubscribe" : "Subscribe";
    this.classList.toggle('subscribed');
});

// --- LOGIKA DYNAMIC COLOR BACKGROUND (COLOR THIEF) ---
const vidPlayer = document.getElementById('videoPlayer');
const vidContainer = document.querySelector('.video-container');

function updatePosterColor() {
    const colorThief = new ColorThief(); // Pindahkan ke dalam fungsi agar lebih aman
    const posterUrl = vidPlayer.getAttribute('poster');
    if (!posterUrl) return;

    const img = new Image();
    img.crossOrigin = "Anonymous"; 
    img.src = posterUrl;

    img.onload = function() {
        try {
            const color = colorThief.getColor(img);
            vidContainer.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        } catch (e) {
            console.log("Gagal mengambil warna dominan", e);
        }
    };
    
    img.onerror = function() {
    console.log("Gambar poster gagal dimuat, menggunakan warna default.");
    vidContainer.style.backgroundColor = "#000"; // Fallback ke hitam
    };
}

window.addEventListener('load', updatePosterColor);