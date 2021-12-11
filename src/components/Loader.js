import React from "react";
import { Spin } from "antd";
import styled from "styled-components";

const LoaderContainer = styled.div`
  height: 81vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <Spin />
    </LoaderContainer>
  );
};

export default Loader;
