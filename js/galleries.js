// GALLERY 1
        jQuery('#gallery1').on('click', function (e) {
            "use strict";
            e.preventDefault();

            // Get the index of the clicked image
            var startIndex = jQuery(this).closest('li').data('index');

            // Initialize lightGallery
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
// GALLERY 2
jQuery('#gallery2').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplayControls: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Videos
        dynamicEl: [
            {
                "src": "http://vimeo.com/70301553",
                "subHtml": "Vimeo"
            },
            { // You Tube videos work only on a server.
                "src": "http://www.youtube.com/embed/efVWyPNd3xw",
                "subHtml": "You Tube"
            }
        ]
    });
});

// GALLERY 3
jQuery('#gallery3').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: true,
        pause: 5000,
        thumbnail: false,
        download: false,
        counter: true,
        // Images
        dynamicEl: [{
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
        }]
    })
});

// GALLERY 4
jQuery('#gallery4').on('click', function (e) {
    "use strict";
    e.preventDefault();
    jQuery(this).lightGallery({
        // Settings
        dynamic: true,
        mode: 'lg-slide-vertical',
        zoom: true,
        fullScreen: true,
        autoplay: false,
        thumbnail: true,
        download: true,
        counter: true,
        // Images
        dynamicEl: [{
            'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p2.jpg',
            'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p2-s.jpg',
            'subHtml': 'Tamen excepteur'
        }, {
            'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p5.jpg',
            'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p5-s.jpg',
            'subHtml': "Iudicem admodum"
        }, {
            'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p4.jpg',
            'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p4-s.jpg',
            'subHtml': "Enim pariatur"
        }]
    })
});
