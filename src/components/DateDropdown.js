import React from "react";
import styled from "styled-components";

const NewDate = styled.span`
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2% 0;
`;

const Input = styled.input`
  margin: 0 1%;
`

const DateDropdown = (props) => {
  return (
    <Wrapper>
      <label htmlFor="date">
        <NewDate>Or, select a new date: </NewDate>
      </label>
      <Input type="date" id="date" />
      <button onClick={props.onClick}>Submit</button>
    </Wrapper>
  );
};

export default DateDropdown;
