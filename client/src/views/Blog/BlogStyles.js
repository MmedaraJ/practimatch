import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const MainDiv = styled.div`
    display: flex;
    background-color: ${COLORS.BACK};

    @media screen and (max-width: 768px) {
        display: block;
    }
`;

export const Footer = styled.div`
    background-color: ${COLORS.BACK};
    height: 60px;
    justify-content: center;
    align-items: center;
`;

export const BlogListDiv = styled.div`
    flex: 1;
    order: 0;
`;

export const BlogText = styled.div`
    flex: 3;
    order: 1;
`;

export const P = styled.p`
    font-size: small;
    color: black;
`;

export const UP = styled.p`
  font-size: small;
  color: #000000;
  text-decoration: underline;
  cursor: pointer;
`;