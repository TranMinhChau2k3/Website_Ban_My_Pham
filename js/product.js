import products from '../data/data.json' assert {type: 'json'};


// thêm sản phẩm vào giỏ hàng
let items;
if(localStorage.getItem('items')) {
    items = JSON.parse(localStorage.getItem('items'));
} else {
    items = [];
}

window.addItem = (e) => {
    let available = false;
    countItem();
    const quantity = e.parentElement.parentElement.querySelector("input").value;

    if(items.length) {
        items.forEach((item) => {
            if(item.id == e.id) {
                item.quantity = parseInt(item.quantity) + parseInt(quantity);
                localStorage.setItem('items', JSON.stringify(items));
                available = true;
            };
        });
        if(!available) {
            products[index].quantity = quantity;
            items.push(products[index])
            localStorage.setItem('items', JSON.stringify(items))
        }
    } else {
        products[index].quantity = quantity;
        items.push(products[index])
        localStorage.setItem('items', JSON.stringify(items))
    }
    countItem();
}


const index = localStorage.getItem('item')
let article = document.querySelector("article");
if(products[index].sale==0) {
    article.innerHTML = `
<div class="product-wrapper">
<div class="image">
    <img src=${products[index].image} alt="">
</div>
<div class="info-product">
    <div class="info-main">
        <h1 class="name">${products[index].title}</h1>
        <div class="rate">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <div class="price">${products[index].price}</div>

        <div class="option">
            <lable>Số lượng: </lable>
            <input type="number" value="1" placeholder="1" min="1">
        </div>
        <div class="buttons">
            <button class="btn-primary">Yêu thích</button>
            <button class="btn-primary" onclick="addItem(this)"  id=${index}>Thêm vào giỏ </button>
        </div>
    </div>
    <p class="details">
        THÔNG TIN SẢN PHẨM: <br>
        ${products[index].details}
        </p>
</div>
</div>
`
} else {
    article.innerHTML = `
<div class="product-wrapper">
<div class="image">
    <img src=${products[index].image} alt="">
</div>
<div class="info-product">
    <div class="info-main">
        <h1 class="name">${products[index].title}</h1>
        <div class="rate">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <div class="price"><del style="text-decoration: line-through; color: black;">${products[index].price}</del><sub style="top: -0.8rem;">VND</sub> &nbsp ${products[index].price-products[index].price*products[index].sale/100}<sub style="top: -0.8rem;">VND</sub></div>

        <div class="option">
            <lable>Số lượng: </lable>
            <input type="number" value="1" placeholder="1" min="1">
        </div>
        <div class="buttons">
            <button class="btn-primary">Yêu thích</button>
            <button class="btn-primary" onclick="addItem(this)"  id=${index}>Thêm vào giỏ </button>
        </div>
    </div>
    <p class="details">
        THÔNG TIN SẢN PHẨM: <br>
        ${products[index].details}
        </p>
</div>
</div>
`
}

