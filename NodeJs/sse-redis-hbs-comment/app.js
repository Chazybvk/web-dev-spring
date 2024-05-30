const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main", helpers: {
        getShortComment(comment) {
            if (comment.length < 64) {
                return comment;
            }
            return comment.substring(0, 61) + '...';
        }
}}));


app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
           posts: [
            {
                author: 'Janith Kasun',
                image: 'https://avatars.mds.yandex.net/i?id=c5be6c5e4a80ccc2b506dbb37fb6f28f119b4a0e-11941915-images-thumbs&n=13',
                listGroup: 1,
                comments: [
                    'This is the first comment',
                    'This is the second comment',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec fermentum ligula. Sed vitae erat lectus.'
                ]
            },
            {
                author: 'John Doe',
                image: 'https://avatars.mds.yandex.net/i?id=c5be6c5e4a80ccc2b506dbb37fb6f28f119b4a0e-11941915-images-thumbs&n=13',
                listGroup: 2,
                comments: [
                ]
            }
        ]
    });
});

app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});


