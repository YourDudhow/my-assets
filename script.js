const overlay = document.getElementById('overlay');
const header = document.getElementById('mainHeader');
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');

// LOGIKA SIDEBAR
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
});

// LOGIKA SEARCH SLIDE
searchIcon.addEventListener('click', () => {
    header.classList.add('search-mode');
    searchInput.focus();
});

// Kontrol tombol X dan fungsi tutup
clearBtn.addEventListener('click', () => {
    if (searchInput.value.length > 0) {
        searchInput.value = "";
        clearBtn.classList.remove('show');
        searchInput.focus();
    } else {
        // Jika input kosong, geser balik keluar (tutup)
        header.classList.remove('search-mode');
    }
});

// Munculkan ikon X saat ada ketikan
searchInput.addEventListener('input', () => {
    clearBtn.classList.toggle('show', searchInput.value.length > 0);
});

// Tutup semuanya lewat Overlay
overlay.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    header.classList.remove('search-mode');
    overlay.classList.remove('active');
    document.getElementById('descPanel').classList.remove('active');
});

// LOGIKA BOTTOM SHEET & LAINNYA
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

const btnSub = document.getElementById('btnSub');
btnSub.addEventListener('click', function() {
    this.innerHTML = (this.innerHTML === "Subscribe") ? "Disubscribe" : "Subscribe";
    this.classList.toggle('subscribed');
});