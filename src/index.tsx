import React from 'react';
import ReactDOM from 'react-dom';
import { RootStoresContext, rootStore } from 'stores/RootStore';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <RootStoresContext.Provider value={rootStore}>
      <App />
    </RootStoresContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);