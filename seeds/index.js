const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  // Sequelize is attempting to delete tables in an order that is incompatible
  // with the foreign keys.
  // Adding code to have it ignore foreign keys during sync, then reactivate them.
  await sequelize.query("SET FOREIGN_KEY_CHECKS = 0"); // ADDED
  await sequelize.sync({ force: true });
  await sequelize.query("SET FOREIGN_KEY_CHECKS = 1"); // ADDED
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
