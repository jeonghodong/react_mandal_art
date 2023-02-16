import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
      <InnerBox>
        <Cover>
          <Input
            placeholder="목표1"
            maxLength={14}
            onKeyUp={(event) => {
              onKeyUp(event, 0);
            }}
          />
        </Cover>
      </InnerBox>
      <InnerBox>
        <Cover>
          <Input
            placeholder="목표2"
            maxLength={14}
            onKeyUp={(event) => {
              onKeyUp(event, 1);
            }}
          />
        </Cover>
      </InnerBox>
      <InnerBox>
        <Cover>
          <Input
            placeholder="목표3"
            maxLength={14}
            onKeyUp={(event) => {
              onKeyUp(event, 2);
            }}
          />
        </Cover>
      </InnerBox>
      <InnerBox>
        <Cover>
          <Input placeholder="목표4" maxLength={14} />
        </Cover>
      </InnerBox>
      <InnerBox>
        <Cover>
          <Input placeholder="메인" maxLength={14} />
        </Cover>
      </InnerBox>
      <InnerBox>
        <Cover>
          <Input placeholder="목표6" maxLength={14} />
        </Cover>
      </InnerBox>
      <InnerBox>
        <Cover>
          <Input placeholder="목표7" maxLength={14} />
        </Cover>{" "}
      </InnerBox>
      <InnerBox>
        <Cover>
          <Input placeholder="목표8" maxLength={14} />
        </Cover>{" "}
      </InnerBox>
      <InnerBox>
        <Cover>
          <Input placeholder="목표9" maxLength={13} />
        </Cover>{" "}
      </InnerBox>
    </Wrap>
  );
}

MainTable.propTypes = {
  onKeyDown: PropTypes.func.isRequired,
};

export default MainTable;
