import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MTablets: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <circle cx="8" cy="16" r="6" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M3.1,12.5l8.4,8.4c0.5-0.4,1-0.9,1.4-1.4l-8.4-8.4C4,11.5,3.5,12,3.1,12.5z"
        ></path>
        <circle cx="17" cy="7" r="5" className="uim-quaternary"></circle>
        <circle cx="17" cy="7" r="5" className="uim-quaternary"></circle>
        <path
          className="uim-tertiary"
          d="M19.8,2.8l-6.9,6.9c0.4,0.6,0.9,1,1.4,1.4l6.9-6.9C20.8,3.7,20.3,3.2,19.8,2.8z"
        ></path>
      </svg>
    </Wrapper>
  );
};
