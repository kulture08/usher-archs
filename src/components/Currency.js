import React from 'react'
import styled from "styled-components";

const Wrapper = styled.section`
  margin: 10% 0 0 0;
  padding: 5%;

  .currency-inner {
    position: relative;

    .blue {
      display: none;
    }

    .image {
      width: 100%;

      img {
        border-radius: 13px;
      }
    }

    .text {
      padding: 10% 5%;
      background: #fff;

      h3 {
        color: #1d4a96;
        padding: 10% 0 5% 0;
      }

      p {
        color: #0000008b;
      }

      .b {
        font-family: regular;
      }
    }

    .right {
      display: none;
      font-size: 25px;
      font-family: bold;
      z-index: 4;
      position: absolute;
      right: -50%;
      top: 77%;
      color: #00000013;
      transform: rotate(90deg);
    }
  }

  @media (min-width: 568px) {
    padding-right: 0%;
    padding-top: 20%;
    padding-bottom: 25%;
    .currency-inner {
      .image {
        width: 40%;
        z-index: 1;
      }

      .text {
        padding: 5% 5%;
        background: #fff;
        z-index: 2;
        position: absolute;
        top: 5%;
        left: 30%;

        p {
          font-size: 12px;
          width: 70%;
        }
      }

      .right {
        // font-size: 18px;
        right: -20%;
        // top: 60%;
      }
    }
  }

  @media (min-width: 768px) {
    padding-top: 0%;
    margin-top: 0%;
    padding-bottom: 15%;

    .currency-inner {
      .image {
        width: 50%;
      }

      .text {
        top: 20%;
        left: 35%;
        padding-left: 10%;
        padding-bottom: 20%;
        p {
          font-size: 15px;
          line-height: 20px;
        }
      }

      .right {
        display: block;
        right: -15%;
        top: 60%;
      }
    }
  }

  @media (min-width: 992px) {
    padding-top: 30%;
    padding-bottom: 10%;

    .currency-inner {
      h3 {
        font-size: 26px;
      }
      .blue {
        display: block;
        height: 500px;
        width: 190px;
        background: #1d4a96;
        z-index: 1;
      }

      .image {
        width: 40%;
        position: absolute;
        top: -30%;
        left: 10%;
      }

      .text {
        top: -8%;
        left: 40%;
        padding-bottom: 20%;

        p {
          width: 70%;
        }
      }

      .right {
        font-size: 30px;
        top: 45%;
        right: -10%;
      }
    }
  }

  @media (min-width: 1200px) {
    margin-top: 0%;
    margin-bottom: 7%;
    padding-top: 10%;

    .currency-inner {
      .blue {
        height: 500px;
        width: 170px;
      }

      .image {
        width: 30%;
        top: -25%;
        left: 7%;

        img {
          border-radius: 0;
        }
      }

      .text {
        top: 0;
        left: 31%;
        padding-left: 7%;
        padding-top: 1%;

        h3 {
          font-size: 25px;
        }
      }

      .right {
        font-size: 45px;
        top: 30%;
      }
    }
  }
`;
function Currency() {
  return (
    <Wrapper>
     <div class="currency-inner">
            <div class="blue"></div>
            <div class="image">
                <img src="./images/multi.png" alt="image"/>
            </div>
            <div class="text">
                <h3>Multi-currency</h3>
                <p>
                    Poscloud makes it easy and secure to make payments
                    quickly. Reduce expensive & unnecessary currency
                    flips and foreign exchange fees
                </p>
                <h3>Exchange Rate Management</h3>
                <p>
                    The platform comes with currency management, real-time
                    currency exchange and payments as well as risk
                    management.
                </p>
            </div>
            <p class="right">Key Benefits & Features</p>
        </div>
    </Wrapper>
  );
}

export default Currency;