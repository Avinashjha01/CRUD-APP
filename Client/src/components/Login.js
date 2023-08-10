import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
function Login() {
  return (
    <div className='constainer'>
         <h1>Login Page</h1>
              <NavLink to="/" >Home</NavLink> 
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
   </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login