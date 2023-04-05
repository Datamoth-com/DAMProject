import React, { useEffect, useState } from 'react'
import { AssetCard } from '../../AssetCard/AssetCard';
import { Link } from 'react-router-dom';

// Thirdweb
import { useNFTs, useContract, useAddress } from "@thirdweb-dev/react";


const AssetList = () => {
  const [collection, setCollection] = useState([]);

  const getAssets = async () => {
    const { contract } = useContract("0xA16db66ec5cE6D42E4b22CbA6020367F9FeF676E");
    const { data, isLoading, error } = await useNFTs(contract);
    setCollection(data);
    console.log(data);
  }
  getAssets()


  return (
    <div>
      <div className='d-flex flex-wrap'>
        {collection?.map((asset, index) => (
          <Link
            to={`/assets/${asset.assetContractAddress}/${asset.id}`}
            key={index}
          >
            <a>
              <AssetCard asset={asset} />
            </a>
          </Link>

        ))}
      </div>

    </div>
  )
}
export default AssetList;
