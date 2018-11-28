const express = require('express');
const exphb = require('express-handlebars');

const app = express();

app.engine('handlebars', exphb({
    defaultLayout: 'main'
}))

app.set('view engine', 'handlebars');
app.use(express.static('assets'))

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('home.handlebars');
})

app.listen(port, () => {
    console.log(`Server started on Port: ${port}`);
})