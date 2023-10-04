const BlogPost = require('../models/BlogPost');

const postData = [
  {
    title: "Is the Earth really flat?",
    content: "Information about how wonderfully misinformed people can be",
    comment_date: "09/20/2023",
    user_id: 1
  },
  {
    title: "What lurks in the sky when the moon is out",
    content: "Information about using your eyes and seeing for yourself.",
    comment_date: "05/21/2023",
    user_id: 1
  },
  {
    title: "How colorful should you paint your animal and are Zebra stripes ok?",
    content: "Information about dog and cat parenting ideas.",
    comment_date: "03/05/2023",
    user_id: 1
  },
  {
    title: "Cooking with artificial/rubber food",
    content: "Information about various ideas not to follow through with.",
    comment_date: "01/28/2023",
    user_id: 1
  }
];

const seedPosts = () => BlogPost.bulkCreate(postData);

module.exports = seedPosts;
