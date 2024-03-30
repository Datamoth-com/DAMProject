import React, { useState } from 'react';
import { useMintNFT, useContract, useAddress , useWallet, Web3Button} from "@thirdweb-dev/react";
import fs from 'fs'; // Import 'fs' module to read the image file

const Create = () => {
  const [collectionAddress, setCollectionAddress] = useState('');
  const [assetName, setAssetName] = useState('');
  const [assetDesc, setAssetDesc] = useState('');
  const [assetCategory, setAssetCategory] = useState('');
  const [assetImage, setAssetImage] = useState('');

  // Collection contract address
  const address = useAddress();
  const contractAddress = collectionAddress;
  const { contract } = useContract(contractAddress);
  const { mutateAsync: mintTo, isLoading, error } = useMintNFT(contract);

  const handleMintNFT = async () => {
    // Address of the wallet you want to mint the NFT to
    const walletAddress = useAddress();

    // Custom metadata of the NFT
    const metadata = {
      name: assetName,
      description: assetDesc,
      image: assetImage // Reading image file
    };

    try {
      // Minting the NFT
      const tx = await contract.erc721.mintTo(walletAddress, metadata);
      const receipt = tx.receipt; // the transaction receipt
      const tokenId = tx.id; // the id of the NFT minted
      const nft = await tx.data(); // (optional) fetch details of minted NFT
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

  return (
    <div>
      <h1 className='heading'>Create Asset</h1><br />

      <div className="container border border-5 rounded-4 formbg">
        <div>
          <br />
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label text-white">Asset Collection Address:</label>
            <input
              onChange={e => setCollectionAddress(e.target.value)}
              value={collectionAddress}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Collection Address"
            />
          </div>

          <div className="mb-3 w-10">
            <label htmlFor="exampleFormControlInput1" className="form-label text-white">Asset Name:</label>
            <input onChange={e => setAssetName(e.target.value)} value={assetName} type="text" className="form-control " id="exampleFormControlInput1" placeholder="Name" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Additional description:</label>
            <textarea onChange={e => setAssetDesc(e.target.value)} value={assetDesc} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          <div className='mb-3'>
            <label htmlFor="exampleFormControlTextarea1" className="form-label text-white">Asset Category:</label>
            <select onChange={e => setAssetCategory(e.target.value)} value={assetCategory} placeholder='Select the type of asset' className="form-select" aria-label="Default select example">
              <option defaultChecked></option>
              <option value="physical">Physical Asset</option>
              <option value="digital">Digital Assets/Docs</option>
            </select>
          </div>

          <div className='mb-3'>
            <label htmlFor="exampleFormControlTextarea1" type="text">Asset image:</label></div>
          <div className="input-group">
            <input
              className="form-control " id="exampleFormControlInput1" placeholder="Image Address"
              onChange={e => setAssetImage(e.target.value)}
              value={assetImage}
            />
          </div>
          <br />
          <div>
            
            <Web3Button 
            contractAddress={contractAddress} 
            action={handleMintNFT()}>
              Mint NFT
            </Web3Button>
          </div>
          <br />
        </div>
      </div>
    </div>
  )
}

export default Create;