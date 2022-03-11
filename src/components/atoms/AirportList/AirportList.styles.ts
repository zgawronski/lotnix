import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.lightGrey};

  ul {
    list-style-type: none;
    padding: 0;
    width: 159px;
    li {
      border: 1px solid ${({ theme }) => theme.colors.buttonBlue};
      text-align: center;
      padding: 0.5em;
      margin-bottom: 0.5em;
      font-weight: bolder;
    }
  }
`;
