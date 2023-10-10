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

const product = [
  {
    id: 1,
    image:  "./image/clothes.png",
    category: "Clothes",
    productName: "Black T-Shirt",
    price: 79900,
  },
  {
    id: 2,
    image:  "./image/clothes2.png",
    category: "Clothes",
    productName: "Sweater",
    price: 169900,
  },
  {
    id: 3,
    image:  "./image/clothes3.png",
    category: "Clothes",
    productName: "White Sweater",
    price: 149900,
  },
  {
    id: 4,
    image:  "./image/bag.png",
    category: "Bag",
    productName: "Woman Bag",
    price: 349900,
  },
  {
    id: 5,
    image:  "./image/bag2.png",
    category: "Bag",
    productName: "School Bag",
    price: 199900,
  },
  {
    id: 6,
    image:  "./image/belt.png",
    category: "Belt",
    productName: "Belt",
    price: 49900,
  },
  {
    id: 7,
    image:  "./image/hat.png",
    category: "Hat",
    productName: "Hat",
    price: 89900,
  },
  {
    id: 8,
    image:  "./image/pants.png",
    category: "Pants",
    productName: "Pants Men",
    price: 269900,
  },
  {
    id: 9,
    image:  "./image/pants2.png",
    category: "Pants",
    productName: "Pants",
    price: 299900,
  },
  {
    id: 10,
    image:  "./image/shoes.png",
    category: "Shoes",
    productName: "Sports Shoes",
    price: 399900,
  },
  {
    id: 11,
    image:  "./image/shoes2.png",
    category: "Shoes",
    productName: "Casual Shoes",
    price: 499900,
  },
  {
    id: 12,
    image:  "./image/skirt.png",
    category: "Skirt",
    productName: "Short Skirt",
    price: 79900,
  }
];

// Adding Products
const categories = [...new Set(product.map((item)=>
  {return item}))]
  let i=0;

document.getElementById('root').innerHTML = categories.map((item)=>
{
  var {image, category, productName, price} = item;
  return(
      `<div class="box">
        <img class="image-product" src=${image}><br>
        <p class="category-name">${category}</p>
        <h5 class="product-name">${productName}</h5>
        <span class="price"> Rp ${price}</span><br>` +
        "<button onclick='addtocart("+(i++)+")' class='btn'>Add to cart</button>"+
        `<a id="wishlist-icon" class="fa-solid fa-heart"></a>
      </div>`
  )
}).join('')

// Adding to Cart
var cart =[];

function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
}
function delElement(a){
  cart.splice(a, 1);
  displaycart();
}

function displaycart(){
  let j = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "Rp "+0+".00";
  }
  else{
      document.getElementById("cartItem").innerHTML = cart.map((items)=>
      {
          var {image, productName, price} = items;
          total=total+price;
          document.getElementById("total").innerHTML = "Rp "+total+".00";
          return(
              `<div class='cart-item'>
              <div class='row-img'>
                  <img style='width: 30px;' class='rowimg' src=${image}>
              </div>
              <p style='font-size:12px;'>${productName}</p>
              <h2 style='font-size: 15px;'>Rp ${price}.00</h2>`+
              "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
          );
      }).join('');
  }
}

// WISHLIST SCRIPT
// Dapatkan semua elemen dengan ID yang sama
var wishlistIcons = document.querySelectorAll('[id^="wishlist-icon"]');

// Tambahkan event listener untuk setiap elemen dengan ID yang sama
wishlistIcons.forEach(function(wishlistIcon) {
  wishlistIcon.addEventListener("click", function(event) {
    // Cek apakah tombol memiliki kelas CSS tertentu (misalnya, "active")
    if (wishlistIcon.classList.contains("active")) {
      // Jika iya, hapus kelas "active" untuk mengembalikan ke tampilan awal
      wishlistIcon.classList.remove("active");
    } else {
      // Jika tidak, tambahkan kelas "active" untuk mengubah tampilan
      wishlistIcon.classList.add("active");
    }

    // Untuk menghentikan peristiwa dari mengarahkan ke halaman "wishlist.html"
    event.preventDefault();
  });
});