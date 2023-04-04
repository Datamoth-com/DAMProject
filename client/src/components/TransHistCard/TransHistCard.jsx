import React from 'react'
import { Link } from 'react-router-dom'

export const TransHistCard = () => {
  return (
<div className="card m-4 p-3">
      <img src={"http://picsum.photos/300/200"} alt="Card image" className="card-image " />
      <div className="card-content">
        <h1>Asset Name</h1>
        <h4>Asset ID</h4>
      </div>
    </div>
  )
}
