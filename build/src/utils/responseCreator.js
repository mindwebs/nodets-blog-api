"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseType = {
    200: {
        httpstatus: 200,
        message: "Successfully loaded data",
        type: "OK",
    },
    201: {
        httpstatus: 201,
        message: "Successfully created entry",
        type: "Created",
    },
    202: {
        httpstatus: 202,
        message: "Successfully accepted entry",
        type: "Accepted",
    },
    204: {
        httpstatus: 204,
        message: "There is no content available for the same",
        type: "No Content",
    },
    400: {
        httpstatus: 400,
        message: "Bad request",
        type: "Bad request",
    },
    401: {
        httpstatus: 401,
        message: "Unauthorized",
        type: "Unauthorized",
    },
    403: {
        httpstatus: 403,
        message: "Forbidden",
        type: "Forbidden",
    },
    404: {
        httpstatus: 404,
        message: "Request resource does not exist",
        type: "Not Found",
    },
    405: {
        httpstatus: 405,
        message: "Request method not allowed",
        type: "Method Not Allowed",
    },
    406: {
        httpstatus: 406,
        message: "Request resource is not acceptable",
        type: "Not Acceptable",
    },
    413: {
        httpstatus: 413,
        message: "File size limit exceeded",
        type: "Request entity too large",
    },
    500: {
        httpstatus: 500,
        message: "An unknown error occurred.",
        type: "Server Error",
    },
};
class ResponseCreator {
    static generateResponse(res, code = 200, result = {}, message = "") {
        let newMessage = message;
        if (message === "") {
            newMessage = responseType[code].message;
        }
        return res.status(responseType[code].httpstatus).json({
            code,
            result,
            type: responseType[code].type,
            message: newMessage.toString(),
        });
    }
}
exports.default = ResponseCreator;
