import React from "react";
import { Typography, Menu, Avatar } from "antd";
import { Link } from "react-router-dom";
import { Logo, LogoContainer, NavContainer } from "./NavbarElements";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
} from "@ant-design/icons";
import icon from "../../images/cryptocurrency.png";

function Navbar() {
  return (
    <>
      <NavContainer>
        <LogoContainer>
          <Avatar src={icon} size="large" />
          <Logo>
            <Typography.Title level={2}>
              <Link to="/">Cryptovio</Link>
            </Typography.Title>
          </Logo>
        </LogoContainer>

        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </NavContainer>
    </>
  );
}

export default Navbar;
