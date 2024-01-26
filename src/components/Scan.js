import React from "react";
import styled from "styled-components";
import "react-social-icons/instagram";

const Wrapper = styled.section`
  p {
    font-family: ${(props) => props.theme.fam.regular};
  }
  margin: 10% 0 0 0;
  padding: 5%;

  .scanning-inner {
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
      top: 75%;
      color: #00000013;
      transform: rotate(90deg);
    }
  }

  @media (min-width: 568px) {
    padding-right: 0%;
    padding-bottom: 25%;
    .scanning-inner {
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
        right: -20%;
        top: 80%;
      }
    }
  }

  @media (min-width: 768px) {
    padding-top: 0%;
    margin-top: 0%;
    padding-bottom: 10%;

    .scanning-inner {
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
        top: 70%;
      }
    }
  }

  @media (min-width: 992px) {
    margin-top: 20%;
    padding-top: 20%;
    padding-bottom: 0%;

    .scanning-inner {
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
        top: 50%;
        font-size: 30px;
        right: -10%;
      }
    }
  }

  @media (min-width: 1200px) {
    margin-top: 10%;
    padding-top: 15%;

    .scanning-inner {
      .blue {
        height: 500px;
        width: 170px;
      }

      .image {
        width: 35%;
        top: -33%;
        left: 7%;

        img {
          border-radius: 0;
        }
      }

      .text {
        top: 0;
        left: 35%;
        padding-left: 7%;
        padding-top: 1%;

        h3 {
          font-size: 25px;
        }

        p {
          width: 50%;
        }
      }

      .right {
        font-size: 45px;
        top: 30%;
      }
    }
  }
`;

function Scan() {
  return (
    <Wrapper>
      <div class="scanning-inner">
            <div class="blue"></div>
            <div class="image">
                <img src="./images/scanning.png" alt="image"/>
            </div>
            <div class="text">
                <h3>100% Scanning with barcode</h3>
                <p>
                    This feature will update the system, so you know how
                    many products you have on your shelves. Of course, it will
                    also be useful when the clients should pick the items and
                    get them ready for shopping. When the items are
                    scanned, they will be updated in the software.

                </p>
                <h3>Keyboard Shortcuts</h3>
                <p>
                    Use the ARCS keyboard shortcuts to access user interface
                    functions or complete tasks, using a single key or
                    combination of keys quickly and efficiently
                </p>
            </div>
            <p class="right">Key Benefits & Features</p>
        </div>
    </Wrapper>
  );
}

export default Scan;
