const jwt = require('jsonwebtoken');
const User = require('./../models/user');
const uuid = require('uuid/v1');
//register
const register = async (ctx, next) => {
    const req = ctx.request.body;
    req.userId = uuid();
    const newUser = await User.create(req);
    if (newUser) {
        ctx.status = 200;
        ctx.body = {
            "success": true,
            "error": "",
            "data": "ok"
        }
    }
};
//login
const login = async (ctx, next) => {
    const req = ctx.request.body;
    const user = await User.findOne({
        username: req.username,
        password: req.password
    });
    if (user) {
        const token = jwt.sign({userId: user.userId}, 'secret');
        ctx.status = 200;
        ctx.body = {
            "success": true,
            "error": "",
            "data": token
        };
    }
};
//getMe
const getMe = async (ctx, next) => {
    const token = ctx.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, 'secret');
    const user = await User.findOne({
        userId: payload.userId
    }, {
        _id: 0
    });
    if (user) {
        ctx.status = 200;
        ctx.body = {
            "success": true,
            "error": "",
            "data": user
        };
    }
};
//modifyMe
const modifyMe = async (ctx, next) => {
    const req = ctx.request.body;
    const token = ctx.headers.authorization.split(' ')[1];
    const payload = jwt.verify(token, 'secret');
    const user = await User.findOneAndUpdate({
        userId: payload.userId
    }, {
        password: req.password,
        nickname: req.nickname,
        mobile: req.mobile,
        email: req.email
    }, {
        runValidators: true
    });
    if (user) {
        ctx.status = 200;
        ctx.body = {
            "success": true,
            "error": "",
            "data": "ok"
        };
    }
};
module.exports = {
    register,
    login,
    getMe,
    modifyMe
};
