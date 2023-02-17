import React, { useState } from "react";
import styled from "styled-components";
import Table from "../src/Components/Table";
import MainTable from "../src/Components/MainTable";

const Wrap = styled.div`
  margin-top: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  width: 867px;
  row-gap: 10px;
  place-items: center;
  display: grid;
`;
const Contianer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function BigTable() {
  const [text1, setText1] = useState([
    {
      id: 0,
      value: "목표1",
    },
    {
      id: 1,
      value: "목표2",
    },
    {
      id: 2,
      value: "목표3",
    },
    {
      id: 3,
      value: "목표4",
    },
    {
      id: 4,
      value: "목표5",
    },
    {
      id: 5,
      value: "목표6",
    },
    {
      id: 6,
      value: "목표7",
    },
    {
      id: 7,
      value: "목표8",
    },
    {
      id: 8,
      value: "목표9",
    },
  ]);
  const onKeyUp = (event, index) => {
    text1[index].value = event.target.value;
    setText1([...text1]);
  };
  return (
    <Contianer>
      <Wrap>
        {text1.map((v, i) => {
          if (i === 4) {
            return <MainTable onKeyUp={onKeyUp} key={v.value} />;
          } else {
            return <Table text1={v.value} key={v.value} />;
          }
        })}
      </Wrap>
    </Contianer>
  );
}

export default BigTable;
