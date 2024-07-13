// import React from 'react'

import { useState } from "react"
import restdata from "../Data/Api";

const Rest_1 = () => {
    const [restapi , setRestapi]= useState(restdata);
  return (
    <div className="container">
      <div className="row">
        {restapi.map((t) => {
          return (
            <div className="col-md-3 py-2 mt-3" key={t.id}>
                <div className="card" style={{ width: '16rem' }}>
                  <img src={t.thumbnail} className="card-img-top m-auto py-2 px-2" alt="..." style={{ height: "250px" }} />
                  <div className="card-body">
                    <h5 className="card-title">{t.title.slice(0,20)}</h5>
                    <p className="card-text">{t.description.slice(0, 50)}</p>
                    <a href="#" className="btn btn-danger">Go somewhere</a>
                  </div>
                </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Rest_1
