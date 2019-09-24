const express = require('express');

const routes = express.Router();

const multer = require('multer');
const multerConfig = require('./config/multer');

const PostController = require('./controllers/PostController');
const UserController = require('./controllers/UserController');

routes.get('/posts', PostController.index);
routes.get('/posts/:id', PostController.show);
routes.post('/posts', multer(multerConfig).single('file'), PostController.store);
routes.delete('/posts/:id', PostController.delete);
routes.put('/posts/:id', PostController.update);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/users/auth', UserController.auth);

module.exports = routes;
