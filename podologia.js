
        // Lógica simple para el menú móvil
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Efecto de scroll en el header
        window.addEventListener('scroll', function() {
            if (window.scrollY > 20) {
                document.body.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
            }
        });

        // Funciones para el modal de imágenes
        function openModal(beforeImg, afterImg, title) {
            const modal = document.getElementById('imageModal');
            const modalBeforeImg = document.getElementById('modalBeforeImg');
            const modalAfterImg = document.getElementById('modalAfterImg');
            const modalTitle = document.getElementById('modalTitle');
            
            modalBeforeImg.src = beforeImg;
            modalAfterImg.src = afterImg;
            modalTitle.textContent = title;
            
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';

            // Cerrar modal con la tecla ESC
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeModal();
                }
            });

            // Cerrar modal al hacer clic fuera
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }

        function closeModal() {
            const modal = document.getElementById('imageModal');
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }

        // Funciones para el modal de imágenes de trabajo
        function openTrabajoModal(imgSrc, description) {
            const modal = document.getElementById('trabajoModal');
            const modalImg = document.getElementById('trabajoModalImg');
            const modalText = document.getElementById('trabajoModalText');
            
            modalImg.src = imgSrc;
            modalImg.alt = description;
            modalText.textContent = description;
            
            modal.classList.remove('hidden');
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';

            // Cerrar modal con la tecla ESC
            const escFunction = function(e) {
                if (e.key === 'Escape') {
                    closeTrabajoModal();
                    document.removeEventListener('keydown', escFunction);
                }
            };
            document.addEventListener('keydown', escFunction);
        }

        function closeTrabajoModal() {
            const modal = document.getElementById('trabajoModal');
            modal.classList.remove('show');
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }