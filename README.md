#Usage
##API Endpoints
-Get All Products
  Endpoint: /products
  Method: GET
  Description: Retrieve a list of all products.
-Create a New Product
  Endpoint: /products/create
  Method: POST
  Description: Create a new product.
  Request Payload Example:
  {
    "name": "Product Name",
    "price": 29.99,
      "quantity:6,
    "description": "Product Description",
    "category": "Electronics"
  }
-Get a Product by ID
  Endpoint: /products/:id
  Method: GET
  Description: Retrieve a product by its ID.
  Update a Product
  Endpoint: /products/:id
  Method: PUT
  Description: Update a product by its ID.
Request Payload Example:
  {
    "name": "Updated Product Name",
    "quantity:6,
    "price": 39.99,
    "description": "Updated Product Description",
    "category": "Electronics"
  }
-Delete a Product
  Endpoint: /products/:id
  Method: DELETE
  Description: Delete a product by its ID.
  Authentication
  Explain how authentication works in your application.
  Describe the process of obtaining API keys, tokens, or any other necessary credentials.
Data Models
Describe the data models used in your application.
Provide information about each model's properties and relationships.
Testing
Explain how to run tests.
Provide details on writing and contributing to test cases.
Contributing
Explain how others can contribute to your project.
Include guidelines for code style, issue reporting, and pull requests.
