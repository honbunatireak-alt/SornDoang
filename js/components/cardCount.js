function getCart() {
    try { return JSON.parse(localStorage.getItem('cart')) || []; }
    catch { return []; }
}

function updateCartCount() {
    const count = getCart().reduce((n, i) => n + i.qty, 0);
    document.querySelectorAll('.card-item-count').forEach(el => {
        el.textContent = count || '';
    });
}

updateCartCount();