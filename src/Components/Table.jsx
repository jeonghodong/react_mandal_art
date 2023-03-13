import React, { useState } from "react";
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
  height: 139%;
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
  transition: background-color 0.3s ease;
  background-color: ${({ active }) => (active ? "#fff" : "#333")};
`;

function Table({ text1 }) {
  const [active, setActive] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.value !== "") {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <Wrap>
      <InnerBox>
        <Cover active={active}>
          <Input placeholder="" maxLength={14} onChange={handleInputChange} />
        </Cover>
      </InnerBox>
      <InnerBox>
        <Cover active={active}>
          <Input placeholder="" maxLength={14} onChange={handleInputChange} />
        </Cover>
      </InnerBox>
      <InnerBox>
        <Cover active={active}>
          <Input placeholder="" maxLength={14} onChange={handleInputChange} />
        </Cover>
      </InnerBox>
      <InnerBox>
        <Cover active={active}>
          <Input placeholder="" maxLength={14} onChange={handleInputChange} />
        </Cover>
      </InnerBox>
      <InnerBox>
        <Cover active={active}>
          <Input placeholder="" maxLength={14} defaultValue={text1} readOnly onChange={handleInputChange} />
        </Cover>
      </InnerBox>
      <InnerBox>
        <Cover active={active}>
          <Input placeholder="" maxLength={14} onChange={handleInputChange} />
        </Cover>
      </InnerBox>
      <InnerBox>
        <Cover active={active}>
          <Input placeholder="" maxLength={14} onChange={handleInputChange} />
        </Cover>{" "}
      </InnerBox>
      <InnerBox>
        <Cover active={active}>
          <Input placeholder="" maxLength={14} onChange={handleInputChange} />
        </Cover>{" "}
      </InnerBox>
      <InnerBox>
        <Cover active={active}>
          <Input placeholder="" maxLength={13} onChange={handleInputChange} />
        </Cover>{" "}
      </InnerBox>
    </Wrap>
  );
}

export default Table;
