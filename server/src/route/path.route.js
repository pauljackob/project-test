const paths = require('../controller/path.controller.js');
const modules = require('../controller/module.controller.js');

path.exports = (app) => {
  app.get('/path', paths.findAll);
  app.get('/path/:pathId', paths.findOne);
  app.post('/path', paths.create);
  app.post('/path/:pathId/module', modules.create);
  app.delete('/path/:pathId', paths.destroy);
  app.patch('/path/:pathId', paths.update);
};
