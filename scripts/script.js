const coupon = document.getElementById('coupon');
const btn = document.getElementById('apply-coupon');



function couponCode() {
    if (coupon.value == 'SELL200') {
        const totalPrice = document.getElementById('total-price').innerText;
        const totalPriceValue = parseFloat(totalPrice);
        const discount = document.getElementById('discount-price').innerText;
        const discountValue = parseFloat(discount);
        const discountTotal = (totalPrice * 0.2).toFixed(2);
        document.getElementById('discount-price').innerText = discountTotal;
        document.getElementById('total').innerText = (totalPriceValue - discountTotal).toFixed(2)
    }
}


function addMoney(value) {
    const totalPrice = document.getElementById('total-price').innerText;
    const totalPriceValue = parseFloat(totalPrice);
    const productPrice = document.getElementById(value).innerText;
    const productPriceValue = parseFloat(productPrice);
    const newTotalPrice = (productPriceValue + totalPriceValue).toFixed(2);
    document.getElementById('total-price').innerText = newTotalPrice;
    document.getElementById('total').innerText = newTotalPrice;
    if (parseFloat(newTotalPrice) >= 200) {
        btn.disabled = false;
    }
    else {
        btn.disabled = true;
    }
}

function enable(){
    const purchaseBtn = document.getElementById('make-purchase');

if(parseFloat(document.getElementById('total').innerText) !== 0){
    purchaseBtn.disabled = false;
}
else{
    purchaseBtn.disabled = true;
}
}

function addToCart(name){
    const parent = document.getElementById('cart');
    const newEntry = document.getElementById(name).innerText;
    const li = document.createElement('li');
    li.innerText = newEntry;
    parent.appendChild(li);

}

function refresh(){
    document.getElementById('total-price').innerText = '00.00';
    document.getElementById('total').innerText = '00.00';
    document.getElementById('discount-price').innerText = '00.00';
    coupon.value = '';
    document.getElementById('cart').innerHTML = '';
    document.getElementById('make-purchase').disabled = true;
    btn.disabled = true;
}