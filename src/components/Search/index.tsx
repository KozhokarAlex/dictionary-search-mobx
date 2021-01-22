import React from 'react';
import { Wrapper } from './styled';
import { useStore } from 'hooks/useStore';
import { LetterQuestion } from './LetterQuestion';
import { ConjunctionQuestion } from './ConjunctionQuestion';

export const Search = () => {
  const { wordsStore } = useStore();
  const {
    countByCapitalLetter,
    wordsWithCapitalLetter,
    countByLetterInDictionary,
    countByLastLetter,
    wordsWithLastLetter,
    wordsWithLetter,
  } = wordsStore;
  return (
    <Wrapper>
      <LetterQuestion
        question="How many words start with the <LETTER>?"
        searchMethod={countByCapitalLetter}
        previewMethod={wordsWithCapitalLetter}
      />
      <LetterQuestion
        question="How many times does the letter <LETTER> appear in the dictionary?"
        searchMethod={countByLetterInDictionary}
        previewMethod={wordsWithLetter}
      />
      <LetterQuestion
        question="How many words end with the letter <LETTER>?"
        searchMethod={countByLastLetter}
        previewMethod={wordsWithLastLetter}
      />
      <ConjunctionQuestion/>
    </Wrapper>
  );
};