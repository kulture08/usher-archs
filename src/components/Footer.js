/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { TextField } from "@mui/material";

const Wrapper = styled.section`
  padding: 5%;
  text-align: center;
  @media (min-width: 992px) {
    padding: 5% 0;
  }
  h2 {
    color: grey;
    font-size: 35px;
    text-align: center;
  }
  img {
    width: 100%;
    display: none;

    @media (min-width: 992px) {
      transform: translate(40%, -25px);
      width: 40%;
      display: block;
    }
    @media (min-width: 1200px) {
      width: 36%;
      transform: translate(40%, -8px);
    }
  }

  h4 {
    font-size: 15px;
    margin: 5% 0;
  }
  .links {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 350px;
    li {
      height: 30px;
      width: 30px;
      position: relative;
      padding: 5px;
      border-radius: 50%;
      border: 2px solid grey;
      list-style: none;
      a {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        text-decoration: none;
        svg {
          color: #000000;
          height: 20px;
          width: 20px;
        }
      }
    }
  }
  .top {
    @media (min-width: 992px) {
      display: flex;
      justify-content: space-between;
      width: max-content;
      margin: 0 auto;
      align-items: center;
      h4 {
        margin: 0 10px;
      }
      .links {
        li {
          height: 20px;
          width: 20px;
          margin-left: 20px;
          a {
            svg {
              height: 14px;
              width: 14px;
            }
          }
        }
      }
    }
  }
  .contact {
    @media (min-width: 992px) {
      display: flex;
      position: relative;
      justify-content: space-between;
      align-items: flex-end;
      flex-direction: row-reverse;

      padding: 10% 5%;
      &:before {
        content: "";
        height: 60%;
        width: 130px;
        background: blue;
        position: absolute;
        top: 31%;
        left: 11%;
      }
    }
    form {
      margin: 0 auto;
      margin-top: 20px;
      max-width: 100%;
      @media (min-width: 568px) {
        max-width: 60%;
      }
      @media (min-width: 992px) {
        background: #ffffff;
        padding: 2% 3% 0;
        z-index: 2;
        width: 40%;
        text-align: left;
        margin: 0;
      }
      @media (min-width: 1200px) {
        max-width: 400px;
        transform: translateX(-30%);
      }
      .MuiFormControl-root {
        background: #c4c4c44d;
        margin-bottom: 10px;
        width: 100%;
        label {
          padding: 0 5px;
        }
        .MuiInput-underline:after,
        .MuiInput-underline:before {
          border: none;
        }
      }
    }
  }
  button {
    margin: 10px 0;
    width: 150px;
    height: 40px;
    background: blue;
    color: #ffffff;
    border: none;
    font-family: ${(props) => props.theme.fam.avenir};
  }
  h3{
    margin-bottom: 5%;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <h2>
          Get In Touch
      </h2>
        <div className="top">
          <h4> info@poscloud.co.zw </h4>
          <h4>+263 242 254605</h4>
          <h4>+263 242 720961</h4>
          <div className="links">
            <li>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube />
              </a>
            </li>
          </div>
        </div>
      <div className="contact">
          <form action="">
            <h3>Contact Us</h3>
            <TextField name="name" label="Name Of Organization" />
            <TextField name="userName" label="Full Name" />
            <TextField name="phone" label="Phone Number" />
            <TextField type="email" name="email" label="Email Address" />
            <TextField
              id="message"
              name="message"
              label="Message"
              multiline
              rows={3}
            />
            <button type="submit">Send Message</button>
          </form>
        <img src="./images/contact.png" alt="" />
      </div>
    </Wrapper>
  );
}

export default Footer;
