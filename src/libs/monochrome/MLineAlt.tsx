import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MLineAlt: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M3,23a1,1,0,0,1-.707-1.707l18-18A.99989.99989,0,0,1,21.707,4.707l-18,18A.99676.99676,0,0,1,3,23Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
