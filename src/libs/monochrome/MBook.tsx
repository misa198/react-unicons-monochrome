import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBook: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M17,22H5c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1h12c1.7,0,3,1.3,3,3v14C20,20.7,18.7,22,17,22z"
        ></path>
        <rect width="6" height="4" x="9" y="7" className="uim-primary"></rect>
        <path
          className="uim-primary"
          d="M15,12H9c-0.6,0-1-0.4-1-1V7c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v4C16,11.6,15.6,12,15,12z M10,10h4V8h-4V10z"
        ></path>
      </svg>
    </Wrapper>
  );
};
