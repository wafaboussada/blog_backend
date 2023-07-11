const User = require('../models/user');
exports.register = async (req, res) => {
    try {
        console.log('req.body', req.body);
        const user = User(req.body);
        const newUser = await user.save();
        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.login = async (req, res) => {
    try {
        const {
            userName,
            password,
        } = req.body;
        const user = await User.findOne({ username: userName })
        if(!user) {
            throw new Error('INVALID_USERNAME')
            // res.status(400).json('INVALID_USERNAME');
        }
        const isSamePss = password === user.password;
        if (!isSamePss) {
            res.status(400).json('INVALID_PASSWORD');
        }
        res.status(200).json(user);
    } catch (err) {
        console.log('error', err.message);
        // res.status(500).send(err);
        if (err.message == 'INVALID_USERNAME') {
            console.log('iff');
            res.status(500).json({message: 'INVALID_USERNAME'});
        } else {
            res.status(500).json(err);
        } 
    }
}