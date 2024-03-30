import React, { useState } from 'react'
import { Timeline } from '../../Timeline/Timeline';
import { Link, useParams } from 'react-router-dom';
import "./Asset.css"
// Thirdweb
import { useNFT, useContract, useTransferNFT, Web3Button,useAddress } from "@thirdweb-dev/react";



const Asset = () => {
  const walletAddress = useAddress();
  const { contract } = useContract("0x0bD02D4C067981074f23289133bBf2764d75D650");
  const { mutateAsync: transferNFT, isLoading, error, } = useTransferNFT(contract);

  const params = useParams();
  const [asset, setAsset] = useState();

  const getAssets = async () => {
    try {
      const tokenId = params.id;
      const { data: nft, isLoading, error } = await useNFT(contract, params.id);
      setAsset(nft); // Setting asset to nft, not data
      console.log(nft); // Logging nft, not asset
    } catch (error) {
      console.error("Error fetching assets:", error);
    }
  }
  
  getAssets()

  return (
    <div>
      {
        asset ? (
          <>
            <section class="tilt">
              <div className='container'>
                <div className='row m-4 d-flex card-body row1'>
                  <div className='col '>
                    <img src={asset.metadata.image} className='Timg border border-2 rounded-4 m-2 fixed-size-image' ></img> {/*change aspect ratio*/}
                  </div>
                  <div className='col-6  border border-2 rounded-4'>
                    <span>
                      <table className='table  table-hover'>
                        <thead>
                          <tr>
                            <th scope="col"> <h5>Asset Name: </h5></th>
                            <td>{asset.metadata.name || ""}</td>

                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Asset ID:</th>
                            <td>{params.id}</td>
                          </tr>

                          {/* <tr>
                            <th scope="row">Asset Category:</th>
                            <td>{`${asset.metadata.attributes[0]?.trait_type} | ${asset.metadata.attributes[0]?.value}`}</td>

                          </tr> */}

                          <tr>
                            <th scope="row">Description:</th>
                            <td>{asset.metadata.description}</td>
                          </tr>

                          {/* <tr>
                            <th scope="row">Asset Category Type:</th>
                            <td>{asset.metadata.attributes[1]?.value}</td>
                          </tr> */}

                        </tbody>
                      </table>
                    </span>
                    <div>
                      <Link to={`/transfer/${asset.metadata.id}`}>
                        <button className="btn btn-primary">Transfer</button>
                      </Link>
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
        ) : (
          <h1>Loading....</h1>
        )
      }
    </div>
  )
}
export default Asset;