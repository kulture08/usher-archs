import React from 'react'
import styled from "styled-components";

const Wrapper = styled.section`
  padding: 0 5% 5% 5%;

  .sales-inner {
    position: relative;

    .blue {
      display: block;
    }

    .image {
      width: 100%;
    }

    .text {
      padding: 10% 5%;
      background: #fff;

      h3 {
        padding: 10% 0 5% 0;
      }

      p {
        color: #000000b1;
      }

      .b {
        font-family: regular;
      }
    }

    .left {
      font-size: 25px;
      font-family: bold;
      z-index: 4;
      position: absolute;
      left: -52%;
      top: 26%;
      color: #00000013;
      transform: rotate(-90deg);
    }
  }

  @media (min-width: 568px) {
    margin: 10% 0;
    padding-bottom: 25%;
    .sales-inner {
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .image {
        width: 40%;
      }

      .text {
        position: absolute;
        top: 15%;
        right: 20%;
        padding: 0 0 0 10%;

        p {
          width: 80%;
        }
      }

      .left {
        font-size: 27px;
        left: -30%;
        top: 90%;
      }
    }
  }

  @media (min-width: 768px) {
    padding-bottom: 12%;
    .sales-inner {
      .text {
        padding-right: 1%;
        top: 20%;
        right: 30%;

        p {
          padding-bottom: 4%;
        }
      }

      .left {
        left: -20%;
        top: 70%;
      }
    }
  }

  @media (min-width: 992px) {
    padding-bottom: 0%;
    margin-bottom: 5%;
    .sales-inner {
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
        position: absolute;
        z-index: 2;
        top: -25%;
        right: 10%;
      }

      .text {
        position: absolute;
        top: 5%;
        right: 40%;
        z-index: 3;
        padding-top: 5%;
        padding-left: 10%;
      }

      .left {
        left: -23%;
        font-size: 44px;
        top: 50%;
      }
    }
  }

  @media (min-width: 1200px) {
    padding-top: 0%;
    padding-bottom: 0%;
    .sales-inner {
      .blue {
        height: 530px;
        width: 170px;
      }

      .image {
        width: 35%;
        top: -27%;

        img {
          border-radius: 0;
        }
      }

      .text {
        padding: 10% 0 15% 18%;
        right: 40%;

        h3 {
          padding: 0 0 3% 0;
          font-size: 22px;
        }

        p {
          padding-bottom: 10%;
          width: 69%;
        }
      }

      .left {
        left: -16%;
        font-size: 44px;
      }
    }
  }
`;
function Sales() {
  return (
    <Wrapper>
      <div class="sales-inner">
            <p class="left">Key Benefits & Features</p>
            <div class="text">
                <h3>Sales Report</h3>
                <p>
                    We help you know how much inventory you're moving
                    And how much money you're making.In addition, we help
                    you better understand which vendors supply your top
                    sellers so you can order more from them
                </p>
                <h3>Profitability Analysis</h3>
                <p>
                    Keep the overall financial health of your business top of
                    mind and see which types of sales are driving your
                    revenue.We help you see the cumulative value of your
                    inventory by category, so you know what keeps your
                    customers coming back.
                </p>
            </div>
            <div class="image">
                <img src="./images/sales.png" alt="image"/>
            </div>
            <div class="blue"></div>
        </div>
    </Wrapper>
  );
}

export default Sales;