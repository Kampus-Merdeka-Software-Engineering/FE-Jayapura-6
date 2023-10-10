document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Mencegah pengiriman formulir

        // Ambil data dari form
        const form = e.target;
        const username = form.querySelector('[name="Username"]').value;
        const password = form.querySelector('[name="Password"]').value;
        console.log("username" + username)
        console.log("password" + password)


        // Buat objek data
        const data = {
            username: username,
            password: password,
        };


        // Kirim permintaan ke server untuk login
        fetch('https://be-jayapura-6-production.up.railway.app/api/auth/login', { 
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if (data.accessToken) {
                // Login berhasil, Anda dapat mengarahkan pengguna ke halaman lain atau melakukan tindakan yang sesuai
                alert('Login berhasil');
                // Contoh: Mengarahkan ke halaman dashboard
                window.location.href = '../index.html';
            } else {
                // Login gagal, tampilkan pesan kesalahan
                alert('Login gagal. Periksa kembali username dan password Anda.');
            }
        })
        .catch((error) => {
            console.error(error);
        });
    });
});