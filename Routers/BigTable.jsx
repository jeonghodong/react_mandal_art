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
  const [text1, setText1] = useState(() => {
    const a = [];
    for (let i = 0; i < 9; i++) {
      a.push({
        id: `${i}`,
        value: `목표${i}`,
      });
    }
    return a;
  });
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
            return (
              <div key={v.id}>
                <Table text1={v.value} key={v.value} />
              </div>
            );
          }
        })}
      </Wrap>
    </Contianer>
  );
}

export default BigTable;
