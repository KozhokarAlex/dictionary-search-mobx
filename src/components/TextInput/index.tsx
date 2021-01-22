import styled from '@emotion/styled';

export const TextInput = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  
  ${({ error }) => error ? `
    border: 1px solid red;
    color: red;
  ` : ''}
`;