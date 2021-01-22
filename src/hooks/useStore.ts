import React from 'react';
import { RootStoresContext } from 'stores/RootStore';

export const useStore = () => {
  const store = React.useContext(RootStoresContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};