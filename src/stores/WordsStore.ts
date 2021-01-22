import { makeObservable, observable, computed, action } from 'mobx';
import { Word } from 'types';

const randomWordsLength = 5;

export class WordsStore {
  public words: Word[] = [];

  constructor() {
    makeObservable(this, {
      words: observable,
      total: computed,
      countByLetterConjunctionInDictionary: computed,
      wordsWithConjunction: computed,
      addWord: action,
      generateRandomWords: action,
    });
  }

  get total(): number {
    return this.words.length;
  }

  get wordsWithConjunction() {
    return this.words.filter(word => Boolean(word.match(/(.)\1{1,}/gi)));
  }

  get countByLetterConjunctionInDictionary() {
    return this.wordsWithConjunction.length;
  }

  addWord = (word: Word): void => {
    this.words = [ word.trim(), ...this.words ];
  };

  generateRandomWords = (): void => {
    const newWords = new Array(100)
      .fill(0)
      .map(() => Math.random().toString(36).substring(randomWordsLength));
    this.words = [ ...newWords, ...this.words ]
  };

  countByCapitalLetter = (letter: string): number => {
    return this.wordsWithCapitalLetter(letter).length;
  };

  countByLastLetter = (letter: string): number => {
    return this.wordsWithLastLetter(letter).length;
  };

  countByLetterInDictionary = (letter: string): number => {
    return this.words.reduce((acc, word) => acc + word.split(new RegExp(letter, 'gi')).length - 1, 0);
  };

  wordsWithCapitalLetter = (letter: string): Word[] => {
    return this.words.filter(word => word[0].toUpperCase() === letter.toUpperCase());
  };

  wordsWithLastLetter = (letter: string): Word[] => {
    return this.words.filter(word => word[word.length - 1].toUpperCase() === letter.toUpperCase());
  };

  wordsWithLetter = (letter: string): Word[] => {
    return this.words.filter(word => word.includes(letter));
  };
}