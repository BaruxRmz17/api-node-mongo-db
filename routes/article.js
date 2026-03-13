'use strict';

var express = require('express');
var ArticleController = require('../controllers/article');
const { route } = require('../app');

var router = express.Router();

router.get('/test', ArticleController.test);
router.post('/save', ArticleController.save);
router.get('/articles', ArticleController.getArticles);
router.get('/articles/:last', ArticleController.getArticlesByLimit);
router.get('/article/:id', ArticleController.getArticle);

module.exports = router;