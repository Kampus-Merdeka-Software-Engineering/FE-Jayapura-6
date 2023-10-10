document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('order-btn').addEventListener('click', function (e) {
        e.preventDefault(); // Menghentikan aksi default dari tombol
        // console.log("bisa")

        // Ambil token dari local storage
        const user = JSON.parse(localStorage.getItem('user'));
        if (user === null) {
            if (confirm('Anda belum login!')) {
                window.location.replace("html/signIn.html")
            }
        }
        console.log(user)

        const token = user.accessToken;
        console.log(token)
        
        // Ambil data dari formulir
        const cartItem = localStorage.getItem('cart');
        const total = document.getElementById('total').value;
        const nama = document.querySelector('[name="nama"]').value;
        const alamat = document.querySelector('[name="alamat"]').value;
        const email = document.querySelector('[name="email"]').value;
        const hp = document.querySelector('[name="no-hp"]').value;
        const pengiriman = document.querySelector('[name="pengiriman"]').value;
        const gambar = document.querySelector('[name="gambar"]').value;
        console.log("cartItem" + "" + cartItem);
        console.log("total" + "" + total);
        console.log("pengiriman" + "" + pengiriman);

        JSON.parse(cartItem)[0]
        const product1 = JSON.parse(cartItem)[0];
        console.log(product1);

        // Buat objek data
        const data = {
            user_id: user.id,
            product_id: product1.id,
            total_payment: product1.price,
            address: alamat,
            payment_service: pengiriman,
            payment_proof: gambar,
        };

        // Kirim permintaan POST ke server
        fetch('https://be-jayapura-6-production.up.railway.app/api/order/add-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data),
            })
        .then((response) => response.json())

        .then((data) => {
            console.log(data)
            if (data.success) {
                // Order berhasil
                alert('Order berhasil');
                // Contoh: Mengarahkan ke halaman order
                // window.location.href = './html/order.html';
            } else {
                // Order gagal, tampilkan pesan kesalahan
                alert('Order gagal. Periksa kembali pesanan Anda.');
            }
        })
        .catch(function (error) {
            console.error(error);
        });
    });
});