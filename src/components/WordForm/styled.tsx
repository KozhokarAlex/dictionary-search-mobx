import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 30px 100px;
  width: 100%;
  height: 100%;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  box-sizing: border-box;
`;

export const ButtonText = styled.div`
  font-size: 20px;
`;

export const ErrorText = styled.div`
  color: red;
`;