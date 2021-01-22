import React from 'react';
import { WordsStore } from 'stores/WordsStore';

export class RootStore {
  public wordsStore: WordsStore;

  constructor() {
    this.wordsStore = new WordsStore();
  }
}

export const rootStore = new RootStore();
export const RootStoresContext = React.createContext<RootStore | null>(null);