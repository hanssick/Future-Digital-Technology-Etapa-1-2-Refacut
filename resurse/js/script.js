/* ============================================================
   script.js — JavaScript principal
   Etapa 1 + 2: interactivitate pagină
   Autor: Chiriac Ciprian-Mihai | Grupa 211, FMI UniBuc
   ============================================================ */

/* ===== Coș de cumpărături ===== */
const cart = [];

function openCategoryPage(categoryName) {
    alert(`Funcționalitate în dezvoltare pentru categoria: ${categoryName.toUpperCase()}`);
}

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
    showNotification(`${name} a fost adăugat în coș.`);
}

function addSubscriptionToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
    showNotification(`Abonament ${name} adăugat în coș.`);
}

function toggleCart() {
    const panel = document.getElementById('cartPanel');
    if (panel) panel.classList.toggle('active');
}

function checkout() {
    showNotification('Comanda este demonstrativă — proiect Tehnici Web.');
}

function updateCartUI() {
    const count   = document.getElementById('cartCount');
    const summary = document.getElementById('cartSummary');
    const total   = document.getElementById('cartTotal');
    if (count)   count.textContent = cart.length;
    if (summary) summary.style.display = cart.length ? 'block' : 'none';
    if (total) {
        const suma = cart.reduce((acc, item) =>
            acc + (typeof item.price === 'number' ? item.price : 0), 0);
        total.textContent = `${suma} RON`;
    }
    renderCartItems();
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Coșul tău este gol</p>
            </div>`;
        return;
    }
    container.innerHTML = cart.map((item, idx) => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price} RON</div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${idx})">
                <i class="fas fa-trash"></i>
            </button>
        </div>`).join('');
}

function removeFromCart(idx) {
    cart.splice(idx, 1);
    updateCartUI();
}

/* ===== Notificare toast ===== */
function showNotification(message) {
    const notification = document.getElementById('notification');
    if (!notification) return;
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => notification.classList.remove('show'), 2500);
}

/* ===== DOMContentLoaded ===== */
document.addEventListener('DOMContentLoaded', function () {

    /* --- Burger menu --- */
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu    = document.querySelector('.nav-menu');

    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener('click', function () {
            const expanded = burgerMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
            burgerMenu.setAttribute('aria-expanded', String(expanded));
        });

        /* Submeniuri pe mobil */
        document.querySelectorAll('.nav-menu > li').forEach(function (li) {
            const link = li.querySelector('a');
            const sub  = li.querySelector('ul');
            if (link && sub) {
                link.addEventListener('click', function (e) {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        li.classList.toggle('submenu-open');
                    }
                });
            }
        });
    }

    /* --- Smooth scroll pe anchor-uri interne --- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const href   = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* --- Buton înapoi sus (link-top) --- */
    window.addEventListener('scroll', function () {
        const backToTop = document.getElementById('link-top');
        if (!backToTop) return;
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    /* --- Închide coșul la click în afara lui --- */
    document.addEventListener('click', function (e) {
        const panel    = document.getElementById('cartPanel');
        const cartIcon = document.querySelector('.cart-icon');
        if (panel && panel.classList.contains('active')) {
            if (!panel.contains(e.target) && !cartIcon.contains(e.target)) {
                panel.classList.remove('active');
            }
        }
    });
});
