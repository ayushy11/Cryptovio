import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../../services/cryptoApi";
import { CryptoCard, CryptoCardContainer } from "./CryptoElements";

function Cryptocurrencies() {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  console.log(cryptos);

  return (
    <>
      <CryptoCardContainer>
        <Row gutters={(32, 32)}>
          {cryptos?.map((currency) => (
            <CryptoCard>
              <Col xs={24} sm={12} lg={6}></Col>
            </CryptoCard>
          ))}
        </Row>
      </CryptoCardContainer>
    </>
  );
}

export default Cryptocurrencies;
