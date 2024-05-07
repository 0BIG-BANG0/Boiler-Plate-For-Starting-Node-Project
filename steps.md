# Steps

1. **Boilerplate**: Set up the basic structure of your project, including installing necessary dependencies and configuring your environment.

2. **MVC Separate Folder**: Organize your project into distinct folders for models, views, and controllers, following the MVC (Model-View-Controller) architectural pattern.

3. **Handle GET Request to Fetch Products**:

   - **Controller**: Implement a `getProducts` method to handle GET requests for fetching products.
   - **Model**: Implement a `get` method in the model to retrieve product data from the database or any other data source.
   - **Views**: Create a view file named `products.ejs` to display the list of products.

4. **Handle GET Request to Display Add Product Form**:

   - **Controller**: Implement a `getAddForm` method to handle GET requests for displaying the form to add a new product.
   - **Views**: Create a view file named `new-product.ejs` to render the form for adding a new product.

5. **Handle POST Request to Add a New Product**:

   - **Controller**: Implement an `addNewProduct` method to handle POST requests for adding a new product.
   - **Model**: Implement an `add` method in the model to add the new product to the database or any other data source.
   - **Views**: Update the `products.ejs` view file to display the updated list of products after adding a new product.
   - **Redirect**: After adding the new product, redirect the user back to the products page to prevent duplicate submissions or unintended side effects.

6. **Install Express Validator**: Install the Express Validator package to enable request validation in your application.

7. **Create a Middleware Folder and File**: Create a folder named `middleware` inside the `src` directory, and create a file within it to define middleware functions.

8. **Create Rules for Validation and Run**: Define validation rules for your application using Express Validator. Then, apply these rules as middleware to your routes to validate incoming requests. Check for any validation errors and handle them appropriately.

9. Update Product

10. Delete Product
    Step 1 - add a button
    Step 2 - Grab that button(using params .id so you know which element to delete) give it ref like the route where we want this req to go and any req that we send through anchor tag is get req
    Step3 - we have use redirect their so that on reload it should not delete
    Step4 - We want to confirm before delete so we have to add js file and for that we have to add btn to delete and and add script and just give the file name as we have already exposed the public folder staticaly using express

11. Added some Buttons

12. File Upload using Multer

    AddNew Product
    step 1 - Install Multer - npm i multer check documentaion - ✅
    2 - Changes in view - ✅
    3 - Middleware to handle files - ✅ 4. Apply that middleware - ✅ 5. Update COntroller to update urls of images - 1. Add a debugger in the destination to check data in req.body and req.file and a debugger in the controller in addNewProduct's model add here you can see that the debugger will show you req.body and body in body there is no image and image is in file so we have to destructure all in the add function in model 6. Addded a custon Validator and to ahndle validation for file.

    UpdateProduct sam esteps as used above

13. Sessions

14. Registration Page

    1. Create a user.model.js file and create a UserModel in it.
    2. Same in Controller and create a method which renders register Page
    3. Create a user route file and in use it from index file also
    4. Create a view for register

15. Login
    1 - 4 Steps are same 5. On registration we add user and on login we need to verify that user exists or not 6. in post Login we check we check the user is valid or not and then also gives the error Message to all those method which render login page and get all the products and then render the products

16. Session

    1. install express sessions
    2. Configure the session option
    3. when user logs in we want to add user information to the req which is done through sessions. In index what will happen it will attach a session object to req object

17. Securing the Web pages

    1. Create a auth.middleware.js file and created a middleware which then applied to all the routes except the login and register
       So we added the auth in in products routes file.

18. Logout and Clearing Session

    1. When user is logged in they will see the logout button else they will be seeing only login and register - That is done in view using if else condition

    locals - refers to the object or data which are passed from server to the templates

    Now we have to give the data to all the pages so that page may know we are currently logged in
    We have implemetned it in products controller, where ever there is render and in the post Login.

    Logout - we have to make a

    1. method in controller and
    2. destroy the session
    3. in if else handle error and redirect to the login

19. Understanding Cookies
    Cookies are small pieces of data that are stored on the user's browser. They have a longer lifespan compared to sessions, as they can be set with
    expiration dates. While cookies are commonly used for tracking user behavior on websites, they serve various other purposes beyond
    authentication. For example, they store user preferences and enable personalized experiences.

20. Creating Cookies

    we are creating cookie without session to enhance user experience
    1. npm i cookie-parser
    2. create a lastVisit.middleware.js just see it, it is well commented and explation in Read Me file
    3. Cookie Parser

21. Clear cookie
    1. res.clearCookie('lastVisit') in logout function