import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms/Button/Button';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 1.5625em 3.125em;
  color: ${({ theme }) => theme.colors.buttonBlue};

  input {
    margin: 1em;
  }
`;

const AirPortSelection: FC = () => {
  return (
    <Wrapper>
      <input type="text" placeholder="Wybierz Lotnisko"></input>
      <Button name="red">Lotnix</Button>
    </Wrapper>
  );
};

export default AirPortSelection;
