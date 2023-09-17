import React from 'react';
import '../App.css';
import {FaLongArrowAltUp} from 'react-icons/fa'
import {FaLongArrowAltDown} from 'react-icons/fa'

const Coin = ({name, icon, price, symbol, link, priceChangedLastday}) => {
  return (
    <div className='Coin'>
        <h2>{name} </h2>
        <a href={link} target='_blank'>
          <img className='coin_image' src={icon} alt="" />
        </a>
        <h3>${price} </h3>
        <h3>{symbol} </h3>
        <p className={priceChangedLastday>0 ? "green priceupdown" : "red priceupdown"}>{priceChangedLastday} % {priceChangedLastday>0 ? <FaLongArrowAltUp/> : <FaLongArrowAltDown/>}</p>
    </div>
  );
};

export default Coin;
