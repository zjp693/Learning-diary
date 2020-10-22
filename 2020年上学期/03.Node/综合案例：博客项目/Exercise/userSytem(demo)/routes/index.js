const express = require('express')

const routes = express.Router()

const { getArticle, getDetail } = require('../controller/indexCtrl')

routes.get('/article', getArticle)

routes.get('/detail', getDetail)
module.exports = routes