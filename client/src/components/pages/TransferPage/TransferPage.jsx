import React from 'react'

const TransferPage = () => {
  return (
    <div className='m-3'>
        Transferpage
        
        <div className="container border border-5 rounded-5 p-3">


    <form method='POST'>
      <br />
      <div className="mb-3 w-10">
        <label htmlFor="exampleFormControlInput1" className="form-label">Asset ID:</label>
        <input type="text" className="form-control " id="exampleFormControlInput1" placeholder="Asset ID" />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Receiver ID:</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Receiver" />
      </div>


      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message:</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>


      <div className='mb-3'>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Asset Transfer Documents:</label></div>
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