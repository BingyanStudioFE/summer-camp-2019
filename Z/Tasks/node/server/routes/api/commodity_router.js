const Router = require('koa-router');
const router = new Router();
const commodity_controller = require('./../../app/controllers/commodity_controller');

router.post('/commodities', commodity_controller.publishCommodity);
router.get('/commodity/:id', commodity_controller.getCommodityById);
router.del('/commodity/:id', commodity_controller.deleteCommodityById);

module.exports = router;
