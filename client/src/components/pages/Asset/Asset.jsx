import React from 'react'
import { Timeline } from '../../Timeline/Timeline';
import "./Asset.css"
import { Link } from 'react-router-dom';
const Asset = () => {
  return (
    <div>  <section class="tilt">
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
      

    
  
</section>
      <div>
        <h1 className='heading'>Asset Ownership Timeline</h1>
        <Timeline/>
      </div>


    </div>
  )
}
export default Asset;