'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Books", [
      {
        name: "The Hobbit",
        author: "J.R.R. Tolkein",
        year_published: 1937
      },
      {
        name: "Harry Potter",
        author: "J.K Rowling",
        year_published: 1995
      },
      {
        name: "The Great Gatsby",
        author: "F.scott Fitzgerald",
        year_published: 1925
      },
      {
        name: "AGGGTM",
        author: "Holly Jackson",
        year_published: 2019
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {})
  }
};
