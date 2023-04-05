import React from 'react'
import "./AssetCard.css"

import { Link } from "react-router-dom"

export const AssetCard = ({ asset }) => {
  return (
    <div>
      <div className="card m-4 p-3">
        <img src={asset.metadata.image} alt="Card image" className="card-image " />
        <div className="card-content">
          <h5>{asset.metadata.name}</h5>
          <h6>id: {asset.metadata.id}</h6>
          <Link
            to={`/asset/${asset.metadata.id}`}
            className="btn btn-primary">
            view
          </Link>
        </div>
      </div>

    </div>
  )
}
