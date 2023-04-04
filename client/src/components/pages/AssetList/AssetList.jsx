import React from 'react'
import { AssetCard } from '../../AssetCard/AssetCard';

const AssetList = () => {
  return (
    <div>AssetList
        <div className='d-flex flex-wrap'> 
        
        <AssetCard/>
        <AssetCard/>
        <AssetCard/>
        <AssetCard/>
        <AssetCard/>
        <AssetCard/>
        </div>
       {/* {data.map(d=><Card {...d} />)} */}
    </div>
  )
}
export default AssetList;
