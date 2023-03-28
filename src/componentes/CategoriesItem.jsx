import React from "react";
import styled from "styled-components";
import { categories } from "../data";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: whitesmoke;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: whitesmoke;
  color: gray;
  cursor: pointer;
`;
const CategoriesItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Compra Ahora</Button>
      </Info>
    </Container>
  );
};

export default CategoriesItem;
