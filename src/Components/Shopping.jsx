// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import'../Style/shopping.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import { addcart, remove, removeall } from '../Redux/Cart';

const Shopping = () => {
    const [price , setPrice]= useState();
    const [qty , setQty]= useState();
    const dispatch = useDispatch();
      const increment = (x)=>{
           dispatch(addcart(x))
      }
      const decrement = (x)=>{
        dispatch(remove(x))
      }
      const Remove = (x)=>{
        dispatch(removeall(x))
       }
       const totalp =()=>{
        let tprice = 0;
        getdata.map((x)=>{
          tprice += x.price*x.qty
        })
        setPrice(tprice)
       }
       const totalq =()=>{
        let tqty = 0;
        getdata.map((x)=>{
          tqty += x.qty
        })
        setQty(tqty)
       }
       useEffect(()=>{
        totalp()
        totalq()
       })
       const getdata = useSelector((state)=>state.cartReducer.carts)
    return (
      <div className="container bootstrap snippets bootdey">
    <div className="col-md-9 col-sm-8 content">
      <div className="row">
        <div className="col-md-12">
          <div className="panel">
            <div className="panel-body"> 
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Description</th>
                      <th className='px-3'>Qty</th>
                      <th className='px-3'>Price</th>
                      <th className='px-3'>Total</th>
                      <th className='px-3'>Del</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getdata.map((x)=>{
                      return(
                        <tr key={x.id}>
                      <td><img src={x.imgUrl} className="img-cart w-50 img-fluid py-4" alt='' /></td>
                      <td className='py-4'><p>{x.desc.slice(0,20)}...</p></td>
                      <td className='d-flex bton'><button className='mx-2 btn btn-danger' onClick={()=>decrement(x)}>-</button>{x.qty}<button className='mx-2 btn btn-success' onClick={()=>increment(x)}>+</button></td>
                      <td className='py-5'>$={x.price}</td>
                      <td className='py-5'>$={x.price*x.qty}</td>
                      <td onClick={()=>Remove(x)} className='py-5'><DeleteIcon/></td>
                    </tr>
                      )
                    })}
                    <tr>
                      <td colSpan={5} className="text-left"><strong>Total Quantity</strong></td>
                      <td>Sr:{qty}</td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="text-left"><strong>Total</strong></td>
                      <td>$={price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='links d-flex justify-content-between'>
          <Link to="/home" className="btn btn-success"><span className="glyphicon glyphicon-arrow-left" />&nbsp;Continue Shopping</Link>
          <Link to="#" className="btn btn-primary pull-right">Checkout<span className="glyphicon glyphicon-chevron-right" /></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
  }

export default Shopping
