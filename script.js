const overlay = document.getElementById('overlay');
const header = document.getElementById('mainHeader');

// LOGIKA SIDEBAR
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
});

// LOGIKA SEARCH (Melebar Menutupi Brand)
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');

searchIcon.addEventListener('click', () => {
    const isActive = searchInput.classList.toggle('active');
    
    if (isActive) {
        header.classList.add('search-mode');
        searchInput.focus();
    } else {
        header.classList.remove('search-mode');
    }
});

// Tampilkan tombol X hanya jika ada teks
searchInput.addEventListener('input', () => {
    if (searchInput.value.length > 0) {
        clearBtn.classList.add('show');
    } else {
        clearBtn.classList.remove('show');
    }
});

clearBtn.addEventListener('click', () => {
    searchInput.value = "";
    clearBtn.classList.remove('show');
    searchInput.focus();
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

// Tutup semuanya jika klik Overlay
overlay.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    descPanel.classList.remove('active');
    overlay.classList.remove('active');
    // Tambahan: tutup search juga biar konsisten
    searchInput.classList.remove('active');
    header.classList.remove('search-mode');
});

// TOMBOL SUBSCRIBE
const btnSub = document.getElementById('btnSub');
btnSub.addEventListener('click', function() {
    this.innerHTML = (this.innerHTML === "Subscribe") ? "Disubscribe" : "Subscribe";
    this.classList.toggle('subscribed');
});

// COLOR THIEF (Background Dinamis)
const vidPlayer = document.getElementById('videoPlayer');
const vidContainer = document.querySelector('.video-container');
const colorThief = new ColorThief();

function updatePosterColor() {
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
            console.log("Gagal mengambil warna", e);
        }
    };
}

window.addEventListener('load', updatePosterColor);