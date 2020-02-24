const { createStatusRouter } = require('./status');
const { createCommentsRouter } = require('./comments');
const { createMoviesRouter } = require('./movies');

const { Router } = require('express');

const registerRoutes = (AppRouter, App) => {
  AppRouter.use('/status', createStatusRouter(Router, App));
  AppRouter.use('/comments', createCommentsRouter(Router, App));
  AppRouter.use('/movies', createMoviesRouter(Router, App));

  return AppRouter;
};

module.exports = {
  registerRoutes,
};
