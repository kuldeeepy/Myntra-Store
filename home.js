let bagItems = [];

function onLoad() {
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayToHome()
    updateTimer()
    bagCounter()
    // clearCart()
}

onLoad();

//DISPLAY PRODUCTS
function displayToHome() {
    let container = document.querySelector(".items");
    let data = '';
    products.map(product => {
        data += `
        <div>
            <img src="${product.image}" alt="product">
            <h2>${product.company} <i class="fa-regular fa-heart"></i></h2>
            <p>${product.item_name}</p>
            <span class="current_price">₹${product.current_price}</span>
            <span class="original_price">₹${product.original_price}</span>
            <span class="discount">(${product.discount}% OFF)</span>
            <button onclick="addToCart(${product.id})">Add to Bag</button>
        </div>`
    });
    container.innerHTML = data;
}


//TIMER
function updateTimer() {
    let sec = 0;
    let second = document.querySelector('.sec');

    setInterval(() => {
        sec++;
        sec === 60 ? sec = 0 : '';
        second.innerHTML = sec;
    }, [1000])


    window.onload = function() {
        value = [];
    }
}


//CART
function addToCart(prop) {
    bagItems.push(prop);
    localStorage.setItem('bagItems', JSON.stringify(bagItems))
    bagCounter()
}

function clearCart() {
    localStorage.removeItem('bagItems');
}
// clearCart()

//BAG ICON Updation & Visibility
function bagCounter() {
    let bagIcon = document.querySelector('.bagIcon');
    bagIcon.innerHTML = bagItems.length
    bagItems.length == 0 ?
    bagIcon.style.visibility = 'hidden' : '';

    bagItems.length > 0 ?
    bagIcon.style.visibility = 'visible' : '';
}

function scroller() {
    console.log('You want menu??');
}
