import React, { Component } from 'react';
import axios from 'axios';

const handleClick=() =>{
  axios({
    method: 'POST',
    url: '/hello',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  })
  axios({
    method: 'GET',
    url: '/hello'
  })
}

const Test = () => {
  return (
    <h1 onClick={handleClick} >这是一个测试</h1>
  );
};

export default Test;
