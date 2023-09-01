const express = require('express');
const router = express.Router();
const { getIndex, getLogin, postLogin, getRegister, getHome }= require('../controllers/mainController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getIndex);
router.get('/login', getLogin);
router.post('/login', postLogin);
router.get('/register', getRegister);
router.post('/register', postRegister);
router.get('/home', getHome);
router.get('/dashboard', authMiddleware, (req, res) => {
    // Solo los usuarios autenticados pueden acceder aquí
    res.render('dashboard');
  });

module.exports = router;
