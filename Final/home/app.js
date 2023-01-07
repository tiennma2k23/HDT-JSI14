let shopping_cart = document.getElementById("shopping-cart");

function abc() {
  let sum = 0;
  shopping_cart.innerHTML = "";
  let data = localStorage.getItem("data");
  let giohang = JSON.parse(data);
  let sp = giohang.product;
  for (let i = 0; i < sp.length; i++) {
    let st = sp[i].name;
    let type = "",
      num = 0;
    for (let index = 0; index < st.length; index++) {
      if (st[index] >= "0" && st[index] <= "9")
        num = num * 10 + st[index] - "0";
      else type += st[index];
    }
    let box = document.createElement("div");
    box.setAttribute("class", "box");
    sum += sanpham[type][num].price * sp[i].sl;

    // box.innerHTML = <i class="fas fa-trash"></i>;
    let ii = document.createElement("i");
    ii.setAttribute("class", "fas fa-trash");
    ii.setAttribute("id", String(i));
    ii.addEventListener("click", function (e) {
      console.log(e.target.id);
      let data = localStorage.getItem("data");
      let giohang = JSON.parse(data);
      let sp = giohang.product;
      sp.splice(Number(e.target.id), 1);
      localStorage.setItem("data", JSON.stringify(giohang));
      abc();
      updateById(localStorage.id, giohang);
    });
    box.append(ii);
    let abcabc = document.createElement("div");
    // abcabc.setAttribute("class", "box");
    abcabc.innerHTML = `<img src=${sanpham[type][num].urlimg} alt="" />
<div class="content">
  <h3>${sanpham[type][num].name}</h3>
  <span class="price">${sanpham[type][num].price}/-</span>
  <span class="quantity">sl : ${sp[i].sl}</span>
</div>`;
    box.append(abcabc);
    shopping_cart.append(box);
  }
  let total = document.createElement("div");
  total.setAttribute("class", "total");
  total.innerHTML = `Tổng số tiền: ${sum}`;
  shopping_cart.append(total);
  let a = document.createElement("a");
  a.setAttribute("class", "btn");
  a.innerHTML = "Thanh toán";
  shopping_cart.append(a);
}
const UrlApi = "https://62d4116c5112e98e484a08f4.mockapi.io/api/User";
const updateById = async (id, newData) => {
  const res = await fetch(UrlApi + `/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newData),
  });
  // console.log(await res.json());
};
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
let sanpham = {
  trangtri: [
    {
      name: "Chuông",
      urlimg: "./image/chuong.jpg",
      price: 10000,
    },
    {
      name: "Tất giáng sinh",
      urlimg: "./image/tatgiangsinh.jpg",
      price: 20000,
    },
    {
      name: "Mũ",
      urlimg: "./image/muagiangsinh.jpg",
      price: 50000,
    },
    {
      name: "Quần áo",
      urlimg: "./image/quanao.jpg",
      price: 10000,
    },
  ],
  thucan: [
    {
      name: "Gà tây nướng",
      urlimg: "./image/ganuong.webp",
      price: 10000,
    },
    {
      name: "Bánh kem",
      urlimg: "./image/banhkem.jpg",
      price: 10000,
    },
    {
      name: "Kẹo",
      urlimg: "./image/keo.jpg",
      price: 10000,
    },
  ],
};
let trangtri_ele = document.getElementById("trangtri");
for (let i = 0; i < sanpham.trangtri.length; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "swiper-slide box");
  box.innerHTML = `<img
src=${sanpham.trangtri[i].urlimg}
alt=""
/>
<h3>${sanpham.trangtri[i].name} </h3>
<div class="price">${sanpham.trangtri[i].price}</div>
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
    // console.log(e.target.id);
    let st = "trangtri" + String(e.target.id);
    let data = localStorage.getItem("data");
    let giohang = JSON.parse(data);
    let sp = giohang.product;
    let ok = false;
    console.log(st);
    for (let i = 0; i < sp.length; i++) {
      if (sp[i].name == st) {
        sp[i].sl++;
        ok = true;
      }
    }
    if (!ok) {
      let new_sp = { name: st, sl: 1 };
      sp.push(new_sp);
    }
    // giohang.product.push(st);
    // giohang.product.splice(0, giohang.product.length);
    localStorage.setItem("data", JSON.stringify(giohang));
    abc();
    updateById(localStorage.id, giohang);
  });
  trangtri_ele.append(box);
}
let thucan_ele = document.getElementById("thucan");
for (let i = 0; i < sanpham.thucan.length; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "swiper-slide box");
  box.innerHTML = `<img
src=${sanpham.thucan[i].urlimg}
alt=""
/>
<h3>${sanpham.thucan[i].name} </h3>
<div class="price">${sanpham.thucan[i].price}</div>
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
    // console.log(e.target.id);
    let st = "thucan" + String(e.target.id);
    let data = localStorage.getItem("data");
    let giohang = JSON.parse(data);
    let sp = giohang.product;
    let ok = false;
    console.log(st);
    for (let i = 0; i < sp.length; i++) {
      if (sp[i].name == st) {
        sp[i].sl++;
        ok = true;
      }
    }
    if (!ok) {
      let new_sp = { name: st, sl: 1 };
      sp.push(new_sp);
    }
    // giohang.product.push(st);
    // giohang.product.splice(0, giohang.product.length);
    localStorage.setItem("data", JSON.stringify(giohang));
    updateById(localStorage.id, giohang);
    abc();
  });
  thucan_ele.append(box);
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

let username_area = document.getElementById("username_area");
username_area.innerHTML = localStorage.username;
abc();
