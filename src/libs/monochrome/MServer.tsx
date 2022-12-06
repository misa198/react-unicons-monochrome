import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MServer: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <rect
          width="18"
          height="6"
          x="3"
          y="3"
          className="uim-quaternary"
          rx="2"
        ></rect>
        <rect
          width="18"
          height="6"
          x="3"
          y="9"
          className="uim-tertiary"
          rx="2"
        ></rect>
        <rect
          width="18"
          height="6"
          x="3"
          y="15"
          className="uim-quaternary"
          rx="2"
        ></rect>
        <circle cx="18" cy="6" r="1" className="uim-primary"></circle>
        <circle cx="18" cy="12" r="1" className="uim-primary"></circle>
        <circle cx="18" cy="18" r="1" className="uim-primary"></circle>
        <circle cx="15" cy="6" r="1" className="uim-primary"></circle>
        <circle cx="15" cy="12" r="1" className="uim-primary"></circle>
        <circle cx="15" cy="18" r="1" className="uim-primary"></circle>
        <path
          className="uim-primary"
          d="M9 7H6A1 1 0 0 1 6 5H9A1 1 0 0 1 9 7zM9 13H6a1 1 0 0 1 0-2H9a1 1 0 0 1 0 2zM9 19H6a1 1 0 0 1 0-2H9a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
