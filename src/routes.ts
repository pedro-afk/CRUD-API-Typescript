import { Router } from 'express'

const routes = Router();

import ProjectController from './controllers/ProjectController';
import UserController from './controllers/UserController';

const projectController = new ProjectController();
const userController = new UserController();

routes.post('/users/new', userController.create);
routes.post('/projects/new/:id', projectController.create);

routes.get('/users/list', userController.index);
routes.get('/projects/list', projectController.index);

routes.put('/users/update/:id', userController.update);
routes.put('/projects/update/:id', projectController.update);

routes.delete('/projects/delete/:id', projectController.del);

export default routes;