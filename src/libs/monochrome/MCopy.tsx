import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCopy: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M15,2h-5C8.34315,2,7,3.34315,7,5v10c0,1.65685,1.34315,3,3,3h8c1.65685,0,3-1.34315,3-3V8L15,2z"
        ></path>
        <path
          className="uim-quaternary"
          d="M10,18c-1.65686,0-3-1.34314-3-3V6H6C4.34314,6,3,7.34314,3,9v10c0,1.65686,1.34314,3,3,3h8c1.65686,0,3-1.34314,3-3v-1H10z"
        ></path>
        <path
          className="uim-primary"
          d="M21,8h-4.28571C15.76751,8,15,7.23249,15,6.28571v0V2L21,8z"
        ></path>
      </svg>
    </Wrapper>
  );
};
