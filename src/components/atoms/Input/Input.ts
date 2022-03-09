import styled from 'styled-components';

export const Input = styled.input`
  padding: 5px 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-sizing: border-box;
  box-shadow: 0 0.1875em 0.5em rgba(0, 0, 0, 0.09);
  border-radius: 0.3125em;
  &:focus {
    outline: none;
    box-shadow: 0 0.1875em 0.5em rgba(0, 0, 0, 0.1);
  }
`;
