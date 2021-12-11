import styled from "styled-components";
import { Col, Row, Typography } from "antd";
const { Title } = Typography;

export const ChartHeader = styled(Row)`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  color: #0071bd;
`;

export const PriceContainer = styled(Col)`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
`;
