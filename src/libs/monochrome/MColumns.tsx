import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MColumns: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <rect
          width="2"
          height="20"
          x="11"
          y="2"
          className="uim-quaternary"
        ></rect>
        <path
          className="uim-primary"
          d="M3,2h8l0,0v20l0,0H3c-0.55228,0-1-0.44772-1-1V3C2,2.44772,2.44772,2,3,2z"
        ></path>
        <path
          className="uim-tertiary"
          d="M13,2h8c0.55228,0,1,0.44772,1,1v18c0,0.55228-0.44772,1-1,1h-8l0,0V2L13,2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
