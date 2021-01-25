import React from 'react';
import { observer } from 'mobx-react';
import { TextInput } from 'components/TextInput';
import {
  SearchQuestion,
  SearchQuestionWrapper,
  SearchResult,
  SearchInputWrapper,
  SearchQuestionForm,
  SearchPreview,
  SearchPreviewWord,
  ResultText,
} from './styled';
import { Word } from 'types';

interface LetterQuestionProps {
  readonly question: string;
  readonly result: number;
  readonly letter: string;
  readonly preview: Word[];
  readonly setLetter: (letter: string) => void;
}

const LetterQuestionView: React.FC<LetterQuestionProps> = (props) => {
  const { question, result, preview, letter, setLetter} = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLetter(e.target.value);
  };

  return (
    <SearchQuestionForm>
      <SearchQuestionWrapper>
        <SearchQuestion>
          {question}
        </SearchQuestion>
        <SearchInputWrapper>
          <TextInput
            placeholder="Enter letter"
            maxLength={1}
            value={letter}
            onChange={handleChange}
          />
        </SearchInputWrapper>
        <SearchResult>
          {result}
        </SearchResult>
      </SearchQuestionWrapper>
      {preview.length > 0 ? (
        <SearchPreview>
          <ResultText>Results:</ResultText> {preview.map((word, idx) => <SearchPreviewWord key={idx}>{word}</SearchPreviewWord>)}
        </SearchPreview>
      ) : null}
    </SearchQuestionForm>
  )
};

export const LetterQuestion = observer(LetterQuestionView);