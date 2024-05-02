import express from 'express'
import ProductController from '../controller/products.controller.js'
import validateRequest from '../middlewares/validation.middleware.js';

//initialize express Router
const productRouter = express.Router()

//instantiate the product Controller

const productController = new ProductController();

productRouter.get('/',productController.getProducts)
productRouter.get('/new',productController.getAddForm)
productRouter.post('/',validateRequest,productController.addNewProduct)
productRouter.get('/update-product/:id',productController.getUpdateProductView)
productRouter.post('/update-product',productController.postUpdateProduct)

export default productRouter;