import styled from "styled-components";
import { Typography } from "antd";

const { Title } = Typography;

export const HomeHContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const HomeTitle = styled(Title)`
  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
  }
`;

export const HomeSTitle = styled(Title)`
  margin-top: 0px;
  @media screen and (max-width: 800px) {
    font-size: 1.3rem;
  }
`;

export const HomeHeading = styled(Title)`
  @media screen and (max-width: 500px) {
    margin-top: 20px;
  }
`;
