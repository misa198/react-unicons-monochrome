import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MDialpadAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <rect
          width="4"
          height="4"
          x="10"
          y="6.955"
          className="uim-primary"
          rx=".545"
        ></rect>
        <rect
          width="4"
          height="4"
          x="10"
          y=".955"
          className="uim-primary"
          rx=".545"
        ></rect>
        <rect
          width="4"
          height="4"
          x="10"
          y="13.045"
          className="uim-primary"
          rx=".545"
        ></rect>
        <rect
          width="4"
          height="4"
          x="4"
          y="6.955"
          className="uim-primary"
          rx=".545"
        ></rect>
        <rect
          width="4"
          height="4"
          x="4"
          y=".955"
          className="uim-primary"
          rx=".545"
        ></rect>
        <rect
          width="4"
          height="4"
          x="4"
          y="13.045"
          className="uim-primary"
          rx=".545"
        ></rect>
        <rect
          width="4"
          height="4"
          x="16"
          y="6.955"
          className="uim-primary"
          rx=".545"
        ></rect>
        <rect
          width="4"
          height="4"
          x="16"
          y=".955"
          className="uim-primary"
          rx=".545"
        ></rect>
        <rect
          width="4"
          height="4"
          x="16"
          y="13.045"
          className="uim-primary"
          rx=".545"
        ></rect>
        <rect
          width="4"
          height="4"
          x="10"
          y="19"
          className="uim-primary"
          rx=".545"
        ></rect>
      </svg>
    </Wrapper>
  );
};
