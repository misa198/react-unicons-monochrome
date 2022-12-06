import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MArrowsV: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M12 22a.99676.99676 0 0 1-.707-.293l-4-4A.99989.99989 0 0 1 8.707 16.293L12 19.58594l3.293-3.293A.99989.99989 0 0 1 16.707 17.707l-4 4A.99676.99676 0 0 1 12 22zM16 8a.99676.99676 0 0 1-.707-.293L12 4.41406 8.707 7.707A.99989.99989 0 0 1 7.293 6.293l4-4a.99962.99962 0 0 1 1.41406 0l4 4A1 1 0 0 1 16 8z"
        ></path>
        <path
          className="uim-primary"
          d="M12,22a.99974.99974,0,0,1-1-1V3a1,1,0,0,1,2,0V21A.99974.99974,0,0,1,12,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
