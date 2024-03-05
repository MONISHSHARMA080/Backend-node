// const asyncHanler = (fn) => async (res, req, next)=>{
//     try {
//         await fn(req,res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message
//         })       
//     }
// }

// fn or reqHandler
const asyncHandler =  (requestHandler) =>{
    (req ,res ,next) =>{
        Promise.resolve(requestHandler()).catch((err)=>next(err))
    }
}

export {asyncHandler}