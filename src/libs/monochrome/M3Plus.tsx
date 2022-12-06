import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const M3Plus: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <circle cx="12" cy="12" r="11" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M22 3H21V2a1 1 0 0 0-2 0V3H18a1 1 0 0 0 0 2h1V6a1 1 0 0 0 2 0V5h1a1 1 0 0 0 0-2zM12.5 13H12a1 1 0 0 1 0-2h.5a1.001 1.001 0 0 0 1-1V9a1.001 1.001 0 0 0-1-1h-1a1.001 1.001 0 0 0-1 1 1 1 0 0 1-2 0 3.00328 3.00328 0 0 1 3-3h1a3.00328 3.00328 0 0 1 3 3v1A3.00328 3.00328 0 0 1 12.5 13z"
        ></path>
        <path
          className="uim-primary"
          d="M12.5,18h-1a3.00328,3.00328,0,0,1-3-3,1,1,0,0,1,2,0,1.001,1.001,0,0,0,1,1h1a1.001,1.001,0,0,0,1-1V14a1.001,1.001,0,0,0-1-1H12a1,1,0,0,1,0-2h.5a3.00328,3.00328,0,0,1,3,3v1A3.00328,3.00328,0,0,1,12.5,18Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,23A11,11,0,0,1,12,1a11.11966,11.11966,0,0,1,2.19873.21973,1.0004,1.0004,0,0,1-.39746,1.96093,8.991,8.991,0,1,0,7.01855,7.01954,1.00023,1.00023,0,0,1,1.96-.4004A11.00925,11.00925,0,0,1,12,23Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
