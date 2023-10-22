const { Router } = require('express');
const { createPostHandler } = require('../handlers/postHandlers');

const postRouter = Router();

postRouter.post('/', createPostHandler);

module.exports = postRouter;