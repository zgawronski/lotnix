import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;
  border-radius: 0.5em;
  padding: 1.5625em 3.125em;
  color: ${({ theme }) => theme.colors.buttonBlue};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0 0.1875em 0.5em rgba(0, 0, 0, 0.3);
  input {
    margin-right: 1.5em;
  }
  button {
    max-height: 3ch;
  }
  div {
    margin: 1em;
  }
`;
