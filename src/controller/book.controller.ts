import BookModel from "../model/book.model";
import {Request,Response,NextFunction} from "express";
import {handleRequestError} from "../utils/index.utils";


export const getBook = async (_req: Request, res: Response,next:NextFunction):Promise<void> => {

        try{
    const book = await BookModel.find();

    if(!book){
        throw {status: 400, message: 'Book  Not Found'};
    }
     res.status(200).json({data: book});
}
catch (e:{message:string;status:number}|unknown) {
    const { status, message } = handleRequestError(e, next);
    return next({ status, message });

}

};

export const createBook = async (req: Request, res: Response,next:NextFunction):Promise<void> => {

    try{

        const {title, author, isbn, publishedYear} = req.body;

    const bookExist = await BookModel.findOne({title})
    if (bookExist) {
        throw {status: 400, message: 'Book Already exist'};
    }

    const book = new BookModel({title,author,isbn,publishedYear});

    await book.save();

         res.status(201).json({ message: `Book Created Successfully` });
    }
    catch (e:{message:string;status:number}|unknown) {
        const { status, message } = handleRequestError(e, next);
        return next({ status, message });

    }

};

export const updateBook = async (req: Request, res: Response,next:NextFunction):Promise<void> => {
    const {id} = req.params;
    if (!id) {
        throw {status: 400, message: 'Book Id Required'};
    }
    try {

        const {title, author, isbn, publishedYear} = req.body;


        const book = await BookModel.findByIdAndUpdate(id, {
            title, author, isbn, publishedYear
        }, {new: true});

        if (!book) {
            throw {status: 400, message: 'Book  Not Found'};
        }
         res.status(200).json({message: `Book Updated Successfully`});

    } catch (e: { message: string; status: number } | unknown) {

        const {status, message} = handleRequestError(e, next);
        return next({status, message})

    }


};

export const deleteBook = async (req: Request, res: Response,next:NextFunction):Promise<void> => {

    const {id} = req.params;
    if (!id) {
        throw {status: 400, message: 'Book Id Required'};
    }
    try{


        const book = await BookModel.findById(id);

        if (!book) {
            throw { status: 204, message: "No Book Found" };
        }

        await BookModel.findByIdAndDelete(id);

         res.status(201).json({ message: "Book Deleted Successfully" });

    } catch (e: { message: string; status: number } | unknown) {

        const {status, message} = handleRequestError(e, next);
        return next({status, message})

    }

}

export const recommendationBook = async (_req:Request,res:Response,next:NextFunction):Promise<void> =>{
    try{
        const book = await BookModel.aggregate([{ $sample: { size: 1 } }]);

        if(!book){
            throw {status: 400, message: 'Book  Not Found'};
        }
         res.status(200).json({data: book});
    }
    catch (e:{message:string;status:number}|unknown) {
        const { status, message } = handleRequestError(e, next);
        return next({ status, message });

    }



}


export const favoriteBook = async (req:Request,res:Response,next:NextFunction):Promise<void> =>{
    const {id}= req.body
    if (!id) {
        throw {status: 400, message: 'Book Id Required'};
    }
    try{

        const book = await BookModel.findById(id);

        if (!book) {
            throw { status: 204, message: "No Book Found" };
        }

        book.favorite = !book.favorite

        await book.save()

        res.status(200).json({message: `Book has been ${book.favorite ? "marked as favorite" : "removed from favorites"}`,
            book,
        });


    }
    catch (e:{message:string;status:number}|unknown) {
        const { status, message } = handleRequestError(e, next);
        return next({ status, message });

    }



}


