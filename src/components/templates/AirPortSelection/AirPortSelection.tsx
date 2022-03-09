import React, { FC } from 'react';
import styled from 'styled-components';

import { AirportTo } from '../../molecules/AirportTo/AirportTo';
import { AirportFrom } from '../../molecules/AiportFrom/AirportFrom';
import { Button } from '../../atoms/Button/Button';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 1.5625em 3.125em;
  color: ${({ theme }) => theme.colors.buttonBlue};
  input {
    margin-right: 3.125em;
    margin-top: 0.9375em;
  }
  button {
    max-height: 3ch;
  }
`;

const AirPortSelection: FC = () => {
  return (
    <Wrapper>
      <AirportFrom />
      <AirportTo />
      <Button name="blue">Wyszukaj</Button>
    </Wrapper>
  );
};

export default AirPortSelection;
