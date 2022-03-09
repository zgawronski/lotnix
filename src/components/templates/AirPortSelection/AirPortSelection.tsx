import React, { FC } from 'react';
import styled from 'styled-components';

import { AirportTo } from '../../molecules/AirportTo/AirportTo';
import { AirportFrom } from '../../molecules/AiportFrom/AirportFrom';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 1.5625em 3.125em;
  color: ${({ theme }) => theme.colors.buttonBlue};
`;

const AirPortSelection: FC = () => {
  return (
    <Wrapper>
      <AirportFrom />
      <AirportTo />
    </Wrapper>
  );
};

export default AirPortSelection;
