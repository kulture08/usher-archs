import React from "react";
import styled from "styled-components";
import "react-social-icons/instagram";

const Wrapper = styled.section`
  p {
    font-family: ${(props) => props.theme.fam.regular};
  }
  padding: 0 5% 5% 5%;

  .employment-inner {
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
      left: -53%;
      top: 25%;
      color: #00000013;
      transform: rotate(-90deg);
    }
  }

  @media (min-width: 568px) {
    margin: 10% 0;
    padding-bottom: 25%;
    .employment-inner {
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
        left: -30%;
        top: 80%;
      }
    }
  }

  @media (min-width: 768px) {
    padding-bottom: 10%;
    .employment-inner {
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
    margin: 0;
    padding-top: 20%;
    padding-bottom: 0%;
    .employment-inner {
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
        top: -18%;
        right: 13%;
      }

      .text {
        position: absolute;
        right: 43%;
        top: 5%;
        z-index: 3;
        padding-top: 5%;
        padding-left: 15%;
        padding-right: 2%;
      }

      .left {
        font-size: 35px;
        top: 67%;
      }
    }
  }

  @media (min-width: 1200px) {
    padding-top: 20%;

    .employment-inner {
      .blue {
        height: 530px;
        width: 170px;
      }

      .image {
        width: 35%;
        top: -29%;

        img {
          border-radius: 0;
        }
      }

      .text {
        padding-top: 10%;
        padding-left: 15%;
        padding-right: 0;
        right: 40%;

        h3 {
          padding: 0 0 3% 0;
          // font-size: 22px;
        }

        p {
          padding-bottom: 15%;
          width: 69%;
        }
      }

      .left {
        left: -16%;
        font-size: 44px;
        top: 50%;
      }
    }
  }
`;

function Employ() {
  return (
    <Wrapper>
      <div class="employment-inner">
        <p class="left">Key Benefits & Features</p>
        <div class="text">
          <h3>Employee Management</h3>
          <p>
            You can have control over which team members have access to the
            system and assign different sets of permissions to different roles
            in your store.
          </p>
          <h3>Audit Trail</h3>
          <p>
            The system provides a detailed, chronological record whereby
            accounting records, project details and other financial data will be
            tracked and traced.
          </p>
        </div>
        <div class="image">
          <img src="./images/employment.png" alt="image" />
        </div>
        <div class="blue"></div>
      </div>
    </Wrapper>
  );
}

export default Employ;
