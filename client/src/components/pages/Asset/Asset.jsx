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
                <h1>Asset ID: Asset_ID</h1> <br></br>
                <h3>Asset Name: Asset_Name</h3>  
                <h3>Serial Number: Number</h3>     
                <h3>Asset Type: Type</h3>     
                <h3>Description: wzesxrdctfvyftgvuybhinjuok</h3>

                       <div>
                          <Link to="/Transfer">
                            <button className="btn btn-primary">Transfer</button>
                           </Link>
                        </div>

   
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