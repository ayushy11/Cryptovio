import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import { Layout } from "antd";
import "./App.css";

import Navbar from "./components/Navbar";
import Homepage from "./components/HomePage";
import Cryptocurrencies from "./components/CryptoCurrency";
import Exchanges from "./components/Exchange";
import CryptoDetails from "./components/CryptoDetail";
import News from "./components/Newz";
import Footer from "./components/Footerz";

const AppM = styled.div`
  display: flex;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    overflow: hidden;
  }
`;

const Main = styled.div`
  flex: 0.8;
  width: 100%;

  @media screen and (max-width: 1300px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 1170px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 1000px) {
    margin-left: 5px;
  }
  @media screen and (max-width: 900px) {
    margin-left: 15px;
  }
  @media screen and (max-width: 800px) {
    flex: 1;
    margin-top: 90px;
    margin-left: 0px;
    margin-right: 10px;
  }
`;

const FooterM = styled.div`
  background-color: #001529;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

const NavbarM = styled.div`
  flex: 0.2;
  background-color: rgb(0, 21, 41);
  @media screen and (max-width: 800px) {
    flex: 1;
  }
`;

const RoutesM = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <AppM>
        <NavbarM>
          <Navbar />
        </NavbarM>
        <Main>
          <Layout>
            <RoutesM>
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/exchanges" element={<Exchanges />} />
                <Route
                  exact
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route
                  exact
                  path="/crypto/:coinId"
                  element={<CryptoDetails />}
                />
                <Route exact path="/news" element={<News />} />
              </Routes>
            </RoutesM>
          </Layout>
          <FooterM>
            <Footer />
          </FooterM>
        </Main>
      </AppM>
    </>
  );
}

export default App;
