import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMusicTuneSlash: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M20.61523,2.21216a.99358.99358,0,0,0-.85791-.18164l-8,2A.99969.99969,0,0,0,11,5.00024V9.97778c-.00049.01465-.00049.0293,0,.043v5.33057a3.45933,3.45933,0,0,0-1.5-.35108,3.5,3.5,0,1,0,3.5,3.5V10.78149L20.24268,8.97A.99972.99972,0,0,0,21,8.00024v-5A1.00043,1.00043,0,0,0,20.61523,2.21216Z"
        ></path>
        <path
          className="uim-primary"
          d="M21,22a.99676.99676,0,0,1-.707-.293l-18-18A.99989.99989,0,0,1,3.707,2.293l18,18A1,1,0,0,1,21,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
