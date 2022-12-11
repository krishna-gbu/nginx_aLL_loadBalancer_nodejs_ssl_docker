class AppError extends Error {
    
    constructor(message,statusCode){
       super(message)
       this.statusCode = statusCode;
       this.message = message;
       this.isOperatinal = true;
       this.fuck = 'fuck error';
       Error.captureStackTrace(this,this.constructor)
    
    }
   
}

module.exports = AppError;