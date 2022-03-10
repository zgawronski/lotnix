import styled from 'styled-components';

export const Wrapper = styled.div`
  postition: absolute;
  ul {
    list-style-type: none;
    padding: 0;
    margin-left: 0.5em;
    margin-right: 3em;

    li {
      border: 1px solid ${({ theme }) => theme.colors.buttonBlue};
      text-align: center;
      padding: 0.5em;
      margin-bottom: 0.5em;
    }
  }
`;
