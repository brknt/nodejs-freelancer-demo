const express = require('express');
const ejs = require('ejs');


const pageRoute = require('./routes/pageRoute');

const app = express();





// TEMPLATE ENGINE
app.set('view engine', 'ejs');


// MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());





app.use('/', pageRoute.routes);


const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`App started on port ${PORT}`);
})