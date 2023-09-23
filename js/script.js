// Script Tampilan Menu
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden"); //menambahkan kelas CSS "hidden" jika belum ada pada elemen tersebut, atau menghapusnya jika sudah ada
});

// Script Slider dengan Swiper
document.addEventListener("DOMContentLoaded", function () {
// Inisialisasi slider
  var mySwiper = new Swiper(".promo-slider", {
    slidesPerView: 1, // Jumlah slide yang ditampilkan dalam satu tampilan
    spaceBetween: 30, // Jarak antara slide
    loop: true, // Aktifkan looping slider
    navigation: {
      nextEl: ".swiper-button-next", // Selector tombol berikutnya
      prevEl: ".swiper-button-prev", // Selector tombol sebelumnya
    },
    autoplay: {
      delay: 5000, // Durasi antara slide dalam milidetik
    },
  });
});
