import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCopyright: React.FC<Props> = ({
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
          d="M13,17H11a3.00328,3.00328,0,0,1-3-3V10a3.00328,3.00328,0,0,1,3-3h2a3.00328,3.00328,0,0,1,3,3,1,1,0,0,1-2,0,1.0013,1.0013,0,0,0-1-1H11a1.0013,1.0013,0,0,0-1,1v4a1.0013,1.0013,0,0,0,1,1h2a1.0013,1.0013,0,0,0,1-1,1,1,0,0,1,2,0A3.00328,3.00328,0,0,1,13,17Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
