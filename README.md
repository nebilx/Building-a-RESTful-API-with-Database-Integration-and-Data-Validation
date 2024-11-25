Building a RESTful API with Database Integration and Data Validation

Install dependencies Run the following command to install all dependencies:
npm install

Run the server To run the development server with TypeScript directly, use:
npm run dev

This will run the Express server on http://localhost:5000.

Accessing routes

there are routes like
1. http://localhost:5000/api/books to list all books with http  method of get 
2. http://localhost:5000/api/books to add books to database http method of post on body of json add this { "title":"book name", "author":"author of book", "isbn":"isbn of book", "publishedYear":"12-02-24" }
3. http://localhost:5000/api/books/:id to update book http method of put on body of json add this { "title":"book name", "author":"author of book", "isbn":"isbn of book", "publishedYear":"12-02-24" } on based on this modify field that u needed to be updated id is the books mongodb id 
4. http://localhost:5000/api/books/:id to delete book http method of delete, add id is the books mongodb id
5. http://localhost:5000/api/books/recommendations to get list of recomendation books with http method of get 
6. http://localhost:500/api/books/favorite to add book to favorite, add id of book to in body of json { "id":"books id/ mongodb _id" }

