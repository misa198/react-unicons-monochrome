import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MApps: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <rect
          width="9"
          height="9"
          x="2"
          y="2"
          className="uim-primary"
          rx="1"
        ></rect>
        <rect
          width="9"
          height="9"
          x="2"
          y="13"
          className="uim-tertiary"
          rx="1"
        ></rect>
        <rect
          width="9"
          height="9"
          x="13"
          y="2"
          className="uim-tertiary"
          rx="1"
        ></rect>
        <rect
          width="9"
          height="9"
          x="13"
          y="13"
          className="uim-tertiary"
          rx="1"
        ></rect>
      </svg>
    </Wrapper>
  );
};
