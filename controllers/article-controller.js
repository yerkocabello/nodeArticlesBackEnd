'use strict';

let ArticleList = require('../model/articleList');
let Article = require('../model/article');

function getArticleList(req, res) {
    Article.find({})
        .then(data=>{
            if(data !== null){
                res.json(data);
            }else{
                res.json({});
            }
        });
}

function deleteArticle(req, res){
    console.log(req.params);
    Article.deleteOne({objectID: req.params.id})
        .then(user => {
            res.status(200).send();
        })
        .catch(error => {
                res.status(500).send("Error")
        });
}

function insertArticle(req, res) {
    let articleList = req.body;
    Article.insertMany(articleList)
        .then(user =>{
            res.status(201).send();
        })
        .catch(error => {
            res.status(500).send();
        });
}

module.exports = {
    getArticleList,
    deleteArticle,
    insertArticle
};