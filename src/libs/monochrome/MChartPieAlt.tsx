import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MChartPieAlt: React.FC<Props> = ({
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
        <path
          className="uim-tertiary"
          d="M11,22A9,9,0,0,1,11,4a.99943.99943,0,0,1,1,1v7h7a.99943.99943,0,0,1,1,1A9.00984,9.00984,0,0,1,11,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M21,10H15a.99943.99943,0,0,1-1-1V3a.99943.99943,0,0,1,1-1,7.0018,7.0018,0,0,1,7,7A.99943.99943,0,0,1,21,10Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
