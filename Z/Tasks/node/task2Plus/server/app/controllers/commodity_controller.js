const Commodity = require('./../models/commodity');
const User = require('./../models/user');
const Keyword = require('./../models/keyword');
const keyword_controller = require('./../../app/controllers/keyword_controller');
const jwt = require('jsonwebtoken');
const uuid = require('uuid/v1');

//publishCommodity
const publishCommodity = async (ctx, next) => {
  const token = ctx.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'secret');
  const user = await User.findOne({
    userId: payload.userId
  });
  if (user) {
    let req = ctx.request.body;
    req.id = uuid();
    req.pub_user = user.userId;
    const newCommodity = await Commodity.create(req);
    if (newCommodity) {
      ctx.status = 200;
      ctx.body = {
        "success": true,
        "error": "",
        "data": "ok"
      }
    }
  }
};
//getCommodityById
const getCommodityById = async (ctx, next) => {
  const token = ctx.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'secret');
  const user = await User.findOne({
    userId: payload.userId
  });
  if (user) {
    const req = ctx.request;
    path = req.path.split("/");
    const commodity = await Commodity.findOne({
      id: path[2],
    }, {
      _id: 0,
      id: 0
    });
    const pub_user = await User.findOne({
      userId: commodity.pub_user
    });
    commodity.pub_user = pub_user.username;
    if (commodity) {
      ctx.status = 200;
      ctx.body = {
        "success": true,
        "error": "",
        "data": commodity,
      };
    }
  }
};
//deleteCommodityById
const deleteCommodityById = async (ctx, next) => {
  const token = ctx.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'secret');
  const user = await User.findOne({
    userId: payload.userId
  });
  if (user) {
    const req = ctx.request;
    path = req.path.split("/");
    const commodity = await Commodity.deleteOne({
      id: path[2],
      pub_user: user.userId
    });
    if (commodity) {
      ctx.status = 200;
      ctx.body = {
        "success": true,
        "error": "",
        "data": ""
      };
    }
  }
};
//getCommodities
const getCommodities = async (ctx, next) => {
  const token = ctx.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'secret');
  const user = await User.findOne({
    userId: payload.userId
  });
  if (user) {
    const req = ctx.request.query;
    req.page = Number(req.page);
    req.limit = Number(req.limit);
    req.category = Number(req.category);
    const keyword = req.keyword;
    const reg = new RegExp(keyword, 'i');
    keyword_controller.genKeyword(ctx, next, keyword);
    const commodity = await Commodity.find({
      category: req.category || {$gte: 1, $lte: 9},
      title: {$regex: reg}
    }, {
      _id: 0,
      desc: 0,
      pub_user: 0,
      view_count: 0,
      collect_count: 0
    }, {
      limit: req.limit,
      skip: req.page * req.limit,
      sort: {
        _id: -1
      }
    });
    if (commodity) {
      ctx.status = 200;
      ctx.body = {
        "success": true,
        "error": "",
        "data": commodity
      };
    }
  }
};
//getHot
const getHot = async (ctx, next) => {
  const token = ctx.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'secret');
  const user = await User.findOne({
    userId: payload.userId
  });
  if (user) {
    const keyword = await Keyword.find({}, {
      count: 0,
      _id: 0,
      id: 0
    }, {
      limit: 2,
      sort: {
        count: -1
      }
    });
    if (keyword) {
      let keywords = [];
      for (let i = 0; i < keyword.length; i++) {
        keywords.push(keyword[i].word);
      }
      ctx.status = 200;
      ctx.body = {
        "success": true,
        "error": "",
        "data": keywords
      };
    }
  }
};
//getMeCommodities
const getMeCommodities = async (ctx, next) => {
  const token = ctx.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'secret');
  const user = await User.findOne({
    userId: payload.userId
  });
  if (user) {
    const commodity = await Commodity.find({
      pub_user: user.userId
    }, {
      _id: 0,
      desc: 0,
      price: 0,
      picture: 0,
      category: 0,
      pub_user: 0,
      view_count: 0,
      collect_count: 0
    }, {
      sort: {
        _id: -1
      }
    });
    if (commodity) {
      ctx.status = 200;
      ctx.body = {
        "success": true,
        "error": "",
        "data": commodity
      };
    }
  }
};
//collectCommodity
const collectCommodity = async (ctx, next) => {
  const token = ctx.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'secret');
  const user = await User.findOne({
    userId: payload.userId
  });
  if (user) {
    const req = ctx.request.body;
    const commodity = await Commodity.findOne({
      id: req.id
    });
    if (commodity) {
      await User.findOneAndUpdate({
        userId: user.userId
      }, {
        $addToSet: {collections: commodity.id}
      });
      ctx.status = 200;
      ctx.body = {
        "success": true,
        "error": "",
        "data": "ok"
      };
    }
  }
};
//deleteCollection
const deleteCollection = async (ctx, next) => {
  const token = ctx.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'secret');
  const user = await User.findOne({
    userId: payload.userId
  });
  if (user) {
    const req = ctx.request.body;
    const commodity = await Commodity.findOne({
      id: req.id
    });
    if (commodity) {
      await User.findOneAndUpdate({
        userId: user.userId
      }, {
        $pull: {collections: commodity.id}
      });
      ctx.status = 200;
      ctx.body = {
        "success": true,
        "error": "",
        "data": "ok"
      };
    }
  }
};
//getCollections
const getMeCollections = async (ctx, next) => {
  const token = ctx.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'secret');
  const user = await User.findOne({
    userId: payload.userId
  });
  if (user) {
    const commodities = await Commodity.find({
      id: {$in: user.collections}
    }, {
      _id: 0,
      desc: 0,
      price: 0,
      picture: 0,
      category: 0,
      pub_user: 0,
      view_count: 0,
      collect_count: 0
    }, {
      sort: {
        _id: -1
      }
    });
    ctx.status = 200;
    ctx.body = {
      "success": true,
      "error": "",
      "data": commodities
    };
  }
};
module.exports = {
  getCommodityById,
  deleteCommodityById,
  publishCommodity,
  collectCommodity,
  getHot,
  getCommodities,
  getMeCommodities,
  getMeCollections,
  deleteCollection
};
