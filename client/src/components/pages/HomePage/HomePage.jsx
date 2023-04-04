import React from 'react'
import "./homePage.css";
import { Carousal } from '../../Carousal/Carousal';
import { ConnectWallet} from "@thirdweb-dev/react";






const HomePage = () => {
  return (
    <>
      <div > 
        <Carousal />
        <div className='container p-5 '>
          <div className='d-flex'>
          <h1 style={{textTransform: "uppercase", margin: '1rem'}}>What does D.A.M. do?</h1>
          </div>
          <div className='d-flex' style={{margin: '3rem'}}>
            <h5>The Decentralized Asset Manager in a application that helps people to create,transfer and manage their assets </h5>
                <ConnectWallet />
                
          </div>
        </div>
        
      </div>
    </>
  )
}

export default HomePage