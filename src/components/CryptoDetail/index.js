import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Typography, Row, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../../services/cryptoApi";
import {
  CoinDetailContainer,
  CoinHeadingContainer,
  CoinDescription,
  StatsContainer,
  CoinStats,
  CoinStatsName,
  CoinStatistics,
  CoinHeading,
  CoinTitle,
  CoinDTitle,
  SelectTime,
  CoinLinks,
  CoinLink,
} from "./CryptoDElements";
import CryptoChart from "../CryptoChart";
import Loader from "../Loader";

const { Title, Text } = Typography;
const { Option } = Select;

function CryptoDetails() {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");

  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <Loader />;

  console.log("-----------------", cryptoDetails);

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(cryptoDetails?.allTimeHigh.price)}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.approvedSupply ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${millify(cryptoDetails?.totalSupply)}`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${millify(cryptoDetails?.circulatingSupply)}`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <>
      <CoinDetailContainer>
        <CoinHeadingContainer>
          <CoinTitle level={2}>
            {cryptoDetails.name} ({cryptoDetails.slug}) Price
          </CoinTitle>
          <p>
            {cryptoDetails.name} live price in US Dollar (USD). View value
            statistics, market cap and supply.
          </p>
        </CoinHeadingContainer>
        <SelectTime
          defaultValue="7d"
          onChange={(value) => setTimePeriod(value)}
          placeholder="Select Timeperiod"
        >
          {time.map((date) => (
            <Option key={date}>{date}</Option>
          ))}
        </SelectTime>

        <CryptoChart
          coinHistory={coinHistory}
          currentPrice={millify(cryptoDetails.price)}
          coinName={cryptoDetails.name}
        />

        <StatsContainer>
          <CoinStatistics>
            <CoinHeading>
              <CoinDTitle level={3}>
                {cryptoDetails.name} Value Statistics
              </CoinDTitle>
              <p>
                An overview showing the statistics of {cryptoDetails.name}, such
                as the base and quote currency, the rank, and trading volume.
              </p>
            </CoinHeading>
            {stats?.map(({ icon, title, value }) => (
              <CoinStats>
                <CoinStatsName>
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </CoinStatsName>
                <Text style={{ fontWeight: "800" }}>{value}</Text>
              </CoinStats>
            ))}
          </CoinStatistics>

          <CoinStatistics>
            <CoinHeading>
              <CoinDTitle level={3}>
                {cryptoDetails.name} Other Statistics
              </CoinDTitle>
              <p>An overview showing the stats of all cryptocurrencies</p>
            </CoinHeading>
            {genericStats?.map(({ icon, title, value }) => (
              <CoinStats>
                <CoinStatsName>
                  <Text>{icon}</Text>
                  <Text>{title}</Text>
                </CoinStatsName>
                <Text style={{ fontWeight: "800" }}>{value}</Text>
              </CoinStats>
            ))}
          </CoinStatistics>
        </StatsContainer>

        <CoinDescription>
          <Row>
            <CoinDTitle level={3}>
              What is {cryptoDetails.name}
              {HTMLReactParser(cryptoDetails.description)}
            </CoinDTitle>
          </Row>
          <CoinLinks>
            <CoinDTitle level={3}>{cryptoDetails.name} Links</CoinDTitle>
            {cryptoDetails.links?.map((link) => (
              <CoinLink key={link.name}>
                <Title
                  level={5}
                  style={{ textTransform: "capitalize", fontSize: "1rem" }}
                >
                  {link.type}
                </Title>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              </CoinLink>
            ))}
          </CoinLinks>
        </CoinDescription>
      </CoinDetailContainer>
    </>
  );
}

export default CryptoDetails;
