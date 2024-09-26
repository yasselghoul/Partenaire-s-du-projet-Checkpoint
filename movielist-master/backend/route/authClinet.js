
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const express = require ('express')

const User = require('../model/auth')

const userRoute = express.Router()

const JWT_SECRET = process.env.JWT_SECRET




// Route d'inscription 
userRoute.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, password: hashedPassword });
      await user.save();
      res.status(201).send('User created');
    } catch (error) {
      res.status(500).send('Error creating user');
    }
  });
  
  // Route de connexion
  userRoute.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(401).send('Invalid credentials');
      }
    } catch (error) {
      res.status(500).send('Error logging in');
    }
  });
  
module.exports= userRoute