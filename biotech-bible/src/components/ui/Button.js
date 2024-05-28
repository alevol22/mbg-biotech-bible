import React, { useState } from "react";
import styled from "styled-components";

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
  },
  orange: {
    default: "#e4bf74",
    hover: "#e4bf74",
  },
};

export const Button = styled.button`
  background-color: white;
  color: ${(props) => theme[props.theme].default};
  padding: 7px 12px;
  border: 0.9px solid;
  border-radius: 8px;
  border-color: ${(props) => theme[props.theme].default};
  outline: 0;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
    color: white;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue",
};

function clickMe() {
  alert("You clicked me!");
}

const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
