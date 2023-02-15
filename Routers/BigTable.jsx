import React from "react";
import styled from "styled-components";
import Table from "../src/Components/Table";

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
  return (
    <Contianer>
      <Wrap>
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
      </Wrap>
    </Contianer>
  );
}

export default BigTable;
