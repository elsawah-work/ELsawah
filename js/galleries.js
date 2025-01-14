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
                        'subHtml': '<a class=\"cv-button button\" href=\"https://personal-101.blogspot.com.eg\" target=\"_blank\" style=\"margin-bottom: 100px;font-weight: bold;\">Live Demo</a>'
                    },
                    {
                        'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web2.webp',
                        'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web2-s.webp',
                        'subHtml': '<a class=\"cv-button button\" href=\"https://personal-14.blogspot.com.eg\" target=\"_blank\" style=\"margin-bottom: 100px;font-weight: bold;\">Live Demo</a>'
                    },
                    {
                        'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web3.webp',
                        'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web3-s.webp',
                        'subHtml': '<a class=\"cv-button button\" href=\"https://personal-15.blogspot.com.eg\" target=\"_blank\" style=\"margin-bottom: 100px;font-weight: bold;\">Live Demo</a>'
                    },
                        {
                        'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web4.webp',
                        'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web4-s.webp',
                        'subHtml': '<a class=\"cv-button button\" href=\"https://corporate-14.blogspot.com.eg\" target=\"_blank\" style=\"margin-bottom: 100px;font-weight: bold;\">Live Demo</a>'
                    },
                        {
                        'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web5.webp',
                        'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web5-s.webp',
                        'subHtml': '<a class=\"cv-button button\" href=\"https://corporate-06.blogspot.com.eg\" target=\"_blank\" style=\"margin-bottom: 100px;font-weight: bold;\">Live Demo</a>'
                    },
                    {
                        'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web6.webp',
                        'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/web6-s.webp',
                        'subHtml': '<a class=\"cv-button button\" href=\"https://corporate-04.blogspot.com.eg\" target=\"_blank\" style=\"margin-bottom: 100px;font-weight: bold;\">Live Demo</a>'
                    }
                        
                ],
                index: startIndex, // Start from the clicked image
                mode: 'lg-slide-vertical',
                zoom: true,
                fullScreen: true,
                autoplay: true,
                thumbnail: true,
                download: true,
                counter: true,
                pause: 10000
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
            'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p2.jpg',
            'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p2-s.jpg',
            'subHtml': 'المصور الجيد هو الذي يعرف أين وكيف يقف.'
        }, {
            'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p3.jpg',
            'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p3-s.jpg',
            'subHtml': 'التصوير الفوتوغرافي يساعد الناس على الرؤية.'
        }, {
            'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p4.jpg',
            'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p4-s.jpg',
            'subHtml': 'الصور موجودة ، عليك فقط التقاطها.'
        }, {
            'src': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p5.jpg',
            'thumb': 'https://raw.githack.com/elsawah-work/ELsawah/refs/heads/master/images/photos/p5-s.jpg',
            'subHtml': 'أينما كان هناك ضوء ، يمكن للمرء أن يصور.'
        }
],
        index: startIndex, // Start from the clicked image
        mode: 'lg-slide-vertical',
        zoom: false,
        fullScreen: false,
        autoplay: true,
        pause: 10000,
        thumbnail: false,
        download: false,
        counter: true,
                     });
        });
