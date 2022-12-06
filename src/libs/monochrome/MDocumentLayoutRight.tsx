import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MDocumentLayoutRight: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M11 8H3A1 1 0 0 1 3 6h8a1 1 0 0 1 0 2zM11 12H3a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
        ></path>
        <rect
          width="8"
          height="8"
          x="14"
          y="4"
          className="uim-primary"
          rx="1"
        ></rect>
        <path
          className="uim-tertiary"
          d="M21 16H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM13 20H3a1 1 0 0 1 0-2H13a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
