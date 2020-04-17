import React from "react";
import styled from "styled-components";
import moment from "moment";

const NewDate = styled.span`
  font-weight: bold;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 2% 0;
  width: 100%;
`;

const Input = styled.input`
  margin: 0 auto;
  width: 30%;
`;
const Button = styled.button`
  background: #02FB88;
  border-radius: 15px;
  border: none;
  padding: 1% 0;
  width: 30%;
  margin: 2% auto;
  transition: all .3s ease;
  
  &:hover {
    color: white;
    background: #FB8802;
    box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.6);
  }
`;

const Label = styled.label`
  margin: 2% auto;
`;

const DateDropdown = (props) => {
  
  const today = moment(new Date()).format("YYYY-MM-DD");
  console.log(today)
  return (
    <Wrapper>
      <Label htmlFor="date">
        <NewDate>Select a new date: </NewDate>
      </Label>
      <Input type="date" id="date" min="1995-06-20" max={today} />
      <Button onClick={props.onClick}>Submit</Button>
    </Wrapper>
  );
};

export default DateDropdown;
