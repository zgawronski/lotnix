import styled from 'styled-components';

export const Wrapper = styled.div`
  ul {
    list-style-type: none;
    padding: 0;

    li {
      border: 1px solid ${({ theme }) => theme.colors.buttonBlue};
      text-align: center;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`;
