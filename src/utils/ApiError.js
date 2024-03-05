// a way to standerdise api errors (thats why we made this )

class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong ",
        errors = [],
        stack  = ""
    ){
        super(message),
        this.statusCode = statusCode,
        this.message = message,
        this.errors = errors,
        this.success = false,
        this.data = null // see why

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}