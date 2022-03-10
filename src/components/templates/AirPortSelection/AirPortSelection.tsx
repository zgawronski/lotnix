import React, { ChangeEvent, FC, MouseEvent, useState } from 'react';
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
  const [connection, setConnection] = useState<any[]>();
  const [inputText, setInputText] = useState<any>({
    from: '',
    to: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const buttonHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newConnection: any = {
      from: '',
      to: '',
    };
    setConnection([...inputText, newConnection]);
  };

  return (
    <Wrapper as form onSubmit={buttonHandler}>
      <div ref={wrapperRef}>
        <Input key="from" type="text" placeholder="skąd" onClick={menuHandler} value={inputText.from} onChange={handleInputChange} name="from" />
        {dropdownOpen && <AirportList inputText={inputText.from} />}
      </div>
      <div>
        <Input key="to" type="text" placeholder="skąd" onClick={menuHandler} value={inputText.to} onChange={handleInputChange} name="to" />
        {dropdownOpen && <AirportList inputText={inputText.to} />}
      </div>
      <Button type="submit" onClick={() => buttonHandler} name="blue">
        Wyszukaj
      </Button>
    </Wrapper>
  );
};

export default AirPortSelection;
