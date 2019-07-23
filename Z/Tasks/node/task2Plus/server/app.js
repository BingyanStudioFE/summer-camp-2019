const Koa = require('koa');
const cors = require('koa2-cors');
const logger = require('koa-logger');
const json = require('koa-json');
const koajwt = require('koa-jwt');
const bodyParser = require('koa-bodyparser');
const staticServe = require('koa-static');
const config = require('./config');
const mongoose = require('mongoose');
const app = new Koa();

//mongoose
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(config.db, {useNewUrlParser: true}, (err) => {
  if (err) {
    console.error('Failed to connect to database');
  } else {
    console.log('Connecting database successfully');
  }
});

//use
app.use(cors());
app.use(bodyParser());
app.use(logger());
app.use(json());
app.use(staticServe(__dirname + '/public'));
app.use(koajwt({secret: 'secret'}).unless({path: [/^\/user/]}));

//error
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = 200;
    ctx.response.body = {
      "success": false,
      "error": err.message,
      "data": null
    };
  }
});

//route
const user_router = require('./routes/api/user_router');
const commodity_router = require('./routes/api/commodity_router');
app.use(user_router.routes(), user_router.allowedMethods());
app.use(commodity_router.routes(), commodity_router.allowedMethods());

//listen
app.listen(config.port);
