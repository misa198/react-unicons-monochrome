import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MLock: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M16,11H8a.99974.99974,0,0,1-1-1V7A5,5,0,0,1,17,7v3A.99974.99974,0,0,1,16,11ZM9,9h6V7A3,3,0,0,0,9,7Z"
        ></path>
        <rect
          width="16"
          height="13"
          x="4"
          y="9"
          className="uim-primary"
          rx="3"
        ></rect>
      </svg>
    </Wrapper>
  );
};
