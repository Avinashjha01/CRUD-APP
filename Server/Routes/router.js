const express= require("express");
const router = new express.Router();
const controller = require("../Controller/userController");

//routes
router.post("/users/register",controller.userpost);
router.get("/users/getAlluser",controller.getUsers);
router.get("/users/getuser/:id",controller.getIndividualUsers);
router.delete("/users/deleteuser/:id",controller.deleteUsers);
router.patch("/users/updateuser/:id",controller.updateUsers);
router.post("/users/login",controller.loginUser);

// router.get("/users/getAlluser",async(req,res) =>{
//     jwt.verify(req.token,process.env.ACCESS_TOKEN_SECRET,(err,authData)=>{
//         if(err){res.send({result:"Invalid Token"})}
//         else{res.json({message:"profile accessed",authData})}
//     })
//      try{
//       const usersData = await users.find();
//       res.status(200).json(usersData)
//     }catch(error){
//        res.status(400).json(error);
//        console.log("catch block error")
//     }
// });

// function authenticateToken(req,res,next){
//     const bearerHeader = req.headers['authorization']
     
//    if(typeof bearerHeader!=='undefined'){
//     const bearer =bearerHeader.split("");
//     const token = bearer[1];
//     req.token =token;
//     next(); 
//    }else{
//     res.send({
//         result:"Token is not valid"
//     })
//    }
// }

module.exports = router;