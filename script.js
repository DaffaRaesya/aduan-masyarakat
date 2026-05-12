// Mengambil form berdasarkan id
const form = document.getElementById("formAduan");

// Mengambil div hasil
const hasil = document.getElementById("hasil");

// Saat form dikirim
form.addEventListener("submit", function(event) {

    // Mencegah form reload
    event.preventDefault();

    // Mengambil data input
    const nama = document.getElementById("nama").value;
    const alamat = document.getElementById("alamat").value;
    const masalah = document.getElementById("masalah").value;
    const waktu = document.getElementById("waktu").value;

    // Menampilkan hasil rekap
    hasil.innerHTML = `
        <h3>Rekap Aduan</h3>

        <p><b>Nama Pengadu:</b> ${nama}</p>

        <p><b>Alamat Pengadu:</b> ${alamat}</p>

        <p><b>Masalah Pengadu:</b> ${masalah}</p>

        <p><b>Waktu Kejadian:</b> ${waktu}</p>

        <hr>

        <p>
        Aduan anda sudah kami terima,
        kami akan mengirimkan petugas terkait.
        </p>
    `;
});