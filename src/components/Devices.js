import React from "react";
import styled from "styled-components";
import "react-social-icons/instagram";

const Wrapper = styled.section`
  p {
    font-family: ${(props) => props.theme.fam.regular};
  }
  margin: 10% 0;

  .devices-inner {
    text-align: center;

    h2 {
      color: #0000001b;
      font-size: 25px;
      font-family: bold;
    }
    img {
      border-radius: 0;
    }
    .cards {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (min-width: 768px) {
      padding: 20px;

      h2 {
        font-size: 35px;
      }

      .cards {
        a {
          width: 30%;

          img {
            width: 100%;
          }
        }
      }
    }

    @media (min-width: 1200px) {
      padding: 20px;

      h2 {
        font-size: 60px;
        padding-bottom: 2%;
      }

      .cards {
        gap: 10%;
        margin-bottom: 3%;

        a {
          width: 15%;

          img {
            width: 100%;
          }
        }
      }
    }
  }
`;

function Device() {
  return (
    <Wrapper>
      <div class="devices-inner">
            <h2>Our Partners</h2>
            <div class="cards">
                <a href="#"><img src="./images/nmb.png" alt="image"/></a>
                <a href="#"><img src="./images/fbc.png" alt="image"/></a>
            </div>
            <img src="./images/partner.png" alt="image"/>
        </div>
    </Wrapper>
  );
}

export default Device;
