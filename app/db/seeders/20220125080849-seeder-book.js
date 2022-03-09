'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('Books', [{
                title: 'David Bach: Factor Latte',
                author: 'David Bach',
                image: 'uploads/image1.jpg',
                published: new Date(),
                price: 90,
                stock: 50,
                user: 6,
                category: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                title: 'Art Daily',
                author: 'David Bach',
                image: 'uploads/image2.jpg',
                published: new Date(),
                price: 50,
                stock: 20,
                user: 6,
                category: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
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