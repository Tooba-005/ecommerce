
import { useState } from "react"
import { Link } from "react-router-dom"
import blogList from "../Data/blogdata"
// import React from 'react'

const Home = () => {
  const [apidata]=useState(blogList)
  return ( 
    <>
    <h2>hello world</h2>
    <div className="mt-1" style={{position:"relative"}}>
    <p style={{position:"absolute"}} className="text-white fs-3 mt-5 mx-5"><strong>Kurta</strong></p>
    <p className="text-white mt-5 mx-5 pt-5" style={{position:"absolute"}}>Large variety of Kurta from Pakistani brands like Khaadi, Sana Safinaz, Maria B, Polkadots and many others.</p>
    <img src="/Image/a.jpg" className="img-fluid w-100" style={{height:"150px"}} alt=""></img>
    </div>
    <div className="container">
    <img src="/Image/k.PNG" alt="" className="w-100 mt-3" />
      <div className="row">
        {apidata.map((t) => {
          return (
            <div className="col-md-3 py-2" key={t.id}>
              <Link to={`/${t.id}`} className="text-decoration-none">
                <div className="card" style={{ width: '16rem' }}>
                  <img src={t.imgUrl} className="card-img-top m-auto py-2 px-2" alt="..." style={{ height: "350px" }} />
                  <div className="card-body">
                    <h5 className="card-title">{t.title.slice(0, 20)}</h5>
                    <p className="card-text">{t.desc.slice(0, 50)}</p>
                    <a href="#" className="btn btn-danger">Go somewhere</a>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
      <div className="text-center">
        <p className="text-secondary mt-3">You have viewed 12 of 105 products</p>
        <hr className="m-auto text-dark" style={{ width: "260px" }} />
        <button className="bg-white px-5 py-2 mt-3 rounded-5 mb-5">Load More</button>
      </div>
    </div><div>
        <img src='/Image/footer.PNG' alt='' className='w-100' />
      </div><div className='d-flex mt-4'>
        <p className='me-auto mx-3'>Copyright 2024 <span className='text-info'>DESI POSH</span> all rights reserved. Made with ❤</p>
        <p className='mx-3'>About Us&nbsp;&nbsp;&nbsp;Shipping&nbsp;&nbsp;&nbsp;ReturnsPolicy&nbsp;&nbsp;&nbsp;Contact Us&nbsp;&nbsp;&nbsp;Privacy Policy&nbsp;&nbsp;&nbsp;Search</p>
      </div></>
  )
}

export default Home

