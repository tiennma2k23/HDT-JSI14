let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};
let trangtri = [
  {
    name: "Chuông",
    urlimg:
      "http://media.doisongphapluat.com/297/2014/11/23/mon-do-trang-tri-ngay-giang-sinh-2.jpg",
    price: 10000,
  },
  {
    name: "Chuông1",
    urlimg:
      "http://media.doisongphapluat.com/297/2014/11/23/mon-do-trang-tri-ngay-giang-sinh-2.jpg",
    price: 10000,
  },
  {
    name: "Chuông2",
    urlimg:
      "http://media.doisongphapluat.com/297/2014/11/23/mon-do-trang-tri-ngay-giang-sinh-2.jpg",
    price: 10000,
  },
  {
    name: "Chuông3",
    urlimg:
      "http://media.doisongphapluat.com/297/2014/11/23/mon-do-trang-tri-ngay-giang-sinh-2.jpg",
    price: 10000,
  },
];
let trangtri_ele = document.getElementById("trangtri");
for (let i = 0; i < trangtri.length; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "swiper-slide box");
  box.innerHTML = `<img
src=${trangtri[i].urlimg}
alt=""
/>
<h3>${trangtri[i].name} </h3>
<div class="price">${trangtri[i].price}</div>
<div class="stars">
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star-half-alt"></i>
</div>`;
  let a = document.createElement("a");
  a.setAttribute("class", "btn");
  a.setAttribute("id", String(i));
  a.innerHTML = "Add";
  box.append(a);
  a.addEventListener("click", (e) => {
    console.log(e.target.id);
  });
  trangtri_ele.append(box);
}
var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
