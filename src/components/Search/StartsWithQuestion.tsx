import React from 'react';
import { observer } from 'mobx-react';
import { LetterQuestion } from './LetterQuestion';
import { useStore } from 'hooks/useStore';

const StartsWithQuestionView: React.FC = () => {
  const { wordsStore: {
    countByCapitalLetter,
    wordsWithCapitalLetter,
    setCapitalLetter,
    letters,
  } } = useStore();
  return (
    <LetterQuestion
      letter={letters.startsWith}
      question="How many words start with the <LETTER>?"
      result={countByCapitalLetter}
      preview={wordsWithCapitalLetter}
      setLetter={setCapitalLetter}
    />
  )
};

export const StartsWithQuestion = observer(StartsWithQuestionView);