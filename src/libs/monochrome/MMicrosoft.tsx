import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMicrosoft: React.FC<Props> = ({
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
        <rect
          width="9.503"
          height="9.503"
          x="2"
          y="2"
          className="uim-primary"
        ></rect>
        <rect
          width="9.503"
          height="9.503"
          x="12.493"
          y="2"
          className="uim-primary"
        ></rect>
        <rect
          width="9.503"
          height="9.503"
          x="2"
          y="12.497"
          className="uim-primary"
        ></rect>
        <rect
          width="9.503"
          height="9.503"
          x="12.493"
          y="12.497"
          className="uim-primary"
        ></rect>
      </svg>
    </Wrapper>
  );
};
