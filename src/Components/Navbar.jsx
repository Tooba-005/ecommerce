// import React from 'react'
import "../Style/Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Badge from '@mui/material/Badge';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const getdata = useSelector((state)=>state.cartReducer.carts)
  return (
    <div>
  <section id="topbar" className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <i className="ms-4"><span><LocalPhoneOutlinedIcon className="fs-5"/>+1 5589 55488 55</span></i>
        <i className="ms-4"><span><EmailOutlinedIcon className="fs-5"/>info@desiposh.com</span></i>
      </div>
      <div className="align-items-center mt-3 me-5">
      <p>FREE UK DELIVERY WHEN YOU SPEND £70 <span className="text-danger">SHOP NOW</span></p>
      </div>
      <div className="align-items-center me-4 mt-3">
      <p><AssistantPhotoIcon className="fs-5 text-success"/>PKR</p>
      </div>
      </section>
  <header id="header" className="d-flex justify-content-between align-items-center">
      <div className="logo ms-5">
        <Link to="/carousel"><img src="./Image/logo.png" alt="" className="img" /></Link>
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li><Link to="/home" className="text-decoration-none">All</Link></li>
          <li><Link to="/home" className="text-decoration-none">Pret Collection</Link></li>
          <li><Link to="/home" className="text-decoration-none">Kurta</Link></li>
          <li><Link to="/home" className="active text-decoration-none">Sale</Link></li>
          <li><Link to="/home" className="text-decoration-none">Autumn/Winter</Link></li>
          <li><Link to="/rest1" className="text-decoration-none">Mummy&Me</Link></li>
          <li><Link to="/rest" className="text-decoration-none">Kids</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      <div className="d-flex me-5">
      <Link to="/page" className="text-dark"><SearchIcon className="me-2"/></Link>
      <Link to="/page" className="text-dark"><Person2OutlinedIcon className="me-2"/></Link>
      <Link to="/page" className="text-dark text-decoration-none"><sup>0</sup><FavoriteBorderOutlinedIcon className="me-2"/></Link>
      <Link to="/shopping" className="text-dark text-decoration-none"><Badge badgeContent={getdata.length} color="primary">
    <ShoppingCartOutlinedIcon/>
    </Badge></Link>
      </div>
  </header>
</div>

  )
}

export default Navbar
