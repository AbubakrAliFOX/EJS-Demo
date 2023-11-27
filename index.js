const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/cats', (req, res) => {
    const cats = ['Brack', 'Tiffany', 'Sanders', 'Shaquella', 'Otombe'];
    res.render('cats.ejs', {cats});
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    console.log(data)
    res.render('subreddit.ejs', {dat});
})


app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 256);
    res.render('random.ejs', {rand: num});
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

