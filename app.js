  const express = require('express');
  const User = require('./models/user');
  const bcrypt = require('bcrypt');
  const jwt = require('jsonwebtoken');
  const cookie = require('cookie-parser');
  const cors = require('cors');
  const connectDB = require('./config/db');


  connectDB();


  const app = express();
  app.use(cors({
    origin: 'http://localhost:5176',
    credentials: true
  }));
  app.use(cookie());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
 




  app.get('/', (req, res) => {
    res.send('index');
  });



  app.get('/register', (req, res) => {
    res.send('register');
  });



  app.post('/register', async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);

      const createduser = await User.create({
        name,
        email,
        password: hash,
      });

      const token = jwt.sign({ email: createduser.email }, 'bunty', { expiresIn: '1h' });
      res.cookie('token', token, { httpOnly: true });
      res.status(201).json({ status: 'success', data: createduser });
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: 'fail', message: 'Failed to register user' });
    }
  });






  app.get('/login', (req, res) => {
    res.send('login');

  });




  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ status: 'fail', message: 'User not found' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        const token = jwt.sign({ email: user.email }, 'bunty', { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ status: 'success', message: 'Login Success' });
      } else {
        res.status(401).json({ status: 'fail', message: 'Invalid Password' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ status: 'fail', message: 'Login failed' });
    }
  });


    app.get('/logout', (req, res) => {
      res.clearCookie('token');
      res.status(200).json({ status: 'success', message: 'Logout Success' });
    });

  




  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });