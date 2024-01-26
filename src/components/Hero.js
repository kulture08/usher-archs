import React from 'react';
import styled from "styled-components";
// import { ThemeProvider } from "styled-components";
// import { theme } from "./theme";
import { FaMouse } from "react-icons/fa";

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: url(../images/banner.png);
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-size: cover;

  .hero-inner {
    padding: 5%;

    h1 {
      color: #fff;
      font-size: 25px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      padding-bottom: 7%;
      line-height: 30px;
    }

    .a {
      text-decoration: none;
      color: white;
      position: relative;
      transition-duration: 2s;

      &:hover {
        color: rgb(7, 54, 149);
        &:after {
          transition-duration: 2s;
          text-decoration: solid;
          transform-origin: left;
          content: "";
          position: absolute;
          top: 30px;
          height: 2px;
          width: 100%;
          left: 0;
          background: rgb(7, 54, 149);
        }
      }
    }

    .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50%;
      position: absolute;
      bottom: 5%;
      right: 20%;

      a {
        color: #ffffff;
        font-weight: 900;
        border: solid 2px #fff;
        border-radius: 100%;
        padding: 30% 40%;
      }
    }
  }

  @media (min-width: 568px) {
    .hero-inner {
      h1 {
        padding-top: 20%;
        width: 80%;
      }
    }
  }

  @media (min-width: 768px) {
    height: 50vh;

    .hero-inner {
      h1 {
        padding-top: 10%;
        width: 55%;
      }

      .icons {
        position: absolute;
        bottom: 53%;
        right: 20%;
      }
    }
  }

  @media (min-width: 992px) {
    height: 50vh;

    .hero-inner {
      padding-left: 11%;

      h1 {
        font-size: 33px;
        line-height: 40px;
        padding-top: 10%;
        width: 42%;
        padding-bottom: 4%;
      }

      .icons {
        position: absolute;
        top: 55%;
        right: 15%;
      }
    }
  }

  @media (min-width: 1200px) {
    height: 100vh;

    .hero-inner {
      padding-left: 6%;
      h1 {
        padding-bottom: 2%;
      }
      .icons {
        position: absolute;
        top: 90%;
        right: 10%;
      }
    }
  }
`;

function Hero() {
  return (
    <Wrapper>
      <div class="hero-inner">
        <h1>
          One of the leading financial technology companies in Sub-Saharan
          Africa.
        </h1>
        <a class="a" href="/">
          Find Out More
        </a>
      </div>
    </Wrapper>
  );
}
export default Hero