const router = require('express').Router();
//const apiRoutes = require('./api');
const User = require('../models/User');
const BlogPost = require('../models/BlogPost');
const bcrypt = require('bcrypt');


//router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.send("<h1>Wrong Route!</h1>")
// });

// Default/home/index route
router.get('/', async (req, res) => {


    try {
        console.log("Fetching blogpost records");
        let results = await BlogPost.findAll();

        //res.json(results);
        console.log(results);
        console.log(results[0].dataValues.title);
        res.render('index', {
            layout : 'main',
            posts: results,
            loggedIn: req.session.loggedIn === true
        });

    } catch (err) {
        res.status(500).json(err)
    }


});

// SIGNIN / LOGIN
router.get('/login', async (req,res) => {
    res.render('login', {
        layout : 'main',
        loggedIn: req.session.loggedIn === true
    });
});

router.post('/login', async (req,res) => {

    console.log("LOGIN FORM RECEIVED");

    // Validate the incoming data: email address and password
    // If not valid, then bounce back the login form with a notice message....
    let email = req.body.email.trim();
    let pw = req.body.password.trim();

    // If valid, then do a database lookup for a matching user record.
    // Would do this for a real, public system.

    // If a matching user record is found, then complete the login
    // ... set session variables and redirect to the user dashboard or homepage
    const results = await User.findOne({ where: { email: email} });
    console.log(results);
    if (results === null) {
      res.json("User Not found");
    } else {
        // Compare the password  XXXXXXXXXXXXXXXXXX compare isn't working.
        if (bcrypt.compare(results.password,pw)) {
            console.log("LOGIN IS GOOD.");
            // Set session
            // Redirect
        } else {
            console.log("LOGIN IS BAD -- NO PASSWORD MATCH.");

        }
      res.json(results);
    }

    // If no matching record is found, then bounce back to the login page with a notice message.

});


// SIGNUP
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