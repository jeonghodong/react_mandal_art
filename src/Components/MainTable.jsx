import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: grid;
  width: 280px;
  height: 280px;
  grid-template-columns: 1fr 1fr 1fr;
  border: solid 2px black;
`;

const InnerBox = styled.div`
  border: solid 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
`;

const Input = styled.textarea`
  font-family: "Poppins-Bold";
  width: 100%;
  height: 100%;
  text-align: center;
  border: 1px solid #000;
  resize: none;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  border: none;
  outline: none;
`;
const Cover = styled.div`
  height: 58%;
`;

function MainTable({ onKeyUp }) {
  return (
    <Wrap>
      {Array(9)
        .fill(1)
        .map((_, i) => {
          if (i === 4) {
            return (
              <InnerBox>
                <Cover>
                  <Input placeholder="메인" maxLength={14} />
                </Cover>
              </InnerBox>
            );
          } else {
            return (
              <InnerBox>
                <Cover>
                  <Input
                    placeholder="세부 목표"
                    maxLength={14}
                    onKeyUp={(event) => {
                      onKeyUp(event, i);
                    }}
                  />
                </Cover>
              </InnerBox>
            );
          }
        })}
    </Wrap>
  );
}

export default MainTable;
