import React from "react";
import styled from "styled-components";
import "react-social-icons/instagram";

const Wrapper = styled.section`
  p {
    font-family: ${(props) => props.theme.fam.regular};
  }
  background: #1d4a96;

  .last-inner {
    // display: grid;

    p {
      text-align: center;
      padding: 5%;
      font-size: 12px;
      // width: 70%;
      color: #fff;
      line-height: 20px;
    }
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1%;
      padding-bottom: 5%;
      li {
        a {
          font-size: 11px;
          color: #fff;
          font-family: bold;
          text-decoration: none;
          &:hover {
            color: #1d9690;
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media (min-width: 568px) {
    .last-inner {
      p {
        padding-bottom: 2%;
      }
      ul {
        gap: 3%;
      }
    }
  }

  @media (min-width: 992px) {
    .last-inner {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5%;
      p {
        padding-bottom: 5%;
        font-size: 15px;
      }
      ul {
        width: 45%;
        padding-top: 5%;
        li {
          a {
            font-size: 15px;
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .last-inner {
      justify-content: space-between;
      p {
        font-size: 16px;
        padding: 2% 5%;
      }
      ul {
        padding: 2% 0;
        li{
          a{
            font-size: 16px;
          }
        } 
      }
    }
  }
`;

function Lastsec() {
  return (
    <Wrapper>
      <div class="last-inner">
        <p>Copyright© 2022 Advanced Retail Cloud System</p>

        <ul class="">
          <li>
            <a href="./about.html">About Us</a>
          </li>
          <li>
            <a href="./benefits.html">Key Features & Benefits</a>
          </li>
          <li>
            <a href="./partner.html">Our Partners</a>
          </li>
          <li>
            <a href="./contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Lastsec;
