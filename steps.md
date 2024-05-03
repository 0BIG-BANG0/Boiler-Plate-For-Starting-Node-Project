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
   Step 2 - Grab that button(using params .id so you know which element to delete) give it ref like the route where we want this req to go and any req that we send through  anchor tag is get req 
Step3 - we have use redirect their so that on reload it should not delete 
Step4 - We want to confirm before delete so we have to add js file and for that we have to add btn to delete and and add script and just give the file name as we have already exposed the public folder staticaly using express

11. Added some Buttons

12. File Upload using Multer
    AddNew Product
    step 1 - Install Multer - npm i multer check documentaion - ✅
    2 - Changes in view - ✅
    3 - Middleware to handle files - ✅
    4. Apply that middleware - ✅ 
    5. Update COntroller to update urls of images - 1. Add a debugger in the destination to check data in req.body and req.file and a debugger in the controller in addNewProduct's model add here you can see that the debugger will show you req.body and body in body there is no image and image is in file so we have to destructure all in the add function in model
    6. Addded a custon Validator and to ahndle validation for file.

    UpdateProduct

    