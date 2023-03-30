import React from 'react'
import "./AssetCard.css"

export const AssetCard = () => {
  return (
    <div className='mb-3'><div className="card ">
  <h5 className="card-header">Asset Id</h5>
  <div className="card-body row  d-flex ">
    <div className='col-8'>
    
    <h5 className="card-title">Asset Name</h5>
    <p className="card-text">Asset Description</p>
    <a href="#" className="btn btn-primary">View</a></div>
    <div className='col'>
        <img src='http://picsum.photos/300/200' className='rounded float-end'></img>
    </div>
  </div>
</div></div>
  )
}