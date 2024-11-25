import express, { Router } from "express";
import {
    createBook,
    deleteBook,
    favoriteBook,
    getBook,
    recommendationBook,
    updateBook
} from "../controller/book.controller";
import validationMiddleware from "../middleware/validation.middleware";
import {BookShema, idShema} from "../validation/book.validation";

const bookRoutes: Router = express.Router();


bookRoutes.route("/books").get(getBook).post(validationMiddleware(BookShema),createBook);
bookRoutes.route("/books/:id").put(updateBook).delete(deleteBook);
bookRoutes.route("/books/recommendations").get(recommendationBook);
bookRoutes.route("/books/favorite").post(validationMiddleware(idShema),favoriteBook);


export default bookRoutes;
