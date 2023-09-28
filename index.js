// Initialize Express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Add sessions support
const session = require('express-session');
app.use(session({
  resave: true, 
  saveUninitialized: true, 
  secret: 'XCR3rsasa%RDHHH', 
  cookie: { maxAge: 60000 }
}));

// Add routes support
const routes = require('./routes');
app.use(routes);

// Integrate handlebars...
// XXXXXXXXXXX NEED TO GET HANDLEBARS INTEGRATED
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Integrate sequelize
const sequelize = require('./config/connection');

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});




// PACKAGES INSTALLED
// mysql2 -- INSTALLED
// express -- INSTALLED
// express-handlebars -- INSTALLED
// sequelize -- base and mysql extension INSTALLED
// dotenv -- INSTALLED
// bcrypt -- INSTALLED
// express-session -- INSTALLED
// connect-session-sequelize -- INSTALLED
// nodemon -- INSTALLED


// GIVEN a CMS-style blog site

// WHEN I visit the site for the first time
// THEN I am presented with the homepage, which includes 
//      existing blog posts if any have been posted;  XXXXXXXXXXXXX
//      navigation links for the homepage and the dashboard; -- DONE
//      and the option to log in -- DONE

// WHEN I click on the homepage option
// THEN I am taken to the homepage --DONE

// WHEN I click on any other links in the navigation
// THEN I am prompted to either sign up or sign in --DONEXXXXXXXX

// WHEN I choose to sign up
// THEN I am prompted to create a username and password -- DONE

// WHEN I click on the sign-up button
// THEN my user credentials are saved and I am logged into the site XXXXXXXXX

// WHEN I revisit the site at a later time and choose to sign in XXXXXXXXXX
// THEN I am prompted to enter my username and password

// WHEN I am signed in to the site
// THEN I see navigation links for the homepage, the dashboard, and the option to log out

// WHEN I click on the homepage option in the navigation
// THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

// WHEN I click on an existing blog post
// THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

// WHEN I enter a comment and click on the submit button while signed in
// THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

// WHEN I click on the dashboard option in the navigation
// THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

// WHEN I click on the button to add a new blog post
// THEN I am prompted to enter both a title and contents for my blog post

// WHEN I click on the button to create a new blog post
// THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

// WHEN I click on one of my existing posts in the dashboard
// THEN I am able to delete or update my post and taken back to an updated dashboard

// WHEN I click on the logout option in the navigation
// THEN I am signed out of the site

// WHEN I am idle on the site for more than a set time
// THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts
