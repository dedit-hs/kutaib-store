const { Category } = require('../../db/models');

module.exports = {
    getAllCategories: async(req, res, next) => {
        try {
            const categories = await Category.findAll({
                where: { user: req.user.id },
                attributes: ['id', 'name']
            });
            res.status(200).json({
                message: 'Success get all categories',
                data: categories
            });
        } catch (error) {
            next(error);
        }
    },

    createCategories: async(req, res, next) => {
        try {
            const { name } = req.body;

            const categories = await Category.create({
                name: name,
                user: req.user.id
            });

            res.status(201).json({ message: 'success create categories', data: categories });
        } catch (error) {
            next(error);
        }
    },

    updateCategories: async(req, res, next) => {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const checkCategories = await Category.findOne({
                where: {
                    id: id,
                    user: req.user.id,
                },
            });

            const categories = await checkCategories.update({
                name: name
            });
            res.status(200).json({
                message: 'Success update categories',
                data: categories,
            });
        } catch (error) {
            next(error);
        }
    },

    deleteCategories: async(req, res, next) => {
        try {
            const { id } = req.params;

            const checkCategories = await Category.findOne({
                where: {
                    id: id,
                    user: req.user.id,
                },
            });
            const categories = await checkCategories.destroy();
            res.status(200).json({
                message: 'Success delete categories',
                data: categories,
            });
        } catch (error) {
            next(error)

        }
    }
}