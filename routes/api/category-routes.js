const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// ADDED async so we could use await....
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  
  try {
    let results = await Category.findAll({
      include: [Product],
    })
    res.json(results);
  } catch (err) {
    res.status(500).json(err)
  }
  
  // for (let i=0; i<results.length; i++) {
  //   results[i].products = [];
  //   let cat_id = results[i].id;
  //   let products = await Product.findAll({ where: { category_id: cat_id } });
  //   console.log(products);
  //   for (let prod of products) {
  //     results[i].products.push(prod.dataValues);
  //   }
  // }
  // res.json(results);
});

router.get('/:id_from_query', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const results = await Category.findOne({ where: { id: req.params.id_from_query } });
  if (results === null) {
    res.json("Not found");
  } else {
    res.json(results);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  // Receive JSON object with category_name as the key
  const new_category = req.body.category_name;
  const results = await Category.create({category_name: new_category});
  res.json(results);
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const category_id = req.params.id;
  const new_name = req.body.category_name;
  const results = await Category.update({category_name: new_name}, {
    where: {
      id: category_id
    }
  });
  res.json(results);

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const results = await Category.destroy({
    where: {
      id: req.params.id
    }
  });
  res.json(results);

});

module.exports = router;
