document.addEventListener('DOMContentLoaded', function () {
    // Ambil elemen-elemen input dari form
    const usernameInput = document.getElementById('User-Name');
    const nameInput = document.getElementById('Name');
    const emailInput = document.getElementById('email');
    const currentPasswordInput = document.getElementById('Password');
    const newPasswordInput = document.getElementById('newPassword');
    const contactInput = document.getElementById('contact');
  
    // Ambil tombol "Save Changes"
    const saveChangesButton = document.querySelector('.Changes');
  
    // Event listener untuk tombol "Save Changes"
    saveChangesButton.addEventListener('click', function (e) {
      e.preventDefault(); // Mencegah form submit
  
      // Ambil data dari input
      const username = usernameInput.value;
      const name = nameInput.value;
      const email = emailInput.value;
      const currentPassword = currentPasswordInput.value;
      const newPassword = newPasswordInput.value;
      const contact = contactInput.value;
  
      // Buat objek data yang akan dikirim ke API
      const data = {
        username: username,
        name: name,
        email: email,
        current_password: currentPassword, // Ini password saat ini untuk verifikasi
        phone: contact,
        new_password: newPassword // Ini password baru jika ingin mengganti password
      };
  
      // Kirim permintaan PATCH ke API untuk memperbarui profil pengguna
      fetch('https://be-jayapura-6-production.up.railway.app/api/user/profile/:id' + userId, {
        method: 'PATCH', // Menggunakan metode PATCH
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Gantilah token dengan token yang valid
        },
        body: JSON.stringify(data)
      })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          // Jika permintaan berhasil, tampilkan pesan sukses
          alert('Profil pengguna berhasil diperbarui.');
        } else {
          // Jika ada kesalahan dalam permintaan, tampilkan pesan kesalahan dari API
          alert('Gagal memperbarui profil pengguna: ' + responseData.message);
        }
      })
      .catch(function (error) {
        // Tangani kesalahan jika ada
        console.error(error);
        alert('Terjadi kesalahan saat mengirim permintaan.');
      });
    });
  });
  