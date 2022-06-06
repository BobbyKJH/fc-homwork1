import React, { useEffect, useRef, useContext } from "react";
import styled from "styled-components";

import { FormContext } from "../App";

const Container = styled.div`
  display: block;
`;

const Label = styled.label`
  display: block;
`;
const Input = styled.input`
  display: block;
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
`;

const ID_REGEX = new RegExp("^[a-z0-9_-]{5,20}$");
const PW_REGEX = new RegExp("^[a-zA-Z0-9]{8,16}$");

function FormInput({ id, label, inputProps }) {
  const { formData, setFormData } = useContext(FormContext);
  const inputRef = useRef(null);

  useEffect(() => {
    if (id === "id") {
      inputRef.current.focus();
    }
  }, []);

  const checkRegex = () => {
    const value = formData[id]; // destructuring 구조분해할당
    // const value = target.value; const id = target.id
    if (value.length === 0) {
      return "required";
    } else {
      switch (id) {
        case "id":
          return ID_REGEX.test(value) ? true : "invalidId";
        case "password":
          return PW_REGEX.test(value) ? true : "invalidPw";
        case "confirmPassword":
          return value === formData["password"] ? true : "invalidPwCheck";
      }
    }
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Input
        id={id}
        name={id}
        {...inputProps}
        value={formData[id]}
        onChange={(e) => {
          setFormData({ ...formData, [id]: e.target.value });
        }}
        onBlur={() => {
          console.log(checkRegex());
        }}
        ref={inputRef}
      />
    </Container>
  );
}

export default FormInput;
