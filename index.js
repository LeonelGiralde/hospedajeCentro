document.addEventListener('DOMContentLoaded', function() {
        let menuToggle = document.querySelector('.menu-toggle')
        let navLinks = document.querySelector('.nav-links')
        
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('mobile-menu')
        });

        document.querySelectorAll('nav ul li a').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                navLinks.classList.remove('mobile-menu');
            })
        })
    })

