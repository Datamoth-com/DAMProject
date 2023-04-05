import React from 'react'
import "./homePage.css";
import { Carousal } from '../../Carousal/Carousal';
import { Link } from 'react-router-dom';
import { ImgOverText } from '../../ImgOverText/ImgOverText';

// ThirdWeb
import { useAddress } from "@thirdweb-dev/react";


const HomePage = () => {
  const address = useAddress();
  console.log("MetaMask Address: "+ address);


  return (
    <>
      <div >
        <div className="jumbotron">
          <div className="container">
            <div className="main">
              <h1>Register your assets</h1>
              <Link to="/create" className="btn-main">
                Register</Link>
            </div>
          </div>
        </div>
        <div><ImgOverText /></div>
        <div><Carousal /></div>
        <div className="supporting">
          <div className="container">
            <div className="col">
              <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/design.svg" />
              <h2>Create</h2>
              <p>Register your assets</p>
              <Link to="/create" className="btn-default">Learn More</Link>
            </div>
            <div className="col">
              <img src="https://img.icons8.com/ios-filled/256/visible--v1.png" />
              <h2>View</h2>
              <p>View your assets and manage them</p>
              <Link to="/assetList" className="btn-default">Learn More</Link>
            </div>
            <div className="col">
              <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/deploy.svg" />
              <h2>Transfer</h2>
              <p>Transfer your assets to others</p>
              <Link to="/history" className="btn-default">Learn More</Link>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  )
}

export default HomePage