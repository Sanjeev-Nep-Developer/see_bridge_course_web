const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const UserRegistration = require('../models/UserRegistration');
const User = require("../models/user");
require('dotenv').config();



router.get('/login', (req, res) => {
    res.render('authentication/login');
});

router.get('/register', (req, res) => {
    res.render('authentication/register');
});

router.get('/bridge', authenticateToken, (req, res) => {
    res.render('bridgeCourse');
});

router.get('/eng', authenticateToken, (req, res) => {
    res.render('videosPage/english');
});

router.get('/che', authenticateToken, (req, res) => {
    res.render('videosPage/chemistry');
});
router.get('/mat', authenticateToken, (req, res) => {
    res.render('videosPage/math');
});
router.get('/phy', authenticateToken, (req, res) => {
    res.render('videosPage/physics');
});
router.get('/bio', authenticateToken, (req, res) => {
    res.render('videosPage/biology');
});


router.get('/hac',authenticateToken,(req,res) =>{
    res.render('videosPage/hacking')
})

uniquePins = [
    "9@L*#6$X", "*7Z$@3PQ", "$L#*9&2@", "@X7!Z$5Q", "#8@6!L$X",
    "3$*Z7@PQ", "!9$L*8@#", "*2$@PQ3Z", "7@L#*X$9", "$Z5@*7!",
    "@3X$*PQ7", "8#L!9$@", "*Z@7$3Q", "6$L9@*#", "!PQ*5$7",
    "7$*3@ZP", "#9@L$2&", "Z$7!@*5", "*L@2$9&", "5!7$L#@",
    "@*PQ$7Z", "$9#*L@6", "!3$PQ7@", "7Z@*5$!", "#6$L@9*",
    "$PQ7*3@", "*5@7$Z!", "L#9&$@2", "7$@*3PQ", "!2$Z5@#",
    "@6$*7L#", "*PQ3$@7", "Z@5$*7!", "$9*L@2#", "!7$PQ3@",
    "5@7*Z$!", "*L#2@9&", "3!$PQ7@", "7*Z$@5!", "#2@*L$9",
    "Z$7@*5!", "*9$L#2@", "5PQ@*7Z", "@2$*9#L", "7$L!@3#",
    "!9$PQ7@", "6@*L#9$", "$7Z@*5!", "*L$2@9&", "3@*7PQ$"
]


router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ username: username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already taken' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            username: username,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();



        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

let failedAttempts = {}; // Object to store failed login attempts

router.post('/login', async (req, res) => {
    const { username, password, pin } = req.body;

    try {
        // Check if the user has exceeded the maximum number of failed attempts
        if (failedAttempts[username] && failedAttempts[username] >= 3) {
            return res.status(403).json({ message: 'Too many failed login attempts. Please try again later.' });
        }

        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            // Increment failed login attempts count
            failedAttempts[username] = (failedAttempts[username] || 0) + 1;
            return res.status(404).json({ message: 'User not found' });
        }

        // Check password
        if (!bcrypt.compareSync(password, user.password)) {
            // Increment failed login attempts count
            failedAttempts[username] = (failedAttempts[username] || 0) + 1;
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Check pin
        if (!uniquePins.includes(pin)) {
            // Increment failed login attempts count
            failedAttempts[username] = (failedAttempts[username] || 0) + 1;
            return res.status(401).json({ message: 'Invalid pin' });
        }

        // Remove used pin from array
        const index = uniquePins.indexOf(pin);
        uniquePins.splice(index, 1);

        // Reset failed login attempts count
        delete failedAttempts[username];

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        // Set token in a cookie
        res.cookie('token', token, { httpOnly: true });

        // res.json({ message: 'Login successful' });
        res.render('bridgeCourse')
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// Authentication middleware to check token in cookies
function authenticateToken(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        // Redirect the user to the login page if token is not present
        return res.redirect('/login');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            // If there's an error with the token, return a 403 Forbidden status
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
}

module.exports = router;
