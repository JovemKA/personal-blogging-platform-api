import express from 'express';

import {
    postArticleController,
    getArticlesController,
    getArticleController,
    putArticleController,
    deleteArticleController
} from '../controllers/articleController.js';

export const articleRouter = express.Router();

articleRouter.post('/articles', postArticleController);
articleRouter.get('/articles', getArticlesController);
articleRouter.get('/articles/:id', getArticleController);
articleRouter.put('/articles/:id', putArticleController);
articleRouter.delete('/articles/:id', deleteArticleController);
