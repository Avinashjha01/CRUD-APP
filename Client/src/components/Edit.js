import React,{useState,useEffect, useContext} from 'react'
import { NavLink,useParams,useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { updatedata } from './context/Context';




function Edit() {
 
  //  const [getuserdata, setUserdata] = useState([]);
  // console.log(getuserdata);
    
   const  {updata, setUPdata} = useContext(updatedata);

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
       const setdata =(e)=>{
        console.log(e.target.value);
         const{name,value} = e.target;
         setINP((preval)=>{
            return{
                ...preval,
                [name]:value
            }
         })
       }

       
      
       const { id } = useParams("");
       console.log(id);
       const getdata = async () => {
   
           const res = await fetch(`/users/getuser/${id}`, {
               method: "GET",
               headers: {
                   "Content-Type": "application/json"
               }
           });
   
           const data = await res.json();
           console.log(data);
   
           if (res.status === 400 || !data) {
               console.log("error ");
   
           } else {
                setINP(data)
                console.log("get data");
           }
       }

       useEffect(() => {
        getdata();
    }, [])

  const updateduser = async(e)=>{
    e.preventDefault();
    const {first_name,last_name,street,address,city,state,email,phone}=inpval;
    const res2 = await fetch(`/users/updateuser/${id}`,{
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body:JSON.stringify({first_name,last_name,street,address,city,state,email,phone})
    });

    const data2 = await res2.json();
    console.log(data2);
    if(res2.status===500||!data2){
       alert("fill the data");
    }
    else{
       
       history.push("/");
       setUPdata(data2);
    }
  }

  return (
    <div>
        <div className='constainer'>
            <h1>Update Customer Details</h1>
              <NavLink to="/" >Home</NavLink> 
            <form className='mt-5'>
                <div className='row'>
                <div class="mb- 3 col-lg-6 col-md-6 col-12">
                    <label for="exampleInputEmail1" class="form-label">First name</label>
                    <input  type="text" onChange={setdata} value={inpval.first_name} name="first_name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                   
                </div>
                <div class="mb- 3 col-lg-6 col-md-6 col-12">
                  <label for="exampleInputPassword1" class="form-label">Last name</label>
                    <input  type="text" onChange={setdata} value={inpval.last_name}name="last_name" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb- 3 col-lg-6 col-md-6 col-12">
                  <label for="exampleInputPassword1" class="form-label">Street</label>
                    <input  type="text" onChange={setdata} value={inpval.street}name ="street" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb- 3 col-lg-6 col-md-6 col-12">
                 <label for="exampleInputPassword1" class="form-label">Address</label>
                    <input  type="text" onChange={setdata}value={inpval.address} name="address" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb- 3 col-lg-6 col-md-6 col-12">
                 <label for="exampleInputPassword1" class="form-label">City</label>
                    <input  type="text" onChange={setdata} value={inpval.city}name="city" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb- 3 col-lg-6 col-md-6 col-12">
                 <label for="exampleInputPassword1" class="form-label">State</label>
                    <input  type="text" onChange={setdata}value={inpval.state} name ="state" class="form-control" id="exampleInputPassword1" />
                    <div class="mb- 3 col-lg-6 col-md-6 col-12">
                 <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input  type="email" onChange={setdata} value={inpval.email}name ="email" class="form-control" id="exampleInputPassword1" />
                    
                </div>
                <div class="mb- 3 col-lg-6 col-md-6 col-12">
                 <label for="exampleInputPassword1" class="form-label">Phone</label>
                    <input  type="text" onChange={setdata} value={inpval.phone} name="phone"class="form-control" id="exampleInputPassword1" />
                  
                </div>
                   
                </div>
                 <button type="submit" onClick={updateduser}class="btn btn-primary mt-2 " >Submit</button>
                </div>
            </form>

        </div>
        </div>
  )
}

export default Edit