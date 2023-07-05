import styled from "styled-components";
import { Link } from "react-router-dom";
import Background2 from "../../Assets/Background2.jpg";

export const Container = styled.div`
  background: url("${Background2}");
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
  backdrop-filter: blur(45px);

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

export const Button = styled(Link)`
  align-items: center;
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 14px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  gap: 25px;
  height: 74px;
  justify-content: center;
  line-height: 28px;
  margin-top: 120px;
  width: 342px;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.3;
  }

  img {
    transform: rotateY(180deg);
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
