// authMiddleware.js

// Middleware de autenticación personalizado
function auth(req, res, next) {
    if (req.isAuthenticated()) {
      // Si el usuario está autenticado, pasa al siguiente middleware
      return next();
    }
    // Si el usuario no está autenticado, redirige al formulario de inicio de sesión
    res.redirect('/login');
  }
  
  module.exports = auth;
  