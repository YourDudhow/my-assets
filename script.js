// Ambil elemen-elemen penting dari HTML
const overlay = document.getElementById('overlay');
const header = document.querySelector('.header');

// --- FUNGSI SIDEBAR ---
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

// Buka sidebar saat ikon menu diklik
menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('active');
    overlay.classList.add('active');
});

// --- FUNGSI PENCARIAN ---
const searchIcon = document.getElementById('searchIcon');
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');

// Tampilkan/Sembunyikan kolom cari
searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        searchInput.focus(); // Langsung aktifkan kursor di kolom
        header.classList.add('search-active');
    } else {
        header.classList.remove('search-active');
    }
});

// Tombol silang untuk menghapus teks cari
clearBtn.addEventListener('click', () => {
    if (searchInput.value.length > 0) {
        searchInput.value = ""; // Hapus teks
        searchInput.focus();
    } else {
        // Jika teks kosong, tutup kolom cari
        searchInput.classList.remove('active');
        header.classList.remove('search-active');
    }
});

// --- FUNGSI DESKRIPSI (BOTTOM SHEET) ---
const descArea = document.getElementById('descArea');
const descPanel = document.getElementById('descPanel');
const closeDesc = document.getElementById('closeDesc');

// Buka panel deskripsi
descArea.addEventListener('click', () => {
    descPanel.classList.add('active');
    overlay.classList.add('active');
});

// Tutup panel deskripsi
closeDesc.addEventListener('click', () => {
    descPanel.classList.remove('active');
    overlay.classList.remove('active');
});

// Klik di mana saja pada overlay untuk menutup semuanya
overlay.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    descPanel.classList.remove('active');
    overlay.classList.remove('active');
    searchInput.classList.remove('active');
    header.classList.remove('search-active');
});

// --- FUNGSI TOMBOL SUBSCRIBE ---
const btnSub = document.getElementById('btnSub');
btnSub.addEventListener('click', function() {
    // Ganti teks tombol bolak-balik
    this.innerHTML = (this.innerHTML === "Subscribe") ? "Disubscribe" : "Subscribe";
    this.classList.toggle('subscribed');
});

// --- LOGIKA WARNA DINAMIS (COLOR THIEF) ---
const vidPlayer = document.getElementById('videoPlayer');
const vidContainer = document.querySelector('.video-container');

function updatePosterColor() {
    const colorThief = new ColorThief();
    const posterUrl = vidPlayer.getAttribute('poster');
    if (!posterUrl) return;

    const img = new Image();
    img.crossOrigin = "Anonymous"; // Izin ambil data gambar dari luar
    img.src = posterUrl;

    img.onload = function() {
        try {
            // Ambil warna dominan dari gambar poster
            const color = colorThief.getColor(img);
            // Terapkan warna tersebut ke background wadah video
            vidContainer.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        } catch (e) {
            console.log("Gagal mengambil warna dominan", e);
        }
    };
    
    // Jika gambar gagal dimuat, gunakan warna hitam sebagai cadangan
    img.onerror = function() {
        vidContainer.style.backgroundColor = "#000";
    };
}

// Jalankan fungsi warna saat halaman selesai dimuat
window.addEventListener('load', updatePosterColor);