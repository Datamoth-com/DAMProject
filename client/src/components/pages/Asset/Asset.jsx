import React from 'react'
import Timeline from '../../Layouts/timeLine/Timeline';
import "./Asset.css"
const Asset = () => {
  return (
    <div>
      <div className='container'>
        <div className='row m-4 d-flex card-body row1 '>  {/*  Asset details */}
          <div className='col'>
            <img src='http://picsum.photos/300/200' className='img-thumbnail' ></img> {/*asset image*/}
          </div>
          <div className='col-6 '>
            <span>Asset ID: </span><span>Asset_ID</span> 
            <p>Asset Name: Asset_Name</p>
            <p>Serial Number: Number</p>

          </div>
          <div className='row'>   {/*Time line part*/}
          </div>
        </div>
      </div>
      <hr />
      <div style={{ marginTop: "5rem" }}>
        <h1 style={{ textAlign: 'center', color: "gray"}}>Product History Timeline</h1>
        <Timeline />
      </div>
      <hr />
    </div>
  )
}
export default Asset;