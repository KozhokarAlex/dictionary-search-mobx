import React, { useState, useEffect } from 'react';
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
import { useStore } from 'hooks/useStore';

interface LetterQuestionProps {
  readonly question: string;
  readonly searchMethod: (letter: string) => number;
  readonly previewMethod: (letter: string) => Word[];
}

const LetterQuestionView: React.FC<LetterQuestionProps> = (props) => {
  const { wordsStore: { words } } = useStore();
  const [ letter, setLetter ] = useState('');
  const [ result, setResult ] = useState(0);
  const [ previewWords, setPreviewWords ] = useState<Word[]>([]);
  const { question, searchMethod, previewMethod } = props;

  useEffect(() => {
    if (letter) {
      setResult(searchMethod(letter));
      setPreviewWords(previewMethod(letter))
    } else {
      setResult(0);
      setPreviewWords([])
    }
  }, [ letter, searchMethod, previewMethod, words.length ]);

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
            maxLength={1}
            value={letter}
            onChange={handleChange}
          />
        </SearchInputWrapper>
        <SearchResult>
          {result}
        </SearchResult>
      </SearchQuestionWrapper>
      {previewWords.length > 0 ? (
        <SearchPreview>
          <ResultText>Results:</ResultText> {previewWords.map((word, idx) => <SearchPreviewWord key={idx}>{word}</SearchPreviewWord>)}
        </SearchPreview>
      ) : null}
    </SearchQuestionForm>
  )
};

export const LetterQuestion = observer(LetterQuestionView);