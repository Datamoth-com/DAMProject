import { useState, useEffect } from 'react'
import "./TransferPage.css"

import { useParams } from 'react-router-dom';
// Thirdweb
import { useNFT, useContract, useTransferNFT, Web3Button, useAddress } from "@thirdweb-dev/react";

const TransferPage = () => {
  const contractAddress = "0xA16db66ec5cE6D42E4b22CbA6020367F9FeF676E"
  const { contract } = useContract(contractAddress);
  const [asset, setAsset] = useState();
  const [recieverWalletAddress, setRecieverWalletAddress] = useState('');
  const address = useAddress();
  const params = useParams();
  const { mutateAsync: transferNFT, isLoading, error, } = useTransferNFT(contract);

  const { data } = useNFT(contract, params.id);
  
  function getAsset(){
    setAsset(data);
  }

  useEffect(() => {
    getAsset()
  },[]);

  console.log(asset); 

  return (
    <div>
      {asset ? (
        <div>
          <h1 className='heading'>TRANSFER</h1>
          <div className="container border border-5 rounded-4 p-5 formbg ">
            <div>
              <br />
              <div className="mb-3 w-10">
                <label htmlFor="exampleFormControlInput1" className="form-label text-white">Asset ID:</label>
                <input
                  type="text"
                  className="form-control "
                  id="exampleFormControlInput1"
                  placeholder="Asset ID"
                  value={asset.metadata.id}
                />
              </div>
              <div className="mb-3 w-10">
                <label htmlFor="exampleFormControlInput1" className="form-label text-white">Sender Wallet Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Asset ID"
                  value={address}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label text-white">Receiver Wallet Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Receiver"
                  onChange={(e) => setRecieverWalletAddress(e.target.value)}
                  value={recieverWalletAddress}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Message:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <br></br>
              <div>
                <Web3Button
                  className="btn btn-success"
                  contractAddress={contractAddress}
                  action={() =>
                    transferNFT({
                      to: recieverWalletAddress, // Address to transfer the token to
                      tokenId: asset.metadata.id, // Token ID to transfer
                    })
                  }
                >
                  Transfer
                </Web3Button>
              </div>
              <br />
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default TransferPage