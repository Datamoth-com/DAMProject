import React from 'react'

const Create = () => {
  return (
    <div>

      <div className="container border border-primary">


        <form method='POST'>
          <br />
          <div className="mb-3 w-10">
            <label for="exampleFormControlInput1" className="form-label">Asset Name:</label>
            <input type="text" className="form-control " id="exampleFormControlInput1" placeholder="name" />
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Serial Number:</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name" />
          </div>

          <div classNameName='mb-3'>
            <select className="form-select" aria-label="Default select example">
              <option selected>Select the type of asset</option>
              <option value="1">Physical Asset</option>
              <option value="2">Digital Assets/Docs</option>
            </select>
          </div>
          <br></br>


          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Additional description:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>


          <div classNameName='mb-3'>
            <label for="exampleFormControlTextarea1" className="form-label">Asset image:</label></div>
          <div className="input-group">
            <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
          </div>

          <div classNameName='mb-3'>
            <label for="exampleFormControlTextarea1" className="form-label">Asset Documentation:</label></div>
          <div className="input-group">
            <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
          </div>
          <br></br>
          <div>
            <input class="btn btn-primary" type="submit" value="Submit"></input>
          </div>
        </form></div>


    </div>
  )
}

export default Create;