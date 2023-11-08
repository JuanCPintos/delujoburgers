
//Ruta de Usuarios
//usuario/login
//usuario/home

const express = require('express');
const router = express.Router();
const { check } = require('express-validator');


const {
    // iniciarSesion
    userRegistro,
    userLoginForm,
    userCreate,
    userLogin
} = require('../controllers/userController.js');

//Rutas
router.get('/', userRegistro);

router.get('/login', userLoginForm)

router.post(
    '/',
    [
        check('nombre').isLength({ min: 4 }),
        check('email').isEmail(),
        check('password').isLength({ min: 8 })
    ],
    userCreate
);

router.post(
    '/login',
    [
        check('email').isEmail(),
        check('password').isLength({ min: 8 })
    ],
    userLogin
);

// router.put('/update/:id', (req,res)=>{

//     let usuario = req.params.id;

//     console.log(`El id recibido es ${usuario}`);

//     res.send(`<h1>Usuario Actualizado ${usuario}</h1>`);
// })


// router.delete('/delete/:id', (req,res)=>{

//     let usuario = req.params.id;

//     console.log(`El id recibido es ${usuario}`);

//     res.send(`<h1>Usuario Eliminado ${usuario}</h1>`);
// })

//exportamos el modulo router
module.exports = router;