import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSad: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <circle cx="12" cy="12" r="10" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M14.999 17.0918a.99435.99435 0 0 1-.6416-.2334 3.76085 3.76085 0 0 0-4.71484 0 1.00029 1.00029 0 1 1-1.28516-1.5332 5.81679 5.81679 0 0 1 7.28516 0 1 1 0 0 1-.64356 1.7666zM9.91406 10.83594a.99676.99676 0 0 1-.707-.293 1.03323 1.03323 0 0 0-1.41406 0A.99989.99989 0 1 1 6.37891 9.12891a3.07249 3.07249 0 0 1 4.24218 0 1 1 0 0 1-.707 1.707zM16.91406 10.83594a.99676.99676 0 0 1-.707-.293 1.03323 1.03323 0 0 0-1.41406 0 .99989.99989 0 0 1-1.41406-1.41406 3.07249 3.07249 0 0 1 4.24218 0 1 1 0 0 1-.707 1.707z"
        ></path>
      </svg>
    </Wrapper>
  );
};
