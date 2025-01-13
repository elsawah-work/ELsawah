// GALLERY Web
        jQuery('.web').on('click', function (e) {
            "use strict";
            e.preventDefault();
            var startIndex = jQuery(this).closest('li').data('index');
            jQuery(this).lightGallery({
                dynamic: true,
                dynamicEl: [
                    {
                        'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p1.jpg',
                        'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p1-s.jpg',
                        'subHtml': 'Lorem ipsum dolor'
                    },
                    {
                        'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p2.jpg',
                        'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p2-s.jpg',
                        'subHtml': 'Ullamco ubi mandaremus'
                    },
                    {
                        'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p3.jpg',
                        'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p3-s.jpg',
                        'subHtml': 'Quae expetendis'
                    },
                    {
                        'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p4.jpg',
                        'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p4-s.jpg',
                        'subHtml': 'Non nulla'
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
