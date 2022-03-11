import React, { FC, FormEvent, useState } from 'react';
import styled from 'styled-components';

import { Button } from '../../atoms/Button/Button';
import { AirportFrom } from '../../molecules/AiportFrom/AirportFrom';
import { AirportTo } from '../../molecules/AirportTo/AirportTo';
import { flightConnectionList as FCList } from '../../../mocks/data/flightConnectionList';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
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
    margin-right: 1.5em;
  }
  button {
    max-height: 3ch;
  }
  div {
    margin: 1em;
  }
`;

// const initialFormState = {
//   from: '',
//   to: '',
// };

const AirPortSelection: FC = () => {
  const [findConnect, setFindingConnect] = useState<string[]>(['Wybierz lotnisko startowe', 'Wybierz lotnisko docelowe']);
  const [airFrom, setAirFrom] = useState<string>('');
  const [airTo, setAirTo] = useState<string>('');
  const [finder, setFinder] = useState<string>('');
  // const [inputText, setInputText] = useState<any>(initialFormState);

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setInputText({
  //     ...inputText,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const finded = 'jest połączenie';
  const cantFind = 'nima';

  const buttonHandler = (e: FormEvent) => {
    e.preventDefault();
    const newConnection = [airFrom, airTo];
    setFindingConnect(newConnection);
    // setInputText(initialFormState);
    setAirFrom('');
    setAirTo('');
    const whatIFind = FCList.includes(findConnect);
    console.log(findConnect);
    console.log(FCList);
    console.log(whatIFind);
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
      <Wrapper>
        <h1>{finder}</h1>
        <div>
          <h2>{findConnect[0]}</h2>
        </div>
        <div>
          <h2>{findConnect[1]}</h2>
        </div>
      </Wrapper>
    </>
  );
};

export default AirPortSelection;
