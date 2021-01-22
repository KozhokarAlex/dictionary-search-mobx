import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  transform: translateX(-50%);
  margin-left: 50%;
  padding: 40px;
`;

export const SearchQuestionForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const SearchQuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0;
`;

export const SearchQuestion = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: gray;
  width: 50%;
`;

export const SearchResult = styled.div`
  font-size: 40px;
  color: black;
  color: #4CAF50;
  width: 30%;
  text-align: center;
  font-weight: bold;
`;

export const SearchInputWrapper = styled.div`
  width: 20%;
`;

export const SearchPreview = styled.div`
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export const SearchPreviewWord = styled.span`
  font-size: 16px;
  margin-right: 5px;
`;

export const ResultText = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
`;
