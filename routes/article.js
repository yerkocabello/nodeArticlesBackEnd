'use strict';

let express = require('express');
let ArticleApi = express.Router();
let GeneralMiddleware = require('../middlewares/generalMDW');
let ArticleController = require('../controllers/article-controller');

ArticleApi.route("/articles")
        .get(GeneralMiddleware.validate, ArticleController.getArticleList)
        .post(GeneralMiddleware.validate, ArticleController.insertArticle);
ArticleApi.route("/articles/:id")
        .delete(GeneralMiddleware.validate, ArticleController.deleteArticle);

module.exports = ArticleApi;