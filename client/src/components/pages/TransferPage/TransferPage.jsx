import React from 'react'
import "./TransferPage.css"
const TransferPage = () => {
  return (
    <div className='m-5 '>
        
        
        <div className="container border border-5 rounded-4 p-5 formbg ">


    <form method='POST'>
      <br />
      <div className="mb-3 w-10">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">Asset ID:</label>
        <input type="text" className="form-control " id="exampleFormControlInput1" placeholder="Asset ID" />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label text-white">Receiver ID:</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Receiver" />
      </div>


      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Message:</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>


      <div className='mb-3'>
        <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Asset Transfer Documents:</label></div>
      <div className="input-group">
        <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
      </div><br></br>



      <div>
        <input className="btn btn-primary" type="submit" value="Transfer"/>
      </div><br></br>
    </form></div>


</div>
  )
}

export default TransferPage