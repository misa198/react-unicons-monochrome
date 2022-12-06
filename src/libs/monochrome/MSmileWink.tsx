import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSmileWink: React.FC<Props> = ({
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
          d="M12,17.0918a5.68094,5.68094,0,0,1-3.64258-1.3252,1.00029,1.00029,0,1,1,1.28516-1.5332,3.76085,3.76085,0,0,0,4.71484,0,1.00029,1.00029,0,0,1,1.28516,1.5332A5.68094,5.68094,0,0,1,12,17.0918Z"
        ></path>
        <circle cx="9" cy="10" r="1.5" className="uim-primary"></circle>
        <path
          className="uim-primary"
          d="M15,11H14a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
