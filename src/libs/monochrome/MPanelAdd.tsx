import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPanelAdd: React.FC<Props> = ({
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
          className="uim-primary"
          d="M21,4H20V3a1,1,0,0,0-2,0V4H17a1,1,0,0,0,0,2h1V7a1,1,0,0,0,2,0V6h1a1,1,0,0,0,0-2Z"
        ></path>
        <rect
          width="6"
          height="13"
          x="2"
          y="9"
          className="uim-quaternary"
          rx="1"
        ></rect>
        <rect
          width="6"
          height="20"
          x="8"
          y="2"
          className="uim-primary"
          rx="1"
        ></rect>
        <rect
          width="6"
          height="11"
          x="14"
          y="11"
          className="uim-tertiary"
          rx="1"
        ></rect>
      </svg>
    </Wrapper>
  );
};
