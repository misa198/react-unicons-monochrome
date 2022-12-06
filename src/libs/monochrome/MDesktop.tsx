import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MDesktop: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M19,17H5c-1.65611-0.00181-2.99819-1.34389-3-3V6c0.00181-1.65611,1.34389-2.99819,3-3h14c1.65611,0.00181,2.99819,1.34389,3,3v8C21.99819,15.65611,20.65611,16.99819,19,17z"
        ></path>
        <path
          className="uim-primary"
          d="M17,19h-4v-2h-2v2H7c-0.55231,0-1,0.44769-1,1s0.44769,1,1,1h10c0.55231,0,1-0.44769,1-1S17.55231,19,17,19z"
        ></path>
      </svg>
    </Wrapper>
  );
};
