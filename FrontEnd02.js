let total = 0;

function addToCart(name, price) {
    const cartItems = document.getElementById('cart-items');

    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';

    const itemName = document.createElement('span');
    itemName.textContent = name;

    const itemPrice = document.createElement('span');
    itemPrice.textContent = `${price}원`;

    const removeButton = document.createElement('button');
    removeButton.textContent = '삭제';
    removeButton.onclick = () => {
        cartItems.removeChild(cartItem);
        total -= price;
        updateTotal();
    };

    cartItem.appendChild(itemName);
    cartItem.appendChild(itemPrice);
    cartItem.appendChild(removeButton);
    cartItems.appendChild(cartItem);

    total += price;
    updateTotal();
}

function updateTotal() {
    document.getElementById('total-price').textContent = `${total}원`;
}

function checkout() {
    alert(`총 결제 금액은 ${total}원입니다.`);
    document.getElementById('cart-items').innerHTML = '';
    total = 0;
    updateTotal();
}
