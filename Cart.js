let bagItemObj;

onLoad()

function onLoad() {
    bagCounter()
    loadBagObjs()
    displayToCart()
}


//Getting items as per bagItem's IDs
function loadBagObjs() {
    bagItemObj = bagItems.map((itemId) => {
        for (let i = 0; i < products.length; i++) {
            if(itemId == products[i].id) {
                return products[i];
            }
        }
    })
}

//Displaying on Cart Page
function displayToCart() {
    let container = document.querySelector(".items_cart");

    let data = '';
    bagItemObj.forEach((item) => {
        data += `
        <div>
            <img src="${item.image}" alt="product">
            <h2>${item.company} <i class="fa-regular fa-heart"></i></h2>
            <p>${item.item_name}</p>
            <span class="current_price">₹${item.current_price}</span>
            <span class="original_price">₹${item.original_price}</span>
            <span class="discount">(${item.discount}% OFF)</span>
            <button onclick="addToCart(${item.id})">Add to Bag</button>
        </div>`
    })
    container.innerHTML = data;
}