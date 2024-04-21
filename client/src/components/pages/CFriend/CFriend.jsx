import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useNFT, useContract, useTransferNFT, Web3Button,useAddress } from "@thirdweb-dev/react";
import "./FList.css"

const firebaseConfig = {
  apiKey: "AIzaSyCOpoYa-bMeijxpSu15LU7j29bWyj0UqtI",
  authDomain: "overseer-96d87.firebaseapp.com",
  projectId: "overseer-96d87",
  storageBucket: "overseer-96d87.appspot.com",
  messagingSenderId: "880293485808",
  appId: "1:880293485808:web:02279f940dbe14b0707635",
  measurementId: "G-R0L4E8RYLJ"
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

const CFriend = () => {
  const [formData, setFormData] = useState({
    user:'',
    name: '',
    email: '',
    walletID: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add a new document with a specified ID (using walletID)
      await setDoc(doc(database, "Friend", formData.walletID), formData);
      alert('Data submitted successfully!');
      // Clear form fields
      setFormData({ user:'',name: '', email: '', walletID: '' });
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit data. Please try again later.');
    }
  };

  return (
    <>
    <div className="container border border-5 rounded-4 formbg">
    <form onSubmit={handleSubmit}>
    <label htmlFor="name" className="form-label text-white">Your WalletID:</label>
      <input
        type="text"
        id="user"
        name="user"
        className="form-control"
        value={formData.user}
        onChange={handleChange}
        required
      />
      <label htmlFor="name" className="form-label text-white">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        className="form-control"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="email" className="form-label text-white">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        className="form-control"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="walletID" className="form-label text-white">Wallet ID:</label>
      <input
        id="walletID"
        name="walletID"
        className="form-control"
        value={formData.walletID}
        onChange={handleChange}
        required
      />
      <button type="submit" className='btn btn-primary m-2 me-4'>Submit</button>
    </form></div>
    </>
  );
};

export default CFriend;
