import React from "react";
import styled from "styled-components";
import FormInput from "./FormInput";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid black;
  border-radius: 20px;
  width: 500px;
  height: 500px;
`;

const Btn = styled.button`
  display: block;
  width: 100px;
  padding: 10px;
`;

function Form() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <FormBox onSubmit={onSubmit}>
        <FormInput
          id={"id"}
          label={"id"}
          inputProps={{ type: "text", placeholder: "아이디를 입력하세요" }}
        />
        <FormInput
          id={"password"}
          label={"password"}
          inputProps={{
            type: "password",
            placeholder: "비밀번호를 입력하세요",
          }}
        />
        <FormInput
          id={"confirmPassword"}
          label={"confirmPassword"}
          inputProps={{
            type: "password",
            placeholder: "비밀번호를 확인하세요",
          }}
        />
        <Btn>회원가입</Btn>
      </FormBox>
    </Container>
  );
}

export default Form;
