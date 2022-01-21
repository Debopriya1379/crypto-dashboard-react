import React from 'react';
import '../App.css';

const Coin = ({name, icon, price, symbol}) => {
  return (
    <div className='Coin'>
        <h2>{name} </h2>
        <img src={icon} alt="" />
        <h3>${price} </h3>
        <h3>{symbol} </h3>
    </div>
  );
};

export default Coin;
