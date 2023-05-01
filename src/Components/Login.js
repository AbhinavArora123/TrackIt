import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import logo from '../Images/TrackIt.png';
import './Login.css';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';

function App() {
  const history=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

const loggedInUser=async (e)=>{
  e.preventDefault();

  const res=await fetch('/signin',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email,
      password
    })
  });
  const data=res.json();
  if(res.status===400 || res.status===422 || !data){
    window.alert("Invalid Credentials");
  } else{
    window.alert("Login Successful")
    history('/');
  }
}

  return (
    <MDBContainer fluid className="p-2 my-0" >
    <div className='signin' >
      <Link to='/login'>
       <img className='login__logo' src={logo} alt='logo'/>
      </Link>
       
    </div>
    <div style={{paddingLeft:'12%'}}>
      <MDBRow style={{width:'85%', borderRadius: '25px', boxShadow:'10px 10px black',backgroundColor:'rgb(221,230,229'}}>
      
        <MDBCol col='10' md='6' className=' lg-2 d-flex align-items-center'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Phone" />
        </MDBCol>

        <MDBCol col='4' md='4' >
        <h1 id='heading' className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"><b>LOG IN</b></h1>
<form method='POST'>
          <MDBInput wrapperClass='mb-4' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput wrapperClass='mb-4' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' id='formControlLg' type='password' size="lg"/>


          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" type='submit' onClick={loggedInUser} size="mid">Sign in</MDBBtn>
</form>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Continue with facebook
          </MDBBtn>

          <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Continue with twitter
          </MDBBtn>

        </MDBCol>

      </MDBRow>
</div>
    </MDBContainer>
  );
}

export default App;