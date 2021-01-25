import React from 'react';
import { observer } from 'mobx-react';
import { LetterQuestion } from './LetterQuestion';
import { useStore } from 'hooks/useStore';

const ContainsLetterQuestionView: React.FC = () => {
  const { wordsStore: {
    countByLetterInDictionary,
    wordsWithLetter,
    setContainsLetter,
    letters,
  } } = useStore();
  return (
    <LetterQuestion
      letter={letters.contains}
      question="How many times does the letter <LETTER> appear in the dictionary?"
      result={countByLetterInDictionary}
      preview={wordsWithLetter}
      setLetter={setContainsLetter}
    />
  )
};

export const ContainsLetterQuestion = observer(ContainsLetterQuestionView);