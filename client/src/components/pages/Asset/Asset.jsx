import React from 'react'
import { Timeline } from '../../Timeline/Timeline';
import "./Asset.css"
import { Link } from 'react-router-dom';

const Asset = () => {
  return (
    <div>  <section class="tilt">
      <div className='container'>
        <div className='row m-4 d-flex card-body row1'>  {/*  Asset details */}
          <div className='col '>
            <img src='http://picsum.photos/300/200' className='Timg  border border-2 rounded-4 m-2' ></img> {/*change aspect ratio*/}
          </div>
          <div className='col-6  border border-2 rounded-4'>
            <span>
              <table className='table  table-hover'>
                <thead>
                  <tr>
                    <th scope="col"> <h3>Asset Name: </h3></th>
                    <td>Asset Name</td>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Asset ID:</th>
                    <td>Asset_ID</td>
                  </tr>

                  <tr>
                    <th scope="row">Asset Type:</th>
                    <td>Type</td>
                  </tr>

                  <tr>
                    <th scope="row">Description:</th>
                    <td>Description content of the asset</td>
                  </tr>
                </tbody>
              </table>
            </span>
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
        <Timeline />
      </div>


    </div>
  )
}
export default Asset;