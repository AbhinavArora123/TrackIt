import './App.css';
import Busroutes from './Components/Busroutes';
import Feestatus from './Components/Feestatus';
import Footer from './Components/Footer';
import Galary from './Components/Galary';
import Inquiry from './Components/Inquiry';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import {gapi} from 'gapi-script';
// import { useEffect } from 'react';

// const clientId="720294155881-rvt89jpuh5u4i7t94dkavbh91jtc43q5.apps.googleusercontent.com";

function App() {

  // useEffect(()=>{
  //   function start(){
  //     gapi.twitter.init({
  //       clientId:clientId,
  //       scope:""
  //     })
  //   };
  //   gapi.load('client:auth2',start);
  // })

  return (
    <Router>
      <div className='App'>
      <Routes>
        <Route path='home' element={[<Navbar />,<Galary/>,<Busroutes/>,<Feestatus/>,<Inquiry/>,<Footer/>]} /> 
        <Route path='busroutes' element={[<Navbar/>,<Busroutes />,<Footer/>]} /> 
        <Route path='feestatus' element={[<Navbar/>,<Feestatus />,<Footer/>]} /> 
        <Route path='galary' element={[<Navbar/>,<Galary />,<Footer/>]} /> 
        <Route path='inquiry' element={[<Navbar/>,<Inquiry />,<Footer/>]} /> 
        <Route path='login' element={<Login />} /> 
        <Route path='signup' element={<Signup />} /> 
      </Routes>
      </div>
    </Router>
  );
}

export default App;


