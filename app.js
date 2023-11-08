const express = require('express');
const path = require('path');
const hbs = require('hbs');
const compression = require('compression');
const morgan = require('morgan');
// const dotenv = require('dotenv');
const cors = require('cors');
// dotenv.config();
// const expressValidator = require('express-validator');

const app = express();
const userRouter = require('./routers/userRouter.js');

const PORT = process.env.PORT || 9000;

//importamos las rutas como un middelware
const userRoutes = require('./routers/userRouter.js');
// const productRouter = require('./routers/productRouter.js');
// const registroRoutes = require('./routers/registroRouter.js');

app.use(cors());
app.use(morgan('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.use('/user', userRoutes);
// app.use('/producto', productRouter);
// app.use('/registro', registroRoutes);

app.get('/', (req, res)=>{
    res.render('index')
});

module.exports = app;