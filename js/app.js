import products from '../data/data.json' assert {type: 'json'};

// thêm header vào trang
const header = document.createElement("header");

header.innerHTML = `
    <div class="header-top">
    <div class="logo">
        <a href="index.html"><img class="logo-img" src="../image/logo.png" alt="Meo Store"></a>
    </div>
    <div class="search-box">
        <input id="search-box" type="text" placeholder="Bạn muốn mua gì?">
        <label for="search-box"><i class="fas fa-search"></i></label>
        <div class="search-block">
            <p>Bạn muốn mua gì?</p>
        </div>
    </div>
    </div>
    <div class="header-bottom">
    <div class="menu">
        <div class="btn-menu" id="btn-menu"><i class="fas fa-bars"></i></div>
        <div class="menu-section">
            <a href="index.html">Trang chủ</a>
            <a href="shop.html">Cửa hàng</a>
            <a href="introduce.html">Giới thiệu</a>
            <a href="contact.html">Liên hệ</a>
            <a href="sitemap.html">Hướng dẫn</a>

        </div>
    </div>
    <div class="icons">
        <a href="notification.html"><i class="fas fa-bell"></i></a>
        <a href="cart.html"><i class="fas fa-shopping-cart" id="cart"><div class="count">1</div></i></a>
        <a href="login.html" class="image-user">
            <img src="../image/avatar.jfif" alt="">
        </a>
    </div>

    </div>
`

document.body.appendChild(header)

// nút section cho menu
const btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener("click", () => {
    btnMenu.parentElement.querySelector(".menu-section").classList.toggle("active");
    btnMenu.querySelector(".fas").classList.toggle("fa-bars");
    btnMenu.querySelector(".fas").classList.toggle("fa-times");
})

// search box
const searchBox = document.getElementById("search-box");

function productHandlerSearch(product) {
    return `
    <a href="product.html" class="item-block" id=${product.id} onclick="transmittion(this)">
        <img src=${product.image} alt="">
        <div class="name-product">${product.title}</div>
    </a>
    `
};

// truyền thông tin sản phẩm tìm kiếm
window.transmittion = (e) => {
    localStorage.setItem('item', e.id);
}


// đóng mở khung search
searchBox.onfocus = () => {
    searchBox.parentElement.classList.add("active");
};

window.onclick = (e) => {
    if(e.target.closest(".search-box")) return;
    searchBox.parentElement.classList.remove("active");
    searchBox.value = '';
};


searchBox.onkeyup = () => {
    let listProductsSearch = products.map((product) => (product.title.includes(searchBox.value.toUpperCase()) ? productHandlerSearch(product) : ''));
    let searchProducts = searchBox.parentElement.querySelector(".search-block");
    searchProducts.innerHTML = listProductsSearch.join('');
}



// giỏ hàng
window.countItem = () => {
    const cart = document.getElementById("cart");
    let count = JSON.parse(localStorage.getItem("items")).length;
    cart.querySelector(".count").innerHTML = `${count}`
};

countItem();



// thêm footer vào trang

const footer = document.createElement("footer")

footer.innerHTML = `
<div class="icons row">
            <div class="col-xl-4 col-lg-6 col-sm-12 col-12 text-start">
                <div class="logo m-0">
                    <a href="index.html"><img class="logo-img" src="../image/logo.png" alt="Meo Store"></a>
                </div>
                <div class="slogan fs-4">
                    <i>MEO Comestic rất sẵn lòng phục vụ quý khách. Đến với chúng tôi là đến với chất lượng, uy tín và nhiệt tình.</i>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-sm-12 col-12 info">
                <h2 class="mt-3">Thông tin liên hệ</h2>
                <div class="icon-group ">
                    <i class="fas fa-phone"></i>
                    <div class="text"><a href="tel:+84976166841" auto-dial>0976 166 841</a></div>
                </div>
            
                <div class="icon-group">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="text">97/18 TX33, phường Thạnh Xuân, quận 12, TP.HCM</div>
                </div>
            
                <div class="icon-group">
                    <i class="fas fa-comments"></i>
                    <div class="text text-start"><a href="https://www.facebook.com/profile.php?id=100020185974477">Huỳnh Thị Lưu Ly 21109711</a></div>
                    <div class="text text-start"><a href="https://www.facebook.com/ntbichloan2002">Nguyễn Thị Bích Loan 20003235</a></div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-sm-12 col-12 coupon">
                <h2 class="mt-3">Đăng ký nhận khuyễn mãi</h2>
                <form action="" method="post">
                    <input type="email" name="email" placeholder="Nhập email của bạn">
                    <i class="fas fa-paper-plane"></i>
                </form>
            </div>
        </div>
`

document.body.appendChild(footer)




