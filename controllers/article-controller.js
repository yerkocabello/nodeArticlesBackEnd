'use strict';

let ArticleList = require('../model/articleList');
let Article = require('../model/article');

function getArticleList(req, res) {
    ArticleList.findOne()
        .then(data=>{
            console.log(data);
            if(data !== null){
                res.json(data);
            }else{
                res.json({});
            }
        });
}

function deleteArticle(req, res){
    Article.deleteOne({_id: req.params._id})
        .then(user => {
            res.status(200).send();
        })
        .catch(error => {
                res.status(500).send("Error")
        });
}

function insertArticle(req, res) {
    let articleList = req.body;
    console.log(articleList);
    ArticleList.create(articleList)
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