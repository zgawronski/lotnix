import styled from 'styled-components';

export const Button = styled.button`
  margin: 0.9375em 0;
  padding: 0.4375em 1.25em;
  background-color: ${({ theme, name }) => {
    if (name === 'red') return theme.colors.buttonRed;
    if (name === 'green') return theme.colors.buttonGreen;
    if (name === 'blue') return theme.colors.buttonBlue;
  }};

  border-radius: 0.3125em;
  border: none;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  box-shadow: 0 0.1875em 0.5em rgba(0, 0, 0, 0.3);
  :active {
    transform: translateY(0.25em);
    border: none;
  }
`;
