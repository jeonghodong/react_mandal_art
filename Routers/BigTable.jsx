import React, { useRef, useState } from "react";
import styled from "styled-components";
import Table from "../src/Components/Table";
import MainTable from "../src/Components/MainTable";
import html2canvas from "html2canvas";

const Wrap = styled.div`
  margin-top: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  width: 867px;
  row-gap: 10px;
  place-items: center;
  display: grid;
  position: relative;
`;
const Contianer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SaveBtn = styled.button`
  position: absolute;
  bottom: -30px;
`;
function BigTable() {
  const contentRef = useRef(null);
  const handleSaveAsImage = () => {
    html2canvas(contentRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "mandal_art.jpeg";
      link.href = canvas.toDataURL();
      link.click();
    });
  };
  const [text1, setText1] = useState(() => {
    const a = [];
    for (let i = 0; i < 9; i++) {
      a.push({
        id: `${i}`,
        value: `세부목표`,
      });
    }
    return a;
  });
  const onKeyUp = (event, index) => {
    text1[index].value = event.target.value;
    setText1([...text1]);
  };
  return (
    <div style={{ positon: "relative" }} ref={contentRef}>
      <Contianer>
        <Wrap>
          {text1.map((v, i) => {
            if (i === 4) {
              return (
                <div key={v.id}>
                  <MainTable onKeyUp={onKeyUp} key={v.value} />
                </div>
              );
            } else {
              return (
                <div key={v.id}>
                  <Table text1={v.value} key={v.value} />
                </div>
              );
            }
          })}
          <SaveBtn onClick={handleSaveAsImage}>Save as Image</SaveBtn>
        </Wrap>
      </Contianer>
    </div>
  );
}

export default BigTable;
