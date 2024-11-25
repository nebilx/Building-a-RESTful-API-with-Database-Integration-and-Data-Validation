import {NextFunction} from "express";
import {errorMsg} from "../types/index.types";

export const handleRequestError = (
    error: { message: string; status: number } | unknown,
    _next: NextFunction
): errorMsg => {
    const { message, status } = error as {
        message: string;
        status: number;
    };

    if (!message) {
        return { status: 500, message: "Internal Server Error" };
    }

    return { status, message };
};