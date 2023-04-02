import React from 'react'
import { Link } from 'react-router-dom'

export const TransHistCard = () => {
  return (
    <div className='m-5'><div className="card ">
    <h5 className="card-header">Asset Id</h5>
    <div className="card-body row  d-flex ">
      <div className='col-8'>

        <h5 className="card-title">Asset Name:</h5>
        <h6 className="card-title">Transaction Type:</h6>
        <p className="card-text">Timestamp:</p>
        <Link to="/asset" className="btn btn-primary">View</Link></div>
      <div className='col'>
        <img src='http://picsum.photos/300/200' className='rounded float-end'></img>
      </div>
    </div>
  </div></div>
  )
}
