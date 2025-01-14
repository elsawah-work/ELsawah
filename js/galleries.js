// GALLERY Web
        jQuery('.web').on('click', function (e) {
            "use strict";
            e.preventDefault();
            var startIndex = jQuery(this).closest('li').data('index');
            jQuery(this).lightGallery({
                dynamic: true,
                dynamicEl: [
                    {
                        'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web1.webp',
                        'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web1-s.webp',
                        'subHtml': '<a class=\"cv-button button\" href=\"https://personal-101.blogspot.com.eg\" target=\"_blank\">Live Demo</a>'
                    },
                    {
                        'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web2.webp',
                        'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web2-s.webp',
                        'subHtml': '<button class=\"button\" href=\"https://personal-14.blogspot.com.eg\" target=\"_blank\">Live Demo</button>'
                    },
                    {
                        'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web3.webp',
                        'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web3-s.webp',
                        'subHtml': '<button class=\"button\" href=\"https://personal-15.blogspot.com.eg\" target=\"_blank\">Live Demo</button>'
                    },
                        {
                        'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web4.webp',
                        'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web4-s.webp',
                        'subHtml': '<button class=\"button\" href=\"https://corporate-14.blogspot.com.eg\" target=\"_blank\">Live Demo</button>'
                    },
                        {
                        'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web5.webp',
                        'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web5-s.webp',
                        'subHtml': '<button class=\"button\" href=\"https://corporate-06.blogspot.com.eg\" target=\"_blank\">Live Demo</button>'
                    },
                    {
                        'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web6.webp',
                        'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web6-s.webp',
                        'subHtml': '<button class=\"button\" href=\"https://corporate-04.blogspot.com.eg\" target=\"_blank\">Live Demo</button>'
                    }
                        
                ],
                index: startIndex, // Start from the clicked image
                mode: 'lg-slide-vertical',
                zoom: true,
                fullScreen: true,
                autoplay: true,
                thumbnail: true,
                download: true,
                counter: true
            });
        });
// GALLERY 3
        jQuery('.openlightbox').on('click', function (e) {
            "use strict";
            e.preventDefault();
            var startIndex = jQuery(this).closest('li').data('index');
            jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        dynamicEl: [
                {
            'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p5.jpg',
            'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p5-s.jpg',
            'subHtml': 'Quae expetendis'
        }, {
            'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p2.jpg',
            'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p2-s.jpg',
            'subHtml': "Lorem ipsum dolor"
        }, {
            'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p4.jpg',
            'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p4-s.jpg',
            'subHtml': "Legam a expetendis"
        }, {
            'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p3.jpg',
            'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p3-s.jpg',
            'subHtml': "Magna quamquam"
        }
],
        index: startIndex, // Start from the clicked image
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: true,
        pause: 5000,
        thumbnail: false,
        download: false,
        counter: true,
                     });
        });
