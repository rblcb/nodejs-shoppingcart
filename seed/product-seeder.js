var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://static.giantbomb.com/uploads/scale_small/12/128291/1837361-gothic__cdcovers_cc__front.jpg',
        title: 'Gothic Video Game',
        description: 'Awesome Game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://media.playstation.com/is/image/SCEA/call-of-duty-infinite-warfare-two-column-01-ps4-us-28jun16?$image_block_desktop$',
        title: 'Call of Duty',
        description: 'Amazing Entertainment!',
        price: 20
    }),
    new Product({
        imagePath: 'https://originassets.akamaized.net/content.ts4/images/55482/231.0x326.0/1030930_LB_231x326_en_US_%5E_2016-06-10-08-11-14_84e6c41eb6fbe82b01cd3a314b8ff84226721c51.png',
        title: 'Sims 4',
        description: 'Real life game',
        price: 33.99
    }), new Product({
        imagePath: 'http://fifa18update.com/wp-content/uploads/2016/09/FIFA-18-Neymar-Cover-Image.jpg',
        title: 'FIFA 18',
        description: 'World best football video game',
        price: 99.99
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-ELi82vHWta0WcobKOF1TLTb0oDIbOpM5qf1EYOARyuClmDoMA',
        title: 'Pes 2018',
        description: 'Nothing more description, Try once!',
        price: 109.99
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}