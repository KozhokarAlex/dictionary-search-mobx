import React from 'react';
import { WordGenerator } from 'components/WordGenerator';
import { WordForm } from 'components/WordForm';
import { Wrapper, FormWrapper, Welcome } from './styled';

export const WordCreator = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <Welcome>
          Welcome to the Dictionary!
        </Welcome>
        <WordForm/>
      </FormWrapper>
      <FormWrapper>
        <WordGenerator/>
      </FormWrapper>
    </Wrapper>
  )
};
