import styled from "styled-components";
import Background1 from "./Assets/Background1.svg";

export const Container = styled.div`
  background: url("${Background1}");
  background-size: cover;

  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;

  padding: 50px 36px;

  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;

  margin-bottom: 80px;
`;

export const InputLabel = styled.p`
  letter-spacing: -0.408px;

  color: #eeeeee;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  margin-left: 25px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;

  padding-left: 25px;
  margin-bottom: 34px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  color: #ffffff;
`;

export const Button = styled.button`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;

  width: 342px;
  height: 74px;

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;
  color: #ffffff;

  border: none;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.3;
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 342px;
  height: 58px;

  margin-top: 20px;

  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;

    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
