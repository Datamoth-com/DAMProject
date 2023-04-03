import React from 'react'
import "./homePage.css";
import { Carousal } from '../../Carousal/Carousal';
import { ConnectWallet} from "@thirdweb-dev/react";





const HomePage = () => {
  return (
    <>
      <div className='GreyBG'> 
        <Carousal />
        <div className='container p-5 '>
          <div className='d-flex'><h1>What does D.A.M. do?</h1></div>
          <div className='d-flex'>
            <h4>The Decentralized Asset Manager in a application that helps people to create,transfer and manage their assets </h4>
                <ConnectWallet/>

            
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage