import express from "express";
import ProductController from "../controller/products.controller.js";
import validateRequest from "../middlewares/validation.middleware.js";
import { uploadFile } from "../middlewares/file-upload.middleware.js";

//initialize express Router
const productRouter = express.Router();

//instantiate the product Controller

const productController = new ProductController();

productRouter.get("/", productController.getProducts);
productRouter.get("/new", productController.getAddForm);
productRouter.post(
  "/",
  uploadFile.single('imageUrl'),
  validateRequest,
  productController.addNewProduct
);
productRouter.get(
  "/update-product/:id",
  productController.getUpdateProductView
);
productRouter.post("/update-product", uploadFile.single('imageUrl'), productController.postUpdateProduct);

productRouter.post("/delete-product/:id", productController.deleteProduct);

//Search
productRouter.post("/search", productController.searchProduct);
export default productRouter;
