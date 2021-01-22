import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'hooks/useStore';
import {
  SearchPreview,
  SearchPreviewWord,
  SearchQuestion,
  SearchQuestionWrapper,
  SearchResult,
  SearchQuestionForm,
  ResultText,
} from './styled';

const ConjunctionQuestionView = () => {
  const { wordsStore } = useStore();
  const { countByLetterConjunctionInDictionary, wordsWithConjunction } = wordsStore;
  return (
    <SearchQuestionForm>
      <SearchQuestionWrapper>
        <SearchQuestion>
          How many words have the same letter repeated in conjunction? For instance, the word professor has `ss,` and for that, the count is 1.
        </SearchQuestion>
        <SearchResult>
          {countByLetterConjunctionInDictionary}
        </SearchResult>
      </SearchQuestionWrapper>
      {wordsWithConjunction.length > 0 ? (
        <SearchPreview>
          <ResultText>Results:</ResultText> {wordsWithConjunction.map((word, idx) => (
            <SearchPreviewWord key={idx}>
              {word}
            </SearchPreviewWord>
          ))}
        </SearchPreview>
      ) : null}
    </SearchQuestionForm>
  )
};

export const ConjunctionQuestion = observer(ConjunctionQuestionView);
