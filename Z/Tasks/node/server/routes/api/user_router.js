const Router = require('koa-router');
const router = new Router();
const user_controller = require('./../../app/controllers/user_controller');

router.post('/user/register', user_controller.register);
router.post('/user/login', user_controller.login);
router.get('/me', user_controller.getMe);
router.post('/me', user_controller.modifyMe);

module.exports = router;
