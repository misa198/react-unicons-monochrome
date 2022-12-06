import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MRopeWay: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-primary"
          d="M17.625,2H6.375c-0.55231,0-1,0.44769-1,1s0.44769,1,1,1H11v2.5h2V4h4.625c0.55231,0,1-0.44769,1-1S18.17731,2,17.625,2z"
        ></path>
        <path
          className="uim-tertiary"
          d="M2,19c0.00181,1.65611,1.34389,2.99819,3,3h7v-7.75H2V19z M22,19c-0.00181,1.65611-1.34389,2.99819-3,3h-7v-7.75h10V19z"
        ></path>
        <path
          className="uim-quaternary"
          d="M19,6.5H5c-1.65613,0.00183-2.99817,1.34387-3,3v4.75h10h10V9.5C21.99817,7.84387,20.65613,6.50183,19,6.5z"
        ></path>
        <rect
          width="2"
          height="7.75"
          x="11"
          y="14.25"
          className="uim-primary"
        ></rect>
      </svg>
    </Wrapper>
  );
};
