'use strict';

let express = require('express');
let ArticleApi = express.Router();
let ArticleController = require('../controllers/article-controller');

ArticleApi.route("/articles")
        .get({}, ArticleController.getArticleList)
        .put({}, ArticleController.insertArticle);
ArticleApi.route("/articles/:id")
        .delete({}, ArticleController.deleteArticle);

module.exports = {
    ArticleApi
}