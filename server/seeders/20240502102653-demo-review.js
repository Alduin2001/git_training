"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Reviews",
      [
        {
          review_theme: "Тема1",
          review_body: "Lorem ipsum",
          UserId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          review_theme: "Тема2",
          review_body: "Lorem ipsum",
          UserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          review_theme: "Тема3",
          review_body: "Lorem ipsum",
          UserId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
