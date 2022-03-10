import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import styled from 'styled-components';
//import useDropdown from 'react-dropdown-hook';
//import { AirportList } from '../../atoms/AirportList/AirportList';

//import { AirportTo } from '../../molecules/AirportTo/AirportTo';
//import { AirportFrom } from '../../molecules/AiportFrom/AirportFrom';
import { Button } from '../../atoms/Button/Button';
//import { Input } from '../../atoms/Input/Input';
import { AirportFrom } from '../../molecules/AiportFrom/AirportFrom';
import { AirportTo } from '../../molecules/AirportTo/AirportTo';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;
  border-radius: 0.5em;
  padding: 1.5625em 3.125em;
  color: ${({ theme }) => theme.colors.buttonBlue};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0 0.1875em 0.5em rgba(0, 0, 0, 0.3);
  input {
    margin-right: 3.125em;
    margin-top: 0.9375em;
  }
  button {
    max-height: 3ch;
  }
`;

// const initialFormState = {
//   from: '',
//   to: '',
// };

const AirPortSelection: FC = () => {
  // const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
  // const menuHandler = () => {
  //   toggleDropdown();
  // };

  const [findConnect, setFindingConnect] = useState<any>();
  const [airFrom, setAirFrom] = useState<string>('');
  const [airTo, setAirTo] = useState<string>('');
  // const [inputText, setInputText] = useState<any>(initialFormState);

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setInputText({
  //     ...inputText,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const buttonHandler = (e: FormEvent) => {
    e.preventDefault();
    const newConnection = [airFrom, airTo];
    setFindingConnect([newConnection]);
    // setInputText(initialFormState);
    setAirFrom('');
    setAirTo('');
  };

  return (
    <>
      <Wrapper as="form" onSubmit={buttonHandler}>
        <AirportFrom airFrom={airFrom} setAirFrom={setAirFrom} />
        <AirportTo airTo={airTo} setAirTo={setAirTo} />
        <Button type="submit" name="blue">
          Wyszukaj
        </Button>
      </Wrapper>
    </>
  );
};

export default AirPortSelection;
