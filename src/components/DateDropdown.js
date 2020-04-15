import React from "react";
import styled from "styled-components";

const NewDate = styled.span`
  font-weight: bold;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2% 0;
`;

const Input = styled.input`
  margin: 0 auto;
  width: 15%;
`
const Button = styled.button`
background: dodgerblue;
border-radius: 15px;
border: none;
padding: .5% 5%;
width: 15%;
margin: 2% auto;
`

const Label = styled.label`
margin: 2% auto;
`

const DateDropdown = (props) => {
  return (
    <Wrapper>
      <Label htmlFor="date">
        <NewDate>Or, select a new date: </NewDate>
      </Label>
      <Input type="date" id="date" />
      <Button onClick={props.onClick}>Submit</Button>
    </Wrapper>
  );
};

export default DateDropdown;
