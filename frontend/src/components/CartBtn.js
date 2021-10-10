import React from 'react';
import styled from 'styled-components';

const CartBtnStyle = styled.button`
    width: 5rem;
    height: 5rem;
    background-color: lightgrey;
    position: fixed;
    right: 0;
    margin-right: 1rem;
    border-radius: 100%;
    margin-top: 2rem;
`


export default function CartBtn(props) {
  return (
    <CartBtnStyle></CartBtnStyle>
  );
}