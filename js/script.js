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


// Fungsi untuk membuat elemen produk
function createProduct(imageSrc, categoryName, productName, rating, initialPrice, price) {
  // Buat elemen produk (div) sebagai container
  var product = document.createElement('div');
  product.classList.add('box');

  // Buat elemen gambar produk
  var image = document.createElement('img');
  image.classList.add('image-product');
  image.src = imageSrc;
  image.alt = 'product';

  // Buat elemen kategori produk
  var category = document.createElement('p');
  category.classList.add('category-name');
  category.textContent = categoryName;

  // Buat elemen nama produk
  var name = document.createElement('h5');
  name.classList.add('product-name');
  name.textContent = productName;

  // Buat elemen bintang (rating) produk
  var stars = document.createElement('div');
    stars.classList.add('stars');
    for (var i = 0; i < 5; i++) {
      var star = document.createElement('i');
      star.classList.add('fa-solid','fa-star' + (i < rating ? '' : '-empty'));
      stars.appendChild(star);
    }
    product.appendChild(stars);

  // Buat elemen harga awal
  var initialPriceSpan = document.createElement('span');
  initialPriceSpan.classList.add('initial-price');
  initialPriceSpan.textContent = initialPrice;

  // Buat elemen harga diskon
  var priceSpan = document.createElement('span');
  priceSpan.classList.add('price');
  priceSpan.textContent = price;

  // Buat tombol "Add to Cart"
  var addToCartLink = document.createElement('a');
  addToCartLink.classList.add('btn');
  addToCartLink.href = './confirm-order.html';
  addToCartLink.textContent = 'Add to Cart';

  // Buat ikon "Wishlist"
  var wishlistIcon = document.createElement('a');
  wishlistIcon.id = 'wishlist-icon';
  wishlistIcon.classList.add('fa-regular', 'fa-heart');
  wishlistIcon.href = './wishlist.html';

  // Tambahkan semua elemen ke dalam elemen produk
  product.appendChild(image);
  product.appendChild(category);
  product.appendChild(name);
  product.appendChild(stars);
  product.appendChild(initialPriceSpan);
  product.appendChild(priceSpan);
  product.appendChild(addToCartLink);
  product.appendChild(wishlistIcon);

  return product;
}

// Dapatkan elemen kontainer produk
var hotProductContainer = document.querySelector('.box-container');
var productContainer = document.querySelector('.arrival-box-container')

// Panggil fungsi createProduct untuk membuat produk
var product = createProduct('../image/clothes.png', 'Clothes', 'Name Product', 4, 'Rp198.000', 'Rp149.900');
var product2 = createProduct('../image/bag.png', 'Bag', 'Name Product', 5, 'Rp198.000', 'Rp149.900');
var product3 = createProduct('../image/belt.png', 'Belt', 'Name Product', 5, 'Rp198.000', 'Rp149.900');
var product4 = createProduct('../image/hat.png', 'Hat', 'Name Product', 5, 'Rp198.000', 'Rp149.900');
var product5 = createProduct('../image/clothes2.png', 'Clothes', 'Name Product', 5, 'Rp198.000', 'Rp149.900');
var product6 = createProduct('../image/bag2.png', 'Bag', 'Name Product', 5, 'Rp198.000', 'Rp149.900');
var product7 = createProduct('../image/pants.png', 'Pants', 'Name Product', 5, 'Rp198.000', 'Rp149.900');
var product8 = createProduct('../image/shoes.png', 'Shoes', 'Name Product', 5, 'Rp198.000', 'Rp149.900');
var product9 = createProduct('../image/shoes2.png', 'Shoes', 'Name Product', 5, 'Rp198.000', 'Rp149.900');
var product10 = createProduct('../image/clothes3.png', 'Clothes', 'Name Product', 5, 'Rp198.000', 'Rp149.900');

// Tambahkan produk ke dalam kontainer hot produk
hotProductContainer.appendChild(product);
hotProductContainer.appendChild(product2);
hotProductContainer.appendChild(product3);
hotProductContainer.appendChild(product4);

// Tambahkan produk ke dalam kontainer new arrival produk
productContainer.appendChild(product5);
productContainer.appendChild(product6);
productContainer.appendChild(product7);
productContainer.appendChild(product8);      