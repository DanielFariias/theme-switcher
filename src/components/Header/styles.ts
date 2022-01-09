import styled from 'styled-components';

export const Container = styled.div`
  height: 7vh;
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;

  p {
    font-size: 20px;
    font-weight: bold;
  }
`;
