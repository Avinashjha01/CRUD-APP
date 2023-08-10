import React,{useContext, useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { adddata } from './context/Context';

const Register = () => {

  const {udata,setUdata} = useContext(adddata);

  const history = useHistory("");
    const [inpval, setINP] = useState({
    first_name:"",
    last_name:"",
    street:"",
    address:"",
    city:"",
    state:"",
    email:"",
    phone:""
 })
   const setdata =(event)=>{
    console.log(event.target.value);
     const{name,value} = event.target;
     setINP((preval)=>{
        return{
            ...preval,
            [name]:value
        }
     })
   }
//connecting Fronted to Backend
   const addinpdata =async(event) =>{
    event.preventDefault();
    const{first_name,last_name,street,address,city,state,email,phone} =inpval;
       const res = await fetch("/users/register",{
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body:JSON.stringify({first_name,last_name,street,address,city,state,email,phone})
       });
       const data = await res.json();
       console.log(data);
       if(res.status===400 ||!data){
       alert("Something went wrong");
       console.log("error");
       }else{
        history.push("/");
        setUdata(data)
        console.log("data added");
        
       
       }
   }



    return (
        
        <div className='constainer'>
            <h1>Customer Details</h1>
              <NavLink to="/" >Home</NavLink> 
            <form className='mt-5'>
                <div className='row'>
                <div class="mb- 3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputEmail1" class="form-label">First name</label>
                    <input  type="text" onChange={setdata} value={inpval.name1} name="first_name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                   
                </div>
                <div class="mb- 3 col-lg-6 col-md-6 col-12">
                  <label for="exampleInputPassword1" class="form-label">Last name</label>
                    <input  type="text" onChange={setdata} value={inpval.name2}name="last_name" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb- 3 col-lg-6 col-md-6 col-12">
                  <label for="exampleInputPassword1" class="form-label">Street</label>
                    <input  type="text" onChange={setdata} value={inpval.Street}name ="street" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb- 3 col-lg-6 col-md-6 col-12">
                 <label for="exampleInputPassword1" class="form-label">Address</label>
                    <input  type="text" onChange={setdata}value={inpval.Address} name="address" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb- 3 col-lg-6 col-md-6 col-12">
                 <label for="exampleInputPassword1" class="form-label">City</label>
                    <input  type="text" onChange={setdata} value={inpval.City}name="city" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb- 3 col-lg-6 col-md-6 col-12">
                 <label for="exampleInputPassword1" class="form-label">State</label>
                    <input  type="text" onChange={setdata}value={inpval.State} name ="state" class="form-control" id="exampleInputPassword1" />
                    <div class="mb- 3 col-lg-6 col-md-6 col-12">
                 <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input  type="email" onChange={setdata} value={inpval.Email}name ="email" class="form-control" id="exampleInputPassword1" />
                    
                </div>
                <div class="mb- 3 col-lg-6 col-md-6 col-12">
                 <label for="exampleInputPassword1" class="form-label">Phone</label>
                    <input  type="text" onChange={setdata} value={inpval.Phone} name="phone"class="form-control" id="exampleInputPassword1" />
                  
                </div>
                   
                </div>
                 <button type="submit" onClick={addinpdata} class="btn btn-primary mt-2 " >Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Register