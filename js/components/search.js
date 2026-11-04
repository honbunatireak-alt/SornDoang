const authorSearch = document.getElementById('authorSearch');
authorSearch.addEventListener('input', e => {
    const value = e.target.value.toLowerCase().trim();
    document.querySelectorAll('figure').forEach(card => {
        const match = card.textContent.toLowerCase().includes(value);
        card.style.display = match ? '' : 'none';
    });
    document.querySelectorAll('section').forEach(section => {
        const cards = [...section.querySelectorAll('figure')];
        const anyVisible = value === '' || cards.some(c => c.style.display !== 'none');
        section.style.display = anyVisible ? '' : 'none';
        
        const heading = section.previousElementSibling;
        if (heading && heading.tagName === 'H3') {
            heading.style.display = anyVisible ? '' : 'none';
        }
    });
});