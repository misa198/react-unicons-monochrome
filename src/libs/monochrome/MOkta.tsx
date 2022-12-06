import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MOkta: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-primary"
          d="M11.9984,2a10,10,0,1,0,10,10A9.99489,9.99489,0,0,0,11.9984,2Zm0,15.00994A5.00994,5.00994,0,1,1,17.00834,12,5.01442,5.01442,0,0,1,11.9984,17.00994Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
