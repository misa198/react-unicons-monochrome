import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMicrophoneSlash: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <rect
          width="8"
          height="14.1"
          x="8"
          y=".95"
          className="uim-quaternary"
          rx="4"
        ></rect>
        <path
          className="uim-tertiary"
          d="M20,11a1,1,0,0,0-2,0A6,6,0,0,1,6,11a1,1,0,0,0-2,0,8.007,8.007,0,0,0,7,7.93054V21H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H13V18.93054A8.007,8.007,0,0,0,20,11Z"
        ></path>
        <path
          className="uim-primary"
          d="M21,21.03516a.99676.99676,0,0,1-.707-.293l-18-18A.99989.99989,0,0,1,3.707,1.32812l18,18a1,1,0,0,1-.707,1.707Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
