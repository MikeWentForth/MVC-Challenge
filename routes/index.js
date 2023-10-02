const router = require('express').Router();
//const apiRoutes = require('./api');
const User = require('../models/User');

//router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.send("<h1>Wrong Route!</h1>")
// });

// Default/home/index route
router.get('/', async (req, res) => {
    res.render('index', {
        layout : 'main',
        loggedIn: req.session.loggedIn === true
    });
});

router.get('/login', async (req,res) => {
    res.render('login', {
        layout : 'main',
        loggedIn: req.session.loggedIn === true
    });
});

router.get('/signup', async (req,res) => {
    res.render('signup', {
        layout : 'main',
        loggedIn: req.session.loggedIn === true
    });
});

router.post("/signup", async (req,res) => {
    // Receive post data from the signup form
    let userName = req.body.nameInput.trim();
    let email = req.body.emailInput.trim();
    let pw1 = req.body.password1Input.trim();
    let pw2 = req.body.password2Input.trim();

    //console.log(req.body);
    
    // Validate the data
    // Check username, email, and pw length
    // Do the passwords match?
    // XXXXXXXXXX

    // See if user already exists: (check for email)
    // XXXXXXXX

    // Create a user record
    await User.create({
        name: userName,
        email: email,
        password: pw1
    });

    // Register logged in with the session
    req.session.loggedIn = true;
 
    // Redirect to homepage?
    res.redirect("/");

});


module.exports = router;