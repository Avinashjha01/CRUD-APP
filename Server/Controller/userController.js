//to store data in database
const users = require("../model/usersSchema");

//const jwt = require("jsonwebtoken");
//to show date
const moment = require('moment');


//login admin
exports.loginUser = async(req,res)=>{
    // const{login_id,password} = req.body;  
    // if(!login_id || !password){
    //     res.status(400).json({error:"Plz Fill all the fields"});
    // }
    // try{
    //     const user =await users.findOne({login_id:login_id});
     
    //     if(user){
    //         res.status(400).json({error:"User is already exits"});
    //         console.log("User exits already");
    //     }else{
           
    //        res.status(201).json("login Successfully");
    //        console.log("Customer Verified");
    //        }
    // }catch(error){
    //     res.status(400).json(error);
    //    console.log("catch block error");  
    // }

    //  const{login_id,password} = req.body; 
    //  const user = {login_id:login_id , password:password}
    //  const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    // res. json({accessToken:accessToken})
  }


//create Customer Details
exports.userpost = async(req,res)=>{
    
    const{first_name,last_name,street,address,city,state,email,phone} = req.body;

    if(!first_name || !last_name|| !street || !address ||!city ||!state ||!email ||!phone){
       
        res.status(400).json({error:" First Name or Last Name is missing"});
        
       
    }
   try{
     const preuser =await users.findOne({email:email});
     
     if(preuser){
        res.status(400).json({error:"User is already exits"});
        console.log("User exits already");
     }else{
        
        const dateCreate= moment(new Date()).format("YYYY-MM-DD  hh:mm:ss");
        const userData = new users({
            first_name,last_name,street,address,city,state,email,phone,dateCreated:dateCreate
        });
        await userData.save();
        
        res.status(201).json("Successfully Added");
       console.log("Customer Added Successfully");
     }

   }catch(error){
    res.status(400).json(error);

    console.log("catch block error");
   }
}



// Get all users
exports.getUsers = async(req,res) =>{
    try{
       const usersData = await users.find();
       res.status(200).json(usersData)
     }catch(error){
        res.status(400).json(error);
        console.log("catch block error");
     }
}
//get individual user
exports.getIndividualUsers = async(req,res)=>{
   
   try{ 
    const {id} =req.params;
     const userindividual = await users.findById({_id:id});
     res.status(200).json(userindividual);
   }catch(error){
    res.status(400).json(error);
    console.log("UUID not found");
   }

}

//delete user
 exports.deleteUsers = async(req,res)=>{
    const {id} =req.params;
    try{

        const deleteUserData = await users.findByIdAndDelete({_id:id});
        res.status(200).json("sucessfully deleted");
    }catch(error){
        res.status(400).json(error);
        console.log("UUID not found");
    }
 }

 //udate the users
 exports.updateUsers =async(req,res)=>{
     const{id} = req.params;
     const{first_name,last_name,street,address,city,state,email,phone} = req.body;
     try{
        const dateUpdate= moment(new Date()).format("YYYY-MM-DD  hh:mm:ss");
        const updateUserData = await users.findByIdAndUpdate({_id:id},{
            first_name,last_name,street,address,city,state,email,phone,dateUpdated:dateUpdate  
        },{new:true});

        await updateUserData.save();
        res.status(200).json("Successfully Updated");
     }catch(error){
        res.status(500).json(error);
        console.log("UUID not found");
     }
 }


