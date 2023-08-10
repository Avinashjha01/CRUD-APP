import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { NavLink, useParams, useHistory } from 'react-router-dom';


const Details = () => {
    const history = useHistory("");
    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

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
            setUserdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id)=>{

        const res2 = await fetch(`/users/deleteuser/${id}`,{
         method:"DELETE",
         headers:{
            "Content-Type":"application/json"
         }
        });
 
        const deletedata = await res2.json();
        console.log(deletedata);
 
        if(res2.status===400|| !deletedata){
         console.log("error");
        }
        else{
         console.log("User deleted");
         history.push("/");
        }
   }

    return (
        <div className="container mt-3">
             <NavLink to="/" >Home</NavLink> 
            <h1 style={{ fontWeight: 400 }}>Welcome {getuserdata.first_name} {getuserdata.last_name}</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                   
                    <div className="row">
                    
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <AccountCircleIcon style={{ fontWeight: 400 }}/> 
                            <p className="mt-3">FirstName: <span >{getuserdata.first_name}</span></p>
                            <p className="mt-3">LastName: <span >{getuserdata.last_name}</span></p>
                            <p className="mt-3"><MailOutlineIcon />Email: <span>{getuserdata.email}</span></p>
                            <p className="mt-3"><PhoneAndroidIcon />Phone: <span>+91 {getuserdata.phone}</span></p>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">
                        <div className="add_btn">
                        <NavLink to={`/edit/${getuserdata._id}`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                        <button className="btn btn-danger" onClick={()=>deleteuser(getuserdata._id)}><DeleteOutlineIcon /></button>
                     </div>
                        <p className="mt-3">Street: <span>{getuserdata.street}</span></p>  
                        <p className="mt-3"><LocationCityIcon />City: <span>{getuserdata.city}</span></p>
                        <p className="mt-3">State: <span>{getuserdata.state}</span></p>  
                        <p className="mt-3"><LocationOnIcon/>Address: <span>{getuserdata.address}</span></p>  
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Details