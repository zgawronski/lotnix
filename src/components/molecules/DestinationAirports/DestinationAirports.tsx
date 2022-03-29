import React, { FC } from 'react';
import { Input } from '../../atoms/Input/Input';
import { AirportList } from '../AirportList/AirportList';

type Props = {
  inputText: any;
  handleInputChange: (e: any) => void;
  handleSelectChange: (e: any) => void;
};

export const DestinationAirports: FC<Props> = (props) => {
  return (
    <>
      <div>
        <Input key="from" type="text" value={props.inputText.from} onChange={props.handleInputChange} name="from" />
        <AirportList handleSelectChange={props.handleSelectChange} inputText={props.inputText} key="fromA" />
      </div>
      <div>
        <Input key="to" type="text" value={props.inputText.to} onChange={props.handleInputChange} name="to" />
        <AirportList handleSelectChange={props.handleSelectChange} inputText={props.inputText} key="toA" />
      </div>
    </>
  );
};
