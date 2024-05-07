import path from "path";
import ProductModel from "../model/products.model.js";

export default class ProductController {
  getProducts(req, res) {
    let products = ProductModel.get();
    // console.log(products);
    res.render("products", {
      products: products,
      userEmail: req.session.userEmail,
    }); //key:value now this same key should be specified at the products.ejs
  }
  getAddForm(req, res) {
    return res.render("new-product", {
      errorMessage: null,
      userEmail: req.session.userEmail,
    });
  }
  addNewProduct(req, res) {
    const { name, desc, price } = req.body;
    const imageUrl = "images/" + req.file.filename;
    console.log(req.body);
    // let errors = [];
    let newProducts = ProductModel.add(name, desc, price, imageUrl);
    let pro = ProductModel.get();
    return res.redirect("/"); //redirect helps prevent unintended behavior, such as resubmitting form data or performing the same action multiple times, when users refresh the page after a POST request. It's particularly useful for actions like adding new records to a database, updating existing records, or submitting forms.
  }
  getUpdateProductView(req, res, next) {
    //1. if product Exist then return view
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if (productFound) {
      res.render("update-product", {
        product: productFound,
        errorMessage: null,
        userEmail: req.session.userEmail,
      });
    }
    //2. Else Return not found
    else {
      res.status(401).send("Page not Found");
    }
  }
  postUpdateProduct(req, res) {
    // ProductModel.update(req.body);
    const { id, name, desc, price } = req.body;
    const imageUrl = "images/" + req.file.filename;

    ProductModel.update(id, name, desc, price, imageUrl);
    var products = ProductModel.get();
    res.redirect("/"); // use redirect to prevent unintended behaviour
  }

  deleteProduct(req, res) {
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if (!productFound) {
      return res.status(401).send("Product not found");
    }
    ProductModel.delete(id);
    const products = ProductModel.get();
    res.redirect("/");
  }
  searchProduct(req, res) {
    const { name } = req.body;
    const product = ProductModel.searchByName(name);
    res.render("searchResults", {
      products: product,
      userEmail: req.session.userEmail,
    });
  }
}
