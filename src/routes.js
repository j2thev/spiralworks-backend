import { IndexController, UserController } from './controllers';

export default function routes(app) {
  app.get('/', IndexController.index);

  app.get('/user', UserController.search);
  app.get('/user/:id', UserController.get);
  app.get('/user/:username/:password', UserController.login);
  app.post('/user', UserController.create);
  app.put('/user/:id', UserController.update);
}
