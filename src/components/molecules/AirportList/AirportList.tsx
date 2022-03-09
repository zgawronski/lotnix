import React, { FC } from 'react';

import { airports } from '../../../mocks/data/airportsList';

import styled from 'styled-components';

const Wrapper = styled.div`
  ul {
    list-style-type: none;
    li {
      border: 1px solid ${({ theme }) => theme.colors.buttonBlue};
      text-align: center;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }
`;

export const AirportList: FC = () => {
  return (
    <Wrapper>
      <ul>
        {airports.map((airport) => (
          <li key={airport}>{airport}</li>
        ))}
      </ul>
    </Wrapper>
  );
};
