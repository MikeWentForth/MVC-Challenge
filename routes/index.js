const router = require('express').Router();
//const apiRoutes = require('./api');

//router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.send("<h1>Wrong Route!</h1>")
// });

// Default/home/index route
router.get('/', async (req, res) => {
    res.render('index', {layout : 'main'});
});

router.get('/login', async (req,res) => {
    res.render('login', {layout : 'main'});
});

router.get('/signup', async (req,res) => {
    res.render('signup', {layout : 'main'});
});




module.exports = router;