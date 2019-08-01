var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');
var products = [
    new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title: 'Gothic Video Game',
    description: 'Awesome Game...!!!',
    price: 10,
    id:101
    }),
    new Product({
    imagePath: 'https://www.gannett-cdn.com/-mm-/ac688eec997d2fce10372bf71657297ff863814d/c=171-0-1195-768/local/-/media/2018/12/04/USATODAY/usatsports/call-of-duty-black-ops-iiii.jpg?width=540&height=405&fit=crop',
    title: 'Call of duty',
    description: 'The Xbox One release of the latest in Activision’s highly successful spinoff of the “Call of Duty” series has sold over 1 million units in its first week of sales. The previous edition of the game, “Black Ops 3,” which was released about three years ago, sold about 7.3 million units worldwide since.',
    price: 30,
    id:102
    }),
    new Product({
    imagePath: 'https://en.wikipedia.org/wiki/Singularity_(video_game)#/media/File:Singularity_cover.jpg',
    title: 'Singularity',
    description: 'Singularity is a 2010 first-person shooter video game developed by Raven Software and published by Activision and released for Microsoft Windows, PlayStation 3 and Xbox 360.',
    price: 35,
    id:103
    }),
    new Product({
    imagePath: 'https://im.ziffdavisinternational.com/ign_ap/screenshot/t/top-five-nonviolent-games/top-five-nonviolent-games_gny7.jpg',
    title: 'From Dust',
    description: 'From Dust is a god video game, designed by Éric Chahi and developed by Ubisoft Montpellier. The game was released for Microsoft Windows, PlayStation Network, and Xbox Live Arcade in 2011.',
    price: 15,
    id:104
    }),
    new Product({
    imagePath: 'https://im.ziffdavisinternational.com/ign_ap/screenshot/t/top-five-nonviolent-games/top-five-nonviolent-games_qax7.jpg',
    title: 'Walking Mars',
    description: 'Waking Mars is a platform-adventure game produced by Tiger Style in which players jetpack through underground Mars caves and encounter a host of alien lifeforms that operate as an ecosystem.',
    price: 12,
    id:105
    }),
    new Product({
    imagePath: 'https://im.ziffdavisinternational.com/ign_ap/screenshot/t/top-five-nonviolent-games/top-five-nonviolent-games_zwef.jpg',
    title: 'Journey',
    description: 'Journey is an arcade game released by Bally Midway in 1983. Rock band Journey had enjoyed major success in the early 1980s, and Bally/Midway decided to ride this wave of popularity by creating an arcade game based on the group.',
    price: 17,
    id:106
    }),
    new Product({
    imagePath: 'https://im.ziffdavisinternational.com/ign_ap/screenshot/t/top-five-nonviolent-games/top-five-nonviolent-games_g11k.jpg',
    title: 'Vessel',
    description: 'Vessel is a physics-based steampunk puzzle-platform video game, developed by Strange Loop Games and published by indiePub. It was released March 1, 2012 for Microsoft Windows, for Linux on December 10, 2012 and for PlayStation 3 on March 11, 2014.',
    price: 28,
    id:107
    }),
    new Product({
    imagePath: 'https://en.wikipedia.org/wiki/The_Messenger_(2018_video_game)#/media/File:MessengerHeader.png',
    title: 'The Messanger',
    description: 'The Messenger is an action-platform video game developed by Canadian indie team Sabotage Studio and published by Devolver Digital. It was released on Microsoft Windows and Nintendo Switch on August 30, 2018 and later ported to PlayStation 4 on March 19, 2019.',
    price: 19,
    id:108
    }),
    new Product({
    imagePath: 'https://gameranx.com/wp-content/uploads/2018/02/the-surge-2-700x395.jpg',
    title: 'Surge 2',
    description: 'This is a science fiction action RPG that took inspirations from the Souls series but in a futuristic setting. From The Surge, we know that the planet has been slowly dying with most of the resources were used up causing environmental diseases.',
    price: 55,
    id:109
    }),
]; 
var done = 0;
for (var i=0; i < products.length; i++) {
    products[i].save((err, doc)=>{
        done++;
        if(done == products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}

