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
        if (checkoutEl) checkoutEl.hidden = true;
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

    const checkoutEl = document.getElementById('checkout');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutForm = document.getElementById('checkout-form');
    const cancelCheckout = document.getElementById('cancel-checkout');
    const cardFields = document.getElementById('card-fields');
    const paymentNote = document.getElementById('payment-note');
    const checkoutSuccess = document.getElementById('checkout-success');

    function money(n) {
        return '$' + Number(n).toLocaleString('en-US');
    }

    function syncCheckoutSummary() {
        const cart = getCart();
        const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
        const count = cart.reduce((sum, item) => sum + item.qty, 0);
        document.getElementById('checkout-count').textContent = count;
        document.getElementById('checkout-total').textContent = money(total);
    }

    function toggleCardFields(method) {
        const showCard = method === 'card';
        cardFields.hidden = !showCard;
        paymentNote.hidden = showCard;
        cardFields.querySelectorAll('input').forEach(input => {
            input.required = showCard;
        });
        paymentNote.textContent = method === 'cod'
            ? 'Pay in cash when your order arrives.'
            : 'Pay with ABA KHQR after we confirm the order. No card details needed.';
    }

    if (cartPage && checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (getCart().length === 0) {
                checkoutEl.hidden = true;
                return;
            }
            checkoutSuccess.hidden = true;
            syncCheckoutSummary();
            checkoutEl.hidden = false;
            checkoutEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });

        cancelCheckout.addEventListener('click', () => {
            checkoutEl.hidden = true;
        });

        checkoutForm.addEventListener('change', e => {
            if (e.target.name === 'payment') toggleCardFields(e.target.value);
        });

        checkoutForm.addEventListener('submit', e => {
            e.preventDefault();
            const cart = getCart();
            if (cart.length === 0) return;

            saveCart([]);
            displayCart();
            syncCheckoutSummary();
            checkoutForm.reset();
            toggleCardFields('card');
            checkoutSuccess.hidden = false;
        });

        toggleCardFields('card');
    }
}