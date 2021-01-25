import React from 'react';
import { observer } from 'mobx-react';
import { LetterQuestion } from './LetterQuestion';
import { useStore } from 'hooks/useStore';

const EndsWithQuestionView: React.FC = () => {
  const { wordsStore: {
    countByLastLetter,
    wordsWithLastLetter,
    setLastLetter,
    letters,
  } } = useStore();
  return (
    <LetterQuestion
      letter={letters.endsWith}
      question="How many words end with the letter <LETTER>?"
      result={countByLastLetter}
      preview={wordsWithLastLetter}
      setLetter={setLastLetter}
    />
  )
};

export const EndsWithQuestion = observer(EndsWithQuestionView);