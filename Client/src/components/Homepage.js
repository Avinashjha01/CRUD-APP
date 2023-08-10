import React, { useEffect, useState,useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { adddata } from './context/Context';
import { updatedata } from './context/Context';
import { deldata } from './context/Context';
const Home = () => {

  const history = useHistory("");
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
  const { udata, setUdata } = useContext(adddata);
  const  {updata, setUPdata} = useContext(updatedata);
  const  {dltdata, setDLTdata} = useContext(deldata);
  //connecting Fronted to Backend 
  const getdata = async () => {

    const res = await fetch("/users/getAlluser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 400 || !data) {
      console.log("error");
    } else {
      setUserdata(data);

      console.log("get added");
    }
  }

  useEffect(() => {
    getdata();
  }, [])

  const deleteuser = async (id) => {
    const res2 = await fetch(`/users/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 400 || !deletedata) {
      console.log("error");
    }
    else {
      console.log("User deleted");
      setDLTdata(deletedata);
       getdata();
      history.push("/");
    }
  }

  return (

    <>
      {
        udata ?
          <>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              <strong>{udata.first_name}</strong>  added sucessfully!
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </> : ""
      }
      {
        updata ?
          <>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              <strong>{updata.first_name}</strong>  updated sucessfully!
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </> : ""
      }
     {
        dltdata ?
          <>
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>{dltdata.first_name}</strong> deleted sucessfully!
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </> : ""
      }
       





      <div className='mt-5'>
        <h1>Customer List Screen</h1>
        <div className='container'>
          <div className="add_btn mt-2">
            <NavLink to="/register" className="btn btn-primary">Add customer</NavLink>
          </div>


          <table class="table mt-1">
            <thead>
              <tr className="table-dark">
                <th scope="col">id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Eamil</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                getuserdata.map((element, id) => {
                  return (
                    <tr>
                      <th scope="row">{id + 1}</th>
                      <td>{element.first_name}</td>
                      <td>{element.last_name}</td>
                      <td>{element.address}</td>
                      <td>{element.city}</td>
                      <td>{element.state}</td>
                      <td>{element.email}</td>
                      <td>{element.phone}</td>
                      <td className="d-flex  justify-content-between">
                        <NavLink to={`view/${element._id}`}><button className='btn btn-success'><i class="fas fa-eye"></i></button></NavLink>
                        <NavLink to={`edit/${element._id}`}> <button className="btn btn-danger"><i class="fas fa-pen"></i></button></NavLink>
                        <button className="btn btn-primary" onClick={() => deleteuser(element._id)}><i class="fas fa-trash" ></i></button>

                      </td>


                    </tr>

                  )
                })
              }


            </tbody>
          </table>
        </div>

      </div>
    </>
  )

}

export default Home