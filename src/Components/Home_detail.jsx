// import React from 'react'

import { useParams } from "react-router-dom";
import blogList from "../Data/blogdata";
import { useDispatch } from "react-redux";
import { addcart } from "../Redux/Cart";

const Home_detail = () => {
  const dispatch = useDispatch();
    const {id} = useParams();
    const add =(data)=>{
      dispatch(addcart(data))
    }

  const data = blogList.find((t)=>t.id == id)
  return (
    <div className="container">
    <div className="row">
    <div className="py-3">
    <img src={data.imgUrl} alt="" style={{height:"400px"}} className="border border-danger rounded-5"/>
    </div>
    <div className="">
    <h2 className="fw-bold">{data.title}</h2>
    <p className="">{data.desc}</p>
    <button className="rounded-3 bg-danger px-3 mx-5 border border-dark">Rating: 100</button> <button className="rounded-3 bg-danger px-2 mx-5 border border-dark" onClick={()=>add(data)}>Add Item{data.rating}</button>
    </div>
    </div>
    </div>
  )
}

export default Home_detail
