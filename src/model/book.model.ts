import mongoose,{Schema} from 'mongoose';
import {bookType} from "../types/index.types";
const bookShema:Schema = new Schema({
    title: {type:String, required:[true, 'Title is required'],trim:true},
    author: {type:String, required:[true, 'Author is required'],trim:true},
    isbn: {type:String, required:[true, 'Isbn is required'],trim:true},
    publishedYear:{type:Date, required:[true, 'Date is required']},
    favorite: { type: Boolean, default: false },

},{timestamps:true});

const book = mongoose.model<bookType>('Book', bookShema);
export default book;