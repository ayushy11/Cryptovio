import React from "react";
import { Link } from "react-router-dom";
import { Space, Typography } from "antd";

function footer() {
  return (
    <>
      <Typography.Title
        level={5}
        style={{ color: "white", textAlign: "center" }}
      >
        Cryptovio <br />
        All rights reserved
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </>
  );
}

export default footer;
