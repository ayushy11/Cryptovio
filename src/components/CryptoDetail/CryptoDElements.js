import styled from "styled-components";
import { Typography, Col, Row, Select } from "antd";

const { Title } = Typography;

export const CoinDetailContainer = styled(Col)`
  margin: 30px;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export const CoinHeadingContainer = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #d9d9d9;
  padding-top: 20px;
  padding-bottom: 20px;
  gap: 10px;
`;

export const CoinTitle = styled(Title)`
  font-weight: 900;
  color: #0071bd;
`;

export const CoinDTitle = styled(Title)`
  font-weight: 700;
  color: #0071bd;
  margin-top: 20px;
`;

export const SelectTime = styled(Select)`
  width: 200px;
  margin-top: 20px;
`;

export const StatsContainer = styled(Col)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  h2 {
    font-weight: 700;
    font-size: 1.4rem;
    margin-top: 20px;
    color: #d9d9d9;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    h2 {
      margin-top: 0px;
    }
  }
`;

export const CoinStatistics = styled(Col)``;

export const CoinHeading = styled(Col)`
  p {
    font-size: 1rem;
    opacity: 0.9;
  }
`;

export const CoinStats = styled(Col)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d9d9d9;
  font-size: 1rem;
  opacity: 0.9;
  padding: 20px;
`;

export const CoinStatsName = styled(Col)`
  display: flex;
  gap: 10px;
  font-size: 1rem;
`;

export const CoinDescription = styled(Col)`
  display: flex;
  gap: 40px;
  margin-top: 40px;
  padding-top: 20px;

  h2 {
    font-weight: 700;
    color: #0071bd;
  }
  p {
    font-size: 1rem;
    opacity: 0.9;
  }
  a {
    color: #0071bd;
  }
  h3 {
    font-weight: 700;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const CoinLinks = styled(Col)`
  padding: 0px 20px;
  flex: 0.5;

  @media screen and (max-width: 500px) {
    padding: 0px;
  }
`;

export const CoinLink = styled(Row)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 20px;

  a {
    color: #d9d9d9;
    font-weight: 700;
    font-size: 1rem;
  }

  &:hover {
    background-color: #d9d9d9;
  }
`;
