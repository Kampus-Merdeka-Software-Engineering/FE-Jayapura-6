document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('signup-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Menghentikan aksi default formulir

        // Ambil data dari form
        const form = e.target;
        const username = form.querySelector('[name="Username"]').value;
        const name = form.querySelector('[name="Name"]').value;
        const email = form.querySelector('[name="Email"]').value;
        const phone = form.querySelector('[name="Phone"]').value;
        const password = form.querySelector('[name="Password"]').value;
        console.log("username" + username)
        console.log("password" + password)

        // Buat objek data
        const data = {
            username: username,
            name: name,
            email: email,
            phone: phone,
            password: password,
        };

        // Kirim data ke server melalui Fetch API
        fetch('https://be-jayapura-6-production.up.railway.app/api/auth/register/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Tampilkan pesan dari server di console
            if (data) {
            // Register berhasil, Anda dapat melanjutkan ke halaman login
            alert('Register berhasil');
            // Contoh: Mengarahkan ke halaman login
            window.location.href = '../html/signIn.html';
        } else {
            // Register gagal, tampilkan pesan kesalahan
            alert('Register gagal.');
        }
        })
        .catch(error => {
            console.error(error);
        });
    });
});