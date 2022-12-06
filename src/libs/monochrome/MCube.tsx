import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCube: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <polygon
          className="uim-primary"
          points="12 12.3 3.5 7.05 12 1.8 20.5 7.05"
        ></polygon>
        <polygon
          className="uim-quaternary"
          points="12 22.2 12 12.3 20.5 7.05 20.5 16.95"
        ></polygon>
        <polygon
          className="uim-tertiary"
          points="12 22.2 3.5 16.95 3.5 7.05 12 12.3"
        ></polygon>
      </svg>
    </Wrapper>
  );
};
