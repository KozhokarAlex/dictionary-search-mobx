import { makeObservable, observable, computed, action } from 'mobx';
import { Word } from 'types';

const randomWordsLength = 5;

export class WordsStore {
  public words: Word[] = [];
  public readonly letters = {
    startsWith: '',
    endsWith: '',
    contains: '',
  };

  constructor() {
    makeObservable(this, {
      words: observable,
      letters: observable,
      total: computed,
      countByLetterConjunctionInDictionary: computed,
      wordsWithConjunction: computed,
      addWord: action,
      setCapitalLetter: action,
      setLastLetter: action,
      generateRandomWords: action,
      setContainsLetter: action,
      countByCapitalLetter: computed,
      countByLastLetter: computed,
      countByLetterInDictionary: computed,
      wordsWithCapitalLetter: computed,
      wordsWithLastLetter: computed,
      wordsWithLetter: computed,
    });
  }

  get total(): number {
    return this.words.length;
  }

  get wordsWithConjunction(): Word[] {
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

  get countByCapitalLetter(): number {
    return this.wordsWithCapitalLetter.length;
  };

  get countByLastLetter(): number {
    return this.wordsWithLastLetter.length;
  };

  get countByLetterInDictionary(): number {
    const { contains } = this.letters;
    return contains
      ? this.words.reduce((acc, word) => acc + word.split(new RegExp(contains, 'gi')).length - 1, 0)
      : 0;
  };

  get wordsWithCapitalLetter(): Word[] {
    const { startsWith } = this.letters;
    return this.words.filter(word => word[0].toUpperCase() === startsWith.toUpperCase());
  };

  get wordsWithLastLetter(): Word[] {
    const { endsWith } = this.letters;
    return this.words.filter(word => word[word.length - 1].toUpperCase() === endsWith.toUpperCase());
  };

  get wordsWithLetter(): Word[] {
    const { contains } = this.letters;
    return contains
      ? this.words.filter(word => word.includes(contains))
      : [];
  };

  setCapitalLetter = (letter: string): void => {
    this.letters.startsWith = letter;
  };

  setLastLetter = (letter: string): void => {
    this.letters.endsWith = letter;
  };

  setContainsLetter = (letter: string): void => {
    this.letters.contains = letter;
  }
}