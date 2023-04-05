import React, { useEffect, useState } from 'react'
import { Timeline } from '../../Timeline/Timeline';
import "./Asset.css"
import { Link, useParams } from 'react-router-dom';
import { useNFT, useContract, useTransferNFT, Web3Button } from "@thirdweb-dev/react";

const Asset = () => {
  const walletAddress = "0xE3f40e003c926a2b546DbCd7716aa8559254fE82";
  const { contract } = useContract("0xA16db66ec5cE6D42E4b22CbA6020367F9FeF676E");
  const { mutateAsync: transferNFT, isLoading, error, } = useTransferNFT(contract);

  const params = useParams();
  const [asset, setAsset] = useState();

  const getAssets = async () => {
    const { data, isLoading, error } = await useNFT(contract, params.id);
    setAsset(data);
    console.log(asset);
  }
  getAssets()

  return (
    <div>
      {asset ? (
        <>
          <section className="tilt">
            <div className='container'>
              <div className='row m-4 d-flex card-body row1'>
                <div className='col'>
                  <img src={asset.metadata.image} className='img-thumbnail' ></img>
                </div>
                <div className='col-6'>
                  <span>
                    <h6>ID: {params.id}</h6><br></br>
                    <h5>Name: {asset.metadata.name || ""}</h5>
                    <span>Category: {`${asset.metadata.attributes[0].trait_type} | ${asset.metadata.attributes[0].value}`}</span>
                    <h6>Description: {asset.metadata.description}</h6>
                    <p>Category for: {asset.metadata.attributes[1].value}</p></span>
                  <div>
                      <Web3Button
                        contractAddress={"0xA16db66ec5cE6D42E4b22CbA6020367F9FeF676E"}
                        action={() =>
                          transferNFT({
                            to: walletAddress, // Address to transfer the token to
                            tokenId: params.id, // Token ID to transfer
                          })
                        }
                      >
                        Transfer
                      </Web3Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div>
            <h1 className='heading'>Asset Ownership Timeline</h1>
            <Timeline />
          </div>
        </>
      ) : (<h1>Loading....</h1>)}
    </div>
  )
}
export default Asset;