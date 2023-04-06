import React, { useEffect, useState } from 'react'
import { AssetCard } from '../../AssetCard/AssetCard';
import { Link } from 'react-router-dom';

// Thirdweb
import { useNFTs, useContract, useAddress, useOwnedNFTs } from "@thirdweb-dev/react";

const AssetList = () => {
  const [collection, setCollection] = useState([]);
  const [currentlyOwnedCollection, setCurrentlyOwnedCollection] = useState([]);
  const [collectionAddress, setCollectionAddress] = useState();
  const [collectionAddressmain, setCollectionAddressmain] = useState();
  const address = useAddress();

  const setCollectionAddressfunc = async () => {
    setCollectionAddressmain(collectionAddress)
  }
  
  const { contract } = useContract(collectionAddressmain);

  const getAllAssets = async () => {
    const { data } = await useNFTs(contract);
    setCollection(data);
  }

  const getCurrentlyOwnedAssets = async () => {
    const { data } = await useOwnedNFTs(contract, address);
    setCurrentlyOwnedCollection(data);
  }

  getAllAssets();
  getCurrentlyOwnedAssets();

  return (
    <>
      <div className='container mt-4'>
        <div className="mb-3">
          <label htmlFor="exampleInput" className="form-label">Your Collection Address</label>
          <input type="text" className="form-control" onChange={e => setCollectionAddress(e.target.value)} />
          <div id="emailHelp" className="form-text">never share your Collection Address with anyone else.</div>
        </div>
        <button type="button" className="btn btn-primary" onClick={setCollectionAddressfunc}>List Assets</button>
      </div>

      {collectionAddress ? (
        <div>
          {collection ? (
            <>
              <div className='d-flex flex-wrap'>
                <h4 className='text-secondary p-3'>All Assets Collection</h4>
                {collection?.map((asset, index) => (
                  <Link
                    to={`/assets/${asset.id}`}
                    key={index}
                  >
                    <a>
                      <AssetCard asset={asset} />
                    </a>
                  </Link>

                ))}
              </div>
            </>
          ) : (
            <h1>Loading...</h1>
          )}

          {currentlyOwnedCollection ? (
            <div className='d-flex flex-wrap'>
              <h4 className='text-secondary p-3'>Currently Having Collections</h4>
              {currentlyOwnedCollection?.map((asset, index) => (
                <Link
                  to={`/assets/${asset.id}`}
                  key={index}
                >
                  <a>
                    <AssetCard asset={asset} />
                  </a>
                </Link>
              ))}
            </div>
          ) : (
            <h1>Loading...</h1>
          )
          }
        </div>
      ) : (
        <h1>Enter the Asset Collection Address...</h1>
      )}
    </>

  )
}
export default AssetList;
