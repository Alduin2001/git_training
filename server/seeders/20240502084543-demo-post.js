"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          header: "Post1",
          description:'Lorem ipsum',
          UserId:1,
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          header: "Post2",
          description:'Lorem ipsum',
          UserId:2,
          createdAt:new Date(),
          updatedAt:new Date(),
        },
        {
          header: "Post3",
          description:'Lorem ipsum',
          UserId:2,
          createdAt:new Date(),
          updatedAt:new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await qeryInterface.bulkDelete("Posts", null, {});
  },
};
