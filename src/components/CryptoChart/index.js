import React from "react";
import { Line } from "react-chartjs-2";
import {  Typography } from "antd";
import { ChartHeader, PriceContainer } from "./CryptoChartElements";

const { Title } = Typography;

function CryptoChart({ coinHistory, currentPrice, coinName }) {
  const coinPrice = [];
  const coinTimeStamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimeStamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxis: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <ChartHeader>
        <Title style={{ color: "#0071bd" }} level={2}>
          {coinName} Price Chart
        </Title>
        <PriceContainer>
          <Title style={{ fontWeight: "900" }} level={5}>
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title style={{ marginTop: "0px", fontWeight: "900" }} level={5}>
            Current {coinName} price: $ {currentPrice}
          </Title>
        </PriceContainer>
      </ChartHeader>
      <Line data={data} options={options} />
    </>
  );
}

export default CryptoChart;
