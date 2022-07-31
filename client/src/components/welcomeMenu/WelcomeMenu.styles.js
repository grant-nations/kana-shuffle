import styled from "styled-components";

export const WelcomeDiv = styled.div`
  text-align: center;
  margin: 0 auto;
  font-family: 'Comfortaa', 'Noto Sans JP', sans-serif;
  max-width: 1100px;
  color: #06283D;
`;

export const WelcomeSpan = styled.span`
  margin: 0 7px;
`;

export const WelcomeJapaneseSpan = styled(WelcomeSpan)`
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 500;
`;

export const WelcomeHeader = styled.h1`
  font-weight: 600;
  font-size: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  margin-top: 0;
`;

export const WelcomeP = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 50px 10px;
`;
