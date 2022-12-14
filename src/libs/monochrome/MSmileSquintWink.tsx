import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSmileSquintWink: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
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
          d="M12 17.0918a5.68094 5.68094 0 0 1-3.64258-1.3252 1.00029 1.00029 0 1 1 1.28516-1.5332 3.76085 3.76085 0 0 0 4.71484 0 1.00029 1.00029 0 0 1 1.28516 1.5332A5.68094 5.68094 0 0 1 12 17.0918zM9.12891 12.5a1 1 0 0 1-.707-1.707l1.5-1.5A.99989.99989 0 1 1 11.33594 10.707l-1.5 1.5A.99678.99678 0 0 1 9.12891 12.5z"
        ></path>
        <path
          className="uim-primary"
          d="M10.62891,11a.99676.99676,0,0,1-.707-.293l-1.5-1.5A.99989.99989,0,0,1,9.83594,7.793l1.5,1.5a1,1,0,0,1-.707,1.707Z"
        ></path>
        <circle cx="15" cy="10" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
