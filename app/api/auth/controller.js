const { User } = require('../../db/models');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs/dist/bcrypt');

module.exports = {
    signin: async(req, res, next) => {
        try {
            const { email, password } = req.body;
            const checkUser = await User.findOne({ where: { email: email } });

            if (checkUser) {
                const checkPassword = bycrypt.compareSync(password, checkUser.password);

                if (checkPassword) {
                    const token = jwt.sign({
                        user: {
                            id: checkUser.id,
                            name: checkUser.name,
                            email: checkUser.email,
                        },
                    }, 'secret');
                    res.status(200).json({ message: 'Success sign in', data: token });
                } else {
                    res.status(403).json({ message: 'Invalid password' });
                }
            } else {
                res.status(403).json({ message: 'Invalid email' });
            }
        } catch (error) {
            console.log(error);
            next(error);
        }
    },

    signup: async(req, res, next) => {
        try {
            const { name, email, password, confirmPassword } = req.body;
            if (password === confirmPassword) {
                const checkEmail = await User.findOne({ where: { email: email } });
                if (checkEmail) {
                    return res.status(403).json({ message: 'Email registered' });
                }

                const user = await User.create({ name, email, password: bcrypt.hashSync(password, 10), role: 'admin' });
                delete user.dataValues.password;
                res.status(201).json({
                    message: 'Success signup',
                    data: user,
                });
            } else {
                return res.status(403).json({ message: 'Password and confirmation password does not match' });
            }

        } catch (error) {
            next(error);
        }
    }
}