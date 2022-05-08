import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  place-content: center;

  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
`;
