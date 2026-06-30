// 1. Cari tombol "Pelajari Lebih Lanjut" di HTML berdasarkan strukturnya
const tombolHero = document.querySelector('#home button');

// 2. Beri tahu tombol tersebut untuk "mendengarkan" kapan ia diklik pengguna
tombolHero.addEventListener('click', function() {
    // 3. Jalankan aksi ketika diklik
    alert('Terima kasih telah tertarik dengan Exensia! Kami akan segera menghubungi Anda.');
});

// Menangkap elemen formulir
const form = document.querySelector('#form-kontak');

// Mendengarkan kapan formulir tersebut di-submit (dikirim)
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman web melakukan refresh otomatis saat tombol dikirim

    // Mengambil teks yang diketik oleh pengguna
    const nama = document.querySelector('#input-nama').value;
    const email = document.querySelector('#input-email').value;

    // Menampilkan pesan terima kasih kustom menggunakan nama si pengirim
    alert('Halo ' + nama + ', pesan Anda berhasil terkirim! Kami akan membalas ke email: ' + email);
    
    form.reset(); // Mengosongkan kembali isi formulir setelah selesai dikirim
});
// Mengambil elemen header
const header = document.querySelector('header');

// Mengambil posisi awal header dari atas layar
const posisiHeaderAwal = header.offsetTop;

// Mendengarkan setiap kali layar di-scroll oleh pengguna
window.addEventListener('scroll', function() {
    if (window.scrollY > posisiHeaderAwal) {
        // Jika layar di-scroll melewati posisi awal header, tambahkan kelas .sticky
        header.classList.add('sticky');
    } else {
        // Jika kembali ke paling atas, hapus kelas .sticky
        header.classList.remove('sticky');
    }
});