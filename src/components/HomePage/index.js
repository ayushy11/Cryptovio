import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import {Link} from 'react-router-dom';

const { Title } = Typography;

function Homepage() {
  return <>
        <Title level={2} className="heading">Global Crypto Stats</Title>
        <Row>
            <Col span={12}><Statistic title="Total Crptocurrency"/></Col>
            <Col span={12}><Statistic title="Total Exchanges"/></Col>
            <Col span={12}><Statistic title="Total Market Cap"/></Col>
            <Col span={12}><Statistic title="Total 24h Volume"/></Col>
            <Col span={12}><Statistic title="Total Markets"/></Col>
        </Row>
  </>;
}

export default Homepage;
