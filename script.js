const overlay = document.getElementById('overlay');
const header = document.getElementById('mainHeader');

// SIDEBAR
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
});

// SEARCH LOGIC "SI MALU-MALU"
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');

searchIcon.addEventListener('click', () => {
    const isActive = searchInput.classList.toggle('active');
    if (isActive) {
        header.classList.add('search-mode');
        searchInput.focus();
    } else {
        if (searchInput.value === "") {
            header.classList.remove('search-mode');
        }
    }
});

// Kontrol Tombol Clear (X)
searchInput.addEventListener('input', () => {
    clearBtn.classList.toggle('show', searchInput.value.length > 0);
});

clearBtn.addEventListener('click', () => {
    if (searchInput.value.length > 0) {
        searchInput.value = "";
        clearBtn.classList.remove('show');
        searchInput.focus();
    } else {
        searchInput.classList.remove('active');
        header.classList.remove('search-mode');
    }
});

// BOTTOM SHEET
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

// Reset Semua lewat Overlay
overlay.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    descPanel.classList.remove('active');
    overlay.classList.remove('active');
    searchInput.classList.remove('active');
    header.classList.remove('search-mode');
});

// SUBSCRIBE
const btnSub = document.getElementById('btnSub');
btnSub.addEventListener('click', function() {
    this.innerHTML = (this.innerHTML === "Subscribe") ? "Disubscribe" : "Subscribe";
    this.classList.toggle('subscribed');
});

// COLOR THIEF
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
        } catch (e) { console.log(e); }
    };
}
window.addEventListener('load', updatePosterColor);