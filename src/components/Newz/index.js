import React, { useState } from "react";
import { Select, Row, Col, Avatar, Card, Typography } from "antd";
import moment from "moment";

import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { NewsImageContainer, ProviderContainer } from "./NewsElements";

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data } = useGetCryptosQuery(100);

  if (isFetching) return "Loading...";

  return (
    <>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              placeholder="Select a Crypto"
              style={{ width: "180px" }}
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {data?.data?.coins.map((coin, id) => (
                <Option value={coin.name}>{coin.name}</Option>
              ))}
            </Select>
          </Col>
        )}
        {cryptoNews?.value?.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable style={{ minHeight: "300px" }}>
              <a href={news.url} target="_blank" rel="noreferrer">
                <NewsImageContainer>
                  <Title level={4} style={{ width: "70%" }}>
                    {news.name}
                  </Title>
                  <img
                    style={{ maxWidth: "200px", maxHeight: "100px" }}
                    src={news?.image?.thumbnail?.contentUrl || demoImage}
                    alt="news"
                  />
                </NewsImageContainer>
                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
                <ProviderContainer>
                  <div>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                      alt="news"
                    />
                    <Text style={{ marginLeft: "10px" }}>
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  <Text>
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </Text>
                </ProviderContainer>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default News;
