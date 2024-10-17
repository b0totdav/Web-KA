import express from 'express'
import __dirname from '../util/routpath.js'
import * as controllers from '../controllers/product.js'


const router = express.Router()

router.get('/',controllers.getShop)

export default router