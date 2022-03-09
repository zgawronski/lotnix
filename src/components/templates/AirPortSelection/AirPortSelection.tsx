import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms/Button/Button';
import useDropdown from 'react-dropdown-hook';

import { AirportList } from '../../molecules/AirportList/AirportList';

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
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
  const menuHandler = () => {
    toggleDropdown();
  };

  return (
    <Wrapper>
      <div ref={wrapperRef}>
        <input type="text" placeholder="Wybierz Lotnisko"></input>
        <Button onClick={menuHandler} name="red">
          Lotnix
        </Button>
        {dropdownOpen && <AirportList />}
      </div>
    </Wrapper>
  );
};

export default AirPortSelection;
