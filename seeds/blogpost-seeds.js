const BlogPost = require('../models/BlogPost');

const postData = [
  {
    title: "The Blogs are Upon Us",
    content: "Information about how the blogs are upon us.",
    comment_date: "09/20/2023",
    user_id: 1
  },
  {
    title: "The Blogs are Upon Us",
    content: "Information about how the blogs are upon us.",
    comment_date: "09/20/2023",
    user_id: 1
  },
  {
    title: "The Blogs are Upon Us",
    content: "Information about how the blogs are upon us.",
    comment_date: "09/20/2023",
    user_id: 1
  },
  {
    title: "The Blogs are Upon Us",
    content: "Information about how the blogs are upon us.",
    comment_date: "09/20/2023",
    user_id: 1
  }
];

const seedPosts = () => BlogPost.bulkCreate(postData);

module.exports = seedPosts;
