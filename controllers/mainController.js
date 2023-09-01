const nodemailer = require('nodemailer');

class MainController {
  static getIndex(req, res) {
    res.render('index');
  }

  static getLogin(req, res) {
    res.render('login');
  }

  static postLogin(req, res) {
    
    res.redirect('/home');
  }

  static getRegister(req, res) {
    res.render('register');
  }

  static postRegister(req, res) {
    
    res.redirect('/home');
  }

  static getHome(req, res) {
    res.render('index');
  }

  static async postRegister(req, res) {
    const { username, password, email } = req.body;

    try {
      
      const newUser = new User({
        username,
        password, 
        email
      });


      await newUser.save();

      
      res.redirect('/home');
    } catch (error) {
      console.error('Error during registration:', error);
      res.redirect('/register'); 
  }

  static async sendContactForm(req, res) {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
      }
    });

    const mailOptions = {
      from: email,
      to: 'recipient@example.com',
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
      await transporter.sendMail(mailOptions);
      res.redirect('/home');
    } catch (error) {
      console.error('Error sending email:', error);
      res.redirect('/home');
    }
  }
}

module.exports = MainController;
