class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCodethis.data = null 
        this.data = null 
        this.message = message = message
        this.success = false;  
        this.errors = this.errors
        if(stack) {
            this.stack = stack
        } else{
            Error.capturesStackTrace(this, this.
                constructor)
        } 
    }
    
}
export {ApiError}