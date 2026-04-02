// const asyncHandler = ( requestHandler) => {
//     (req,res,next) => {
//         Promise.resolve(requestHandler(req,res,next)).
//         catch((err) => next(err))
//     }
// }

// export {asyncHandler}


const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise
            .resolve(fn(req, res, next))
            .catch((error) => next(error));
    };
};

export default asyncHandler; 

//const asyncHandler = ()  => {}
//const asyncHandler = (func) => async => () {}

//const asyncHandler = (fn) =>(req, res, next) => {
   // try {
     //   await fn(req,res,next)
    //}
    //catch(error) {
      //  res.status(error.code || 500).json({
        //    success:false,
        //    message:errormessage
        //})
    // }
//}