// needs cartCount.js loaded first (it defines getCart and updateCartCount)

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function displayCart() {
    const cart = getCart();
    const container = document.querySelector('.cart-items');
    const subtotalEl = document.querySelector('.subtotal');
    const grandTotalEl = document.querySelector('.grand-total');

    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<p>Your cart is empty.</p>';
        subtotalEl.textContent = '$0';
        grandTotalEl.textContent = '$0';
        return;
    }

    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <figure class="product">
                <img src="${item.image}" alt="${item.title}">
                <div class="item-detail">
                    <h4>${item.title}</h4>
                    <div class="cpu-ram-gpu-ssd">
                        ${item.specs.slice(0, 4).map(s => `<span>${s}</span>`).join('')}
                    </div>
                </div>
                <span class="price">$${item.price.toLocaleString('en-US')}</span>
                <div class="quantity">
                    <input type="number" value="${item.qty}" min="1" data-index="${index}">
                </div>
                <span class="total-price">$${itemTotal.toLocaleString('en-US')}</span>
                <button class="remove" data-index="${index}"><i class="fa-solid fa-xmark"></i></button>
            </figure>
        `;
        container.appendChild(cartItem);
    });

    subtotalEl.textContent = '$' + subtotal.toLocaleString('en-US');
    grandTotalEl.textContent = '$' + subtotal.toLocaleString('en-US');
}

const cartPage = document.getElementById('cart');

if (cartPage) {
    displayCart();

    const container = document.querySelector('.cart-items');

    container.addEventListener('click', e => {
        const btn = e.target.closest('.remove');
        if (!btn) return;
        const cart = getCart();
        cart.splice(btn.dataset.index, 1);
        saveCart(cart);
        displayCart();
    });

    container.addEventListener('change', e => {
        if (!e.target.matches('.quantity input')) return;
        const cart = getCart();
        cart[e.target.dataset.index].qty = Math.max(1, parseInt(e.target.value) || 1);
        saveCart(cart);
        displayCart();
    });
}