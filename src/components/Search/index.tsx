import React from 'react';
import { Wrapper } from './styled';
import { ConjunctionQuestion } from './ConjunctionQuestion';
import { StartsWithQuestion } from './StartsWithQuestion';
import { EndsWithQuestion } from './EndsWithQuestion';
import { ContainsLetterQuestion } from './ContainsLetterQuestion';

export const Search = () => {
  return (
    <Wrapper>
      <StartsWithQuestion/>
      <EndsWithQuestion/>
      <ContainsLetterQuestion/>
      <ConjunctionQuestion/>
    </Wrapper>
  );
};
