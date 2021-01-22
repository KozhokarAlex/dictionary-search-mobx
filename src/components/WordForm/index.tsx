import React, { useState, useEffect } from 'react';
import { TextInput } from 'components/TextInput';
import { Button } from 'components/Button';
import { useStore } from 'hooks/useStore';
import { Wrapper, ButtonText, ErrorText } from './styled';


export const WordForm = () => {
  const { wordsStore } = useStore();
  const [ word, setWord ] = useState('');
  const [ error, setError ] = useState('');
  const { addWord } = wordsStore;

  useEffect(() => {
    setError(''); // discard error every time word changes
  }, [ word ]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setWord(e.target.value.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = (): void => {
    if (!word) {
      return setError('Word field is mandatory');
    }

    addWord(word);
    setWord('');
  };

  return (
    <Wrapper>
      <TextInput
        placeholder="Type your word here..."
        error={Boolean(error)}
        value={word}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {error ? <ErrorText>{error}</ErrorText> : null}
      <Button onClick={handleSubmit}>
        <ButtonText>Add a word to dictionary</ButtonText>
      </Button>
    </Wrapper>
  )
};