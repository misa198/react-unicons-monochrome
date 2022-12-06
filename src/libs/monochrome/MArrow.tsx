import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MArrow: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M9 18a.99676.99676 0 0 1-.707-.293l-5-5a.99962.99962 0 0 1 0-1.41406l5-5A.99989.99989 0 0 1 9.707 7.707L5.41406 12l4.293 4.293A1 1 0 0 1 9 18zM15 18a1 1 0 0 1-.707-1.707L18.58594 12 14.293 7.707A.99989.99989 0 0 1 15.707 6.293l5 5a.99962.99962 0 0 1 0 1.41406l-5 5A.99676.99676 0 0 1 15 18z"
        ></path>
      </svg>
    </Wrapper>
  );
};
