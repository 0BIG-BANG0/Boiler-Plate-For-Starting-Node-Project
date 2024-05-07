import express from "express";
import ProductController from "../controller/products.controller.js";
import validateRequest from "../middlewares/validation.middleware.js";
import { uploadFile } from "../middlewares/file-upload.middleware.js";
import { auth } from "../middlewares/auth.middleware.js";

//initialize express Router
const productRouter = express.Router();

//instantiate the product Controller

const productController = new ProductController();

productRouter.get("/",auth, productController.getProducts);
productRouter.get("/new",auth, productController.getAddForm);
productRouter.post(
  "/",auth,
  uploadFile.single('imageUrl'),
  validateRequest,
  productController.addNewProduct
);
productRouter.get(
  "/update-product/:id",auth,
  productController.getUpdateProductView
);
productRouter.post("/update-product",auth, uploadFile.single('imageUrl'), productController.postUpdateProduct);

productRouter.post("/delete-product/:id",auth, productController.deleteProduct);

//Search
productRouter.post("/search",auth, productController.searchProduct);
export default productRouter;
