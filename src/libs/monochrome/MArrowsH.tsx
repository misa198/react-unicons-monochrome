import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MArrowsH: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M17 17a1 1 0 0 1-.707-1.707L19.58594 12 16.293 8.707A.99989.99989 0 0 1 17.707 7.293l4 4a.99962.99962 0 0 1 0 1.41406l-4 4A.99676.99676 0 0 1 17 17zM7 17a.99676.99676 0 0 1-.707-.293l-4-4a.99962.99962 0 0 1 0-1.41406l4-4A.99989.99989 0 0 1 7.707 8.707L4.41406 12l3.293 3.293A1 1 0 0 1 7 17z"
        ></path>
        <path
          className="uim-primary"
          d="M21,13H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
