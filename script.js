const clockDisplay = document.getElementById('digital-clock');

// 2. Fungsi untuk mendapatkan dan menampilkan waktu saat ini
function updateClock() {
    const now = new Date();
    
    // Ambil jam, menit, dan detik
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Tambahkan nol di depan jika angka kurang dari 10 (misalnya, 09, 05)
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Gabungkan menjadi format HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Perbarui tampilan di HTML
    clockDisplay.textContent = timeString;
}

// 3. Panggil fungsi sekali saat dimuat untuk menghindari jeda
updateClock();

// 4. Perbarui jam setiap 1000 milidetik (1 detik)
setInterval(updateClock, 1000);
