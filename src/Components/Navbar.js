import React from 'react'
// import {IoIosAdd} from 'react-icons/io';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css';
// import logo from '../Images/logo.png';
import { Button } from './Button';
import {Link} from 'react-router-dom';

function Navbar() {
  let searchBtn=document.querySelector('.searchBtn');
  let closeBtn=document.querySelector('.closeBtn');
  let searchBox=document.querySelector('.searchBox');
  let menuToggle=document.querySelector('menuToggle');
  let navigation=document.querySelector('.navigation');
  let header=document.querySelector('header');

  const a=()=>{
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
    menuToggle.classList.add('hide');
    header.classList.remove('open');
  }

  const b=()=>{
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
    menuToggle.classList.remove('hide');
  }
  const c=()=>{
    header.classList.toggle('open');
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
  }
  return (
    <header className='head'>
      <a href='#' className='logo'>TRACK IT</a>
      <div className='group'>
        <ul className='navigation'>
          <li><a href='#' >Home</a></li>
          <li><a href='#'>About us</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Blog</a></li>
        </ul>
        <Link to='/signup'>
          <a href='#'><Button/></a>
        </Link>
          {/* <Button className='bt'/> */}
        <div className='search'>
          <span className='icon'>
            <SearchIcon  className='searchBtn' onClick={a} name='search-outline'  />
            <CloseIcon className='closeBtn' onClick={b} name='close-outline'  />
            <MenuIcon className='menuToggle' onClick={c} />
          </span>
        </div>  
        <div className='searchBox'>
          <input type='text' placeholder='Search here...'></input>
        </div>
      </div>
    </header>
  )
}

export default Navbar