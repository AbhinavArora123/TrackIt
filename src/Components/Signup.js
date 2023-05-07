import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
// import Link from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import './Signup.css';
import logo from '../Images/TrackIt.png';
import PersonIcon from '@mui/icons-material/Person';
import NumbersIcon from '@mui/icons-material/Numbers';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';

function Signup() {

  const history=useNavigate();
    const[user,setUser]=useState({
      name:"",rollNo:"",branch:"", email:"",password:"",repeatPass:""
    });
    let name,value;
    const handleInputs=(e)=>{
      name=e.target.name;
      value=e.target.value;

      setUser({...user,[name]:value})
    }
    
    const PostData=async (e)=>{
      e.preventDefault();
      const{name,rollNo,branch,email,password,repeatPass}=user;
      
      try{
      const res=await fetch("./register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,rollNo,branch,email,password,repeatPass
        })
      });
      const data=await res.json();
      
      if(data.status===400 || data.status===422 || !data){
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else{
        window.alert("Successful Registration");
        console.log("Successfully Registered");
        history('/');
      }
    } catch(err){
      console.log(err);
    }
  } 

  
  return (
      
    <MDBContainer className='mdb' fluid>
    <div className='signin'>
      <Link to='/login'>
       <img className='login__logo' src={logo} alt='logo'/>
      </Link>
       {/* <PersonIcon/> */}
    </div>
      <MDBCard className='text-black m-5' style={{borderRadius: '25px', boxShadow:'10px 10px black',backgroundColor:'rgb(221,230,229'}}>
        <MDBCardBody method="POST">
          <MDBRow>
            <MDBCol  md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h1 id='heading' className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"><b>SIGN UP</b></h1>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <PersonIcon />
                <MDBInput name='name' value={user.name} placeholder='Your Name' onChange={handleInputs} id='form1' type='text' className='w-100' style={{marginLeft:'5px'}} />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <NumbersIcon/>
                <MDBInput name='rollNo' value={user.rollNo} placeholder='Your Roll Number' onChange={handleInputs} id='form2' type='email' style={{marginLeft:'5px'}} />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <LibraryBooksIcon/>
                <MDBInput name='branch' value={user.branch} placeholder='Your Branch' onChange={handleInputs} id='form2' type='text' style={{marginLeft:'5px'}} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <EmailIcon/>
                <MDBInput name='email' value={user.email} placeholder='Your Email' onChange={handleInputs} id='form2' type='email' style={{marginLeft:'5px'}} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <PasswordIcon/>
                <MDBInput name='password' value={user.password} placeholder='Password' onChange={handleInputs} id='form3' type='password' style={{marginLeft:'5px'}} />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <EnhancedEncryptionIcon/>
                <MDBInput name='repeatPass' value={user.repeatPass} placeholder='Repeat your password' onChange={handleInputs} id='form4' type='password' style={{marginLeft:'5px'}} />
              </div>

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='mb-4' type='submit' onClick={PostData} size='lg'>Register</MDBBtn>
              <h5>Already have an Account?</h5>
              <Link to='/login'>
              <MDBBtn id='glow-on-hover' className='mb-4' size='lg'>Login</MDBBtn>
              </Link>

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://cdn.pixabay.com/photo/2016/07/06/20/54/schoolbus-1501332__340.png' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Signup;