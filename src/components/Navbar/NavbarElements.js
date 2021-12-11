import styled from "styled-components";

export const NavContainer = styled.div`
  position: fixed;
  left: 0;
  margin: 0px;
  height: 100vh;
  background-color: rgb(0, 21, 41);
  /* background-color: yellow; */

  @media screen and (max-width: 800px) {
    height: 8vh;
    position: fixed;
    width: 100%;
    z-index: 100;
    background-color: #f9f9f9;
  }
`;

export const LogoContainer = styled.div`
  background-color: #001529;
  /* background-color: orange; */
  display: flex;
  padding: 20px;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.div`
  margin: 0 0 0 15px;
`;

export const MenuButton = styled.button`
  display: none;
  position: absolute;
  right: 10px;
  top: 25px;
  font-size: 1.2rem;
  background-color: #001529;
  border: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;
