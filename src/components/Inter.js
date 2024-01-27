import React from "react";
import styled from "styled-components";


const Wrapper = styled.section`
  margin: 10% 0 0 0;
  padding: 5%;
  @media (min-width: 1200px) {
    margin-top: 20% !important;
  }
  .inter-inner {
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
    padding-bottom: 30%;
    .inter-inner {
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
        // font-size: px;
        right: -20%;
        top: 70%;
      }
    }
  }

  @media (min-width: 768px) {
    padding-top: 0%;
    margin-top: 0%;
    padding-bottom: 6%;

    .inter-inner {
      .image {
        width: 50%;
      }

      .text {
        top: 20%;
        left: 35%;
        padding-left: 10%;

        p {
          font-size: 15px;
          line-height: 20px;
        }
      }

      .right {
        display: block;
        font-size: 30px;
        right: -15%;
      }
    }
  }

  @media (min-width: 992px) {
    margin-top: 25%;
    padding-bottom: 18%;

    .inter-inner {
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

        p {
          width: 70%;
        }
      }

      .right {
        font-size: 30px;
        top: 50%;
        right: -10%;
      }
    }
  }

  @media (min-width: 1200px) {
    .inter-inner {
      padding-left: 0%;
      .blue {
        height: 500px;
        width: 170px;
      }

      .image {
        width: 30%;
        top: -25%;
        left: 12%;

        img {
          border-radius: 0;
        }
      }

      .text {
        top: 0;
        left: 36%;
        padding-left: 7%;
        padding-top: 1%;

        h3 {
          font-size: 25px;
        }
        p {
          width: 55%;
        }
      }

      .right {
        font-size: 45px;
        top: 30%;
        right: -10%;
      }
    }
  }
`;
function Inter() {
  return (
    <Wrapper>
      <div class="inter-inner">
            <div class="blue"></div>
            <div class="image">
                <img src="./images/intergrated.png" alt="images"/>
            </div>
            <div class="text">
                <h3>Integrated POS</h3>
                <p>
                    Poscloud's' family of integrated POS solutions helps
                    merchants manage their business and drive revenue
                    by providing personalized, meaningful customer
                    experiences beyond just accepting payments.
                </p>
                <h3 class="b">Inventory Management</h3>
                <p>
                    Optimize your order levels and stock holding with our
                    Inventory System. Suggested orders via par levels or auto
                    level assist will help keep perishables waste at a minimum
                </p>
            </div>
            <p class="right">Key Benefits & Features</p>
        </div>
    </Wrapper>
  );
}

export default Inter;
