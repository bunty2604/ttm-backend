  const express = require('express');
  const User = require('./models/user');
  const bcrypt = require('bcrypt');
  const jwt = require('jsonwebtoken');
  const cookie = require('cookie-parser');



  const app = express();
  app.use(cookie());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
 




  app.get('/', (req, res) => {
    res.send('index');
  });



  app.get('/register', (req, res) => {
    res.send('register');
  });



  app.post('/register',  (req, res) => {

    let password = "123456";

    bcrypt.genSalt(10, (err, salt) => {

    if (err) {
      console.log(err);
      return;
    }
      
      bcrypt.hash(password, salt, async (err, hash) => {

      let createduser = await User.create({
        name: "bunty",
        email: "bunty@example.com",
        password: hash,
      });

      let token = jwt.sign({ email: createduser.email }, 'bunty', { expiresIn: '1h' });
      res.cookie('token', token);
      res.send(createduser);
      console.log(token);
      
      });
    });
  });






  app.get('/login', (req, res) => {
    res.send('login');

  });




  app.post('/login', async (req, res) => {
    console.log("POST LOGIN HIT");

    const user = await User.findOne({ email: "bunty@example.com" });
    console.log(user);

    if (!user) {
      res.send("User not found");
      return;
    }

    let password = "123456"
   

    const isMatch = await bcrypt.compare(password, user.password);
        console.log(isMatch);

          if (isMatch) {
            let token = jwt.sign({ email: user.email }, 'bunty', { expiresIn: '1h' });
            res.cookie('token', token);
              res.send("Login Success");
              console.log(token);

          } else {
              res.send("Invalid Password");
          }
    });


    app.get('/logout', (req, res) => {
      res.clearCookie('token');
      res.send("Logout Success");
    });

  




  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });