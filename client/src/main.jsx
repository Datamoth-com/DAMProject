import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

import {
  ThirdwebProvider

} from "@thirdweb-dev/react";

import { createThirdwebClient, getContract, resolveMethod } from "thirdweb";
import { defineChain } from "thirdweb";

import {
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";

import { BinanceTestnet,Mumbai } from "@thirdweb-dev/chains"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
     <ThirdwebProvider
     activeChain={BinanceTestnet}
     clientId="5c1cac6d9b44f40c266621a9c7774c62"
     >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
);
