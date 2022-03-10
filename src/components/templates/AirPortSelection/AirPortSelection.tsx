import React, { ChangeEvent, FC, useState } from 'react';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';
import { AirportList } from '../../atoms/AirportList/AirportList';

//import { AirportTo } from '../../molecules/AirportTo/AirportTo';
//import { AirportFrom } from '../../molecules/AiportFrom/AirportFrom';
import { Button } from '../../atoms/Button/Button';
import { Input } from '../../atoms/Input/Input';

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
  const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
  const menuHandler = () => {
    toggleDropdown();
  };

  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(text);
    const text = e.target.value;
  };

  const buttonHandler = (from: string, to: string) => {
    const connection = [];
    connection.push([from, to]);
  };
  return (
    <Wrapper>
      <div ref={wrapperRef}>
        <Input key="from" type="text" placeholder="skąd" onClick={menuHandler} value={inputText} onChange={handleInputChange} id="from" />
        {dropdownOpen && <AirportList inputText={inputText} />}
      </div>
      <div>
        <Input key="from" type="text" placeholder="skąd" onClick={menuHandler} value={inputText} onChange={handleInputChange} id="to" />
        {dropdownOpen && <AirportList inputText={inputText} />}
      </div>
      <Button onClick={() => buttonHandler} name="blue">
        Wyszukaj
      </Button>
    </Wrapper>
  );
};

export default AirPortSelection;
