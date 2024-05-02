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
