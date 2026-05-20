const cart = [];

        function openCategoryPage(categoryName) {
            alert(`Funcționalitate în dezvoltare pentru categoria: ${categoryName.toUpperCase()}`);
        }

        function addSubscriptionToCart(name, price) {
            cart.push({ name, price });
            updateCartUI();
            showNotification(`${name} a fost adăugat în coș.`);
        }

        function toggleCart() {
            const panel = document.getElementById('cartPanel');
            if (panel) {
                panel.classList.toggle('active');
            }
        }

        function checkout() {
            showNotification('Comanda este demonstrativă pentru proiectul de Tehnici Web.');
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function updateCartUI() {
            const count = document.getElementById('cartCount');
            const summary = document.getElementById('cartSummary');
            const total = document.getElementById('cartTotal');
            if (count) count.textContent = cart.length;
            if (summary) summary.style.display = cart.length ? 'block' : 'none';
            if (total) {
                const suma = cart.reduce((acc, item) => acc + (typeof item.price === 'number' ? item.price : 0), 0);
                total.textContent = `${suma} RON`;
            }
        }

        function showNotification(message) {
            const notification = document.getElementById('notification');
            if (!notification) return;
            notification.textContent = message;
            notification.classList.add('show');
            setTimeout(() => notification.classList.remove('show'), 2500);
        }

        document.addEventListener('DOMContentLoaded', function () {
            const burgerMenu = document.querySelector('.burger-menu');
            const navMenu = document.querySelector('.nav-menu');

            if (burgerMenu && navMenu) {
                burgerMenu.addEventListener('click', function () {
                    const expanded = burgerMenu.classList.toggle('active');
                    navMenu.classList.toggle('active');
                    burgerMenu.setAttribute('aria-expanded', String(expanded));
                });
            }

            document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    if (!href || href === '#') return;
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });

            window.addEventListener('scroll', function () {
                const backToTop = document.getElementById('link-top');
                if (!backToTop) return;
                if (window.pageYOffset > 300) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            });
        });
