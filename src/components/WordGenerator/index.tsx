import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'hooks/useStore';
import { Button } from 'components/Button';
import {
  WordCount,
  WordCountLabel,
  Wrapper,
  ActionWrapper,
  ButtonText,
} from './styled';

const WordGeneratorView = () => {
  const { wordsStore } = useStore();
  const { total, generateRandomWords } = wordsStore;

  return (
    <Wrapper>
      <WordCountLabel>
        Words in Dictionary:
      </WordCountLabel>
      <WordCount>
        {total}
      </WordCount>
      <ActionWrapper>
        <Button onClick={generateRandomWords}>
          <ButtonText>Generate 100 random words</ButtonText>
        </Button>
      </ActionWrapper>
    </Wrapper>
  )
};


export const WordGenerator = observer(WordGeneratorView);