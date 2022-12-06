import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudWifi: React.FC<Props> = ({
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
          d="M17,21H6a4.00043,4.00043,0,0,1-.94434-7.8877,6.99939,6.99939,0,0,1,13.36524-1.896A4.99418,4.99418,0,0,1,17,21Z"
        ></path>
        <path
          className="uim-primary"
          d="M14.09082,9.38037a.99868.99868,0,0,1-.35937-.06738,4.96289,4.96289,0,0,0-3.46192.00049,1,1,0,1,1-.7168-1.86719,6.97139,6.97139,0,0,1,4.89747.00049,1.00018,1.00018,0,0,1-.35938,1.93359Z"
        ></path>
        <circle cx="12.001" cy="12" r="1" className="uim-primary"></circle>
        <path
          className="uim-primary"
          d="M10.002 9.53613a1 1 0 0 1-.501-1.86621 5.08262 5.08262 0 0 1 5 .00049.99974.99974 0 1 1-1 1.73145 3.04957 3.04957 0 0 0-3 .00048A.99446.99446 0 0 1 10.002 9.53613zM16 6.07178a.99.99 0 0 1-.499-.13428 7.11815 7.11815 0 0 0-7 0 .99974.99974 0 1 1-1-1.73145 9.14628 9.14628 0 0 1 9 0A.99978.99978 0 0 1 16 6.07178z"
        ></path>
      </svg>
    </Wrapper>
  );
};
