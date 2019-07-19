const Commodity = require('./../models/commodity');
const uuid = require('uuid/v1');

const publishCommodity = async (ctx, next) => {
    let req = ctx.request.body;
    req.id = uuid();
    const newCommodity = await Commodity.create(req);
    if (newCommodity) {
        ctx.status = 200;
        ctx.body = {
            "success": true,
            "error": "",
            "data": "ok"
        }
    }
};

const getCommodityById = async (ctx, next) => {
    const req = ctx.request;
    path = req.path.split("/");
    const commodity = await Commodity.find({
        id: path[2],
    }, {
        _id: 0
    });
    if (commodity) {
        ctx.status = 200;
        ctx.body = {
            "success": true,
            "error": "",
            "data": commodity
        };
    }
};
const deleteCommodityById = async (ctx, next) => {
    const req = ctx.request;
    path = req.path.split("/");
    const commodity = await Commodity.deleteOne({
        id: path[2],
    });
    if (commodity) {
        ctx.status = 200;
        ctx.body = {
            "success": true,
            "error": "",
            "data": "ok"
        };
    }
};
module.exports = {
    getCommodityById,
    publishCommodity,
    deleteCommodityById,
};
