const paths = require('../controller/path.controller.js');
const modules = require('../controller/module.controller.js');

path.exports = (app) => {
  app.get('/api/path', paths.findAll);
  app.get('/api/path/:pathId', paths.findOne);
  app.post('/api/path', paths.create);
  app.post('api//path/:pathId/module', modules.create);
  app.delete('/api/path/:pathId', paths.destroy);
  app.patch('/api/path/:pathId', paths.update);
};
