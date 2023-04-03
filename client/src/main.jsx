import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

import { Provider } from "react-redux"
import store from './store';
import { ThirdwebProvider } from "@thirdweb-dev/react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThirdwebProvider activeChain="ethereum">
      <App />
      </ThirdwebProvider>
    </Provider>
  </React.StrictMode>,
);
