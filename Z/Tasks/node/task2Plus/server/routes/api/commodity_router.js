const Router = require('koa-router');
const router = new Router();
const commodity_controller = require('./../../app/controllers/commodity_controller');

router.post('/commodities', commodity_controller.publishCommodity);
router.get('/commodity/:id', commodity_controller.getCommodityById);
router.del('/commodity/:id', commodity_controller.deleteCommodityById);
router.get('/commodities', commodity_controller.getCommodities);
router.get('/commodities/hot', commodity_controller.getHot);
router.get('/me/commodities', commodity_controller.getMeCommodities);
router.post('/me/collections', commodity_controller.collectCommodity);
router.get('/me/collections', commodity_controller.getMeCollections);
router.del('/me/collections', commodity_controller.deleteCollection);


module.exports = router;
