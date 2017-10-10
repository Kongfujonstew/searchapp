import React from 'react';
import { render } from 'react-dom';
import Card from './Card';

export default (props) => {
  const { name, surname, location } = props.person;
  return (
    <div>
      <h3>{name} {surname}</h3>
      <p>{`Location`}: location</p>
    </div>
  );
};

