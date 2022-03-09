'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Categories', [{
                name: 'Design Illustration',
                user: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Economics',
                user: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Build a Bussiness',
                user: 6,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ], {});

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};