import React from "react";
import styled from "styled-components";
import "react-social-icons/instagram";

const Wrapper = styled.section`
  p {
    font-family: ${(props) => props.theme.fam.regular};
  }
  .image-inner {
    padding: 0.2%;
    img {
      border-radius: 0;
    }
  }
`;

function Blog() {
  return (
    <Wrapper>
      <div class="image-inner">
            <img src="./images/full screen.png" alt="image"/>
        </div>
    </Wrapper>
  );
}

export default Blog;
