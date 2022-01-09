import styled from 'styled-components';

export const Main = styled.main`
  width: 100vw;
  min-height: 93vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};

  h1 {
    font-size: 64px;
    margin-bottom: 3rem;
  }

  p {
    font-size: 22px;
    width: 500px;
    text-align: center;
  }
`