import React, { useState } from "react";
import styled from "styled-components";
import Table from "../src/Components/Table";
import MainTable from "../src/Components/MainTable";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 880px;
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
      id: 1,
      value: "목표1",
    },
    {
      id: 2,
      value: "목표2",
    },
    {
      id: 3,
      value: "목표3",
    },
    {
      id: 4,
      value: "목표4",
    },
    {
      id: 5,
      value: "목표5",
    },
    {
      id: 6,
      value: "목표6",
    },
    {
      id: 7,
      value: "목표7",
    },
    {
      id: 8,
      value: "목표8",
    },
  ]);
  const onKeyUp = (event, index) => {
    console.log(text1);
    text1[index].value = event.target.value;
    console.log(index);
    setText1(text1);
  };
  return (
    <Contianer>
      <Wrap>
        {Array(9)
          .fill(1)
          .map((_, i) => {
            if (i === 4) {
              return <MainTable onKeyUp={onKeyUp} />;
            } else {
              return <Table text1={text1} />;
            }
          })}
      </Wrap>
    </Contianer>
  );
}

export default BigTable;
