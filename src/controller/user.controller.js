import UserModel from "../model/user.model.js";
import ProductModel from "../model/products.model.js";
export default class UserController {
  getRegister(req, res) {
    res.render("register");
  }
  getLogin(req, res) {
    res.render("login", { errorMessage: null });
  }
  postRegister(req, res) {
    const { name, email, password } = req.body;
    UserModel.add(name, email, password);
    res.render("login", { errorMessage: null });
  }
  postLogin(req, res) {
    const { email, password } = req.body;
    const user = UserModel.isValidUser(email, password);
    if (!user) {
      return res.render("login", {
        errorMessage: "Invalid Credentials",
      });
    }
    req.session.userEmail = email;
    let products = ProductModel.get();
    // console.log(products);
    return res.render("products", {
      products: products,
      userEmail: req.session.userEmail,
    });
  }
  logout(req, res){
    //on logout destroy the session
    req.session.destroy((err)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect('/login')
        }
    })
  }
}