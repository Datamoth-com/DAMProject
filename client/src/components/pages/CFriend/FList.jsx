import React, { useState,useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc,collection,where ,getDocs} from 'firebase/firestore';
import { useNFT, useContract, useTransferNFT, Web3Button,useAddress } from "@thirdweb-dev/react";
import CFriend from './CFriend';
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

const FList = () => {

    const [formSubmissions, setFormSubmissions] = useState([]);
    const userID = useAddress();
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = [];
          const querySnapshot = await getDocs(collection(database, "Friend") ,where("user", "==", userID));
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          setFormSubmissions(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

  return (
    
   <><CFriend/>
   <> <h1 className='heading'>Friend List</h1><br />
   
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Wallet ID</th>
          </tr>
        </thead>
        <tbody className="table-group-divider table-divider-color">
          {formSubmissions.map((submission, index) => (
            <tr key={index}>
              <td>{submission.name}</td>
              <td>{submission.email}</td>
              <td>{submission.walletID}</td>
            </tr>
          ))}
        </tbody>
      </table>
   </>
   </>

  );
};

export default FList;
