import React from "react";
import { Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";

import { useGetCryptosQuery } from "../../services/cryptoApi";
import Cryptocurrencies from "../CryptoCurrency";
import News from "../Newz";
import {
  HomeTitle,
  HomeSTitle,
  HomeHContainer,
  HomeHeading,
} from "./HomeElements";
import Loader from "../Loader";

function Homepage() {
  const { res, isFetching } = useGetCryptosQuery(10);
  console.log("v2", res);

  const globalStats = res?.data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <HomeHeading level={2}>Global Crypto Stats</HomeHeading>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrency" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <HomeHContainer>
        <HomeTitle level={2}>Top 10 Cryptocurrencies in the world</HomeTitle>
        <HomeSTitle level={3}>
          <Link to="/cryptocurrencies">Show more</Link>
        </HomeSTitle>
      </HomeHContainer>
      <Cryptocurrencies simplified />
      <HomeHContainer>
        <HomeTitle level={2}>Latest Crypto news</HomeTitle>
        <HomeSTitle level={3}>
          <Link to="/news">Show more</Link>
        </HomeSTitle>
      </HomeHContainer>
      <News simplified />
    </>
  );
}

export default Homepage;
