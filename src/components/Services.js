import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .services-inner {
    padding: 20% 7% 0 7%;

    .inner {
      .pars {
        font-family: regular;

        .firstp {
          text-align: left;
          line-height: 20px;
        }

        .secondp {
          text-align: left;
          line-height: 20px;
          padding-top: 10%;
        }
      }

      img {
        width: 90%;
      }
    }

    .image {
      width: 100%;
    }

    .par {
      font-family: regular;
      color: #000000b2;
      text-align: center;
    }
  }

  @media (min-width: 768px) {
    .services-inner {
      padding: 7%;

      .inner {
        display: flex;
        justify-content: center;
        align-items: center;

        .pars {
          .secondp {
            padding-top: 5%;
          }
        }

        .img {
          img {
            width: 100%;
          }
        }
      }

      .par {
        padding: 5% 2%;
        line-height: 20px;
      }
    }
  }

  @media (min-width: 992px) {
    .services-inner {
      padding: 7% 11%;

      .inner {
        .pars {
          .secondp {
            padding-top: 5%;
          }
        }

        .img {
          img {
            width: 100%;
          }
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .services-inner {
      padding: 7% 11%;

      .inner {
        .pars {
          p {
            font-size: 15px;
            color: #000000e9;
          }

          .secondp {
            line-height: 21px;
            padding-top: 3%;
          }
        }

        .img {
          width: 70%;
          padding-left: 2%;

          img {
            width: 80%;
          }
        }
      }
    }
  }
`;

function Services() {
  return (
    <Wrapper>
      <div class="services-inner">
            <div class="inner">
                <div class="pars">
                    <p class="firstp">
                        Access to payment technologies should be fundamental right for any person in busuness, big or
                        small. Our goal is to make this a reality.
                    </p>
                    <p class="secondp">
                        This is made possible by a software that helps business owners drive more sales with
                        applications
                        that include POS features, inventory management, retail customer relationship management and
                        more
                    </p>
                </div>
                <div class="img">
                    <img src="./images/about.png" alt="images"/>
                </div>
            </div>
            <img class=".image" src="./images/Support Kit 1.png" alt="images"/>
            <p class="par">
                In order to ensure a seamless transition, Poscloud provides hardware to each ARCS merchant to get them
                up and running in the shortest
                period of time.
            </p>
        </div>
    </Wrapper>
  );
}

export default Services;
