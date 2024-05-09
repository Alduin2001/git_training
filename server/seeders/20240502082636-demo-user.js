'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * */
     await queryInterface.bulkInsert('Users', [
      {
      firstname: 'Алмас',
      lastname:'Сальманов',
      login:'almas',
      password:'$2b$10$aA/TtisQHHk7UhiGtv1Pv.Y6FDoQvOXbjqUdwpeC8og7VO3nAG6OG',
      createdAt:new Date(),
      updatedAt:new Date(),
     },
     {
      firstname: 'Алмаз',
      lastname:'Гаязов',
      login:'gayazov',
      password:'$2b$10$aA/TtisQHHk7UhiGtv1Pv.Y6FDoQvOXbjqUdwpeC8og7VO3nAG6OG',
      createdAt:new Date(),
      updatedAt:new Date(),
     }
    ], {});
     /*
    */
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Users', null, {});
  }
};
