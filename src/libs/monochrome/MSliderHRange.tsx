import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSliderHRange: React.FC<Props> = ({
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
          className="uim-tertiary"
          d="M17,15a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,17,15Z"
        ></path>
        <path
          className="uim-quaternary"
          d="M21,11H19.81573a2.80554,2.80554,0,0,1,0,2H21a1,1,0,0,0,0-2Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M7,15a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,7,15Z"
        ></path>
        <path
          className="uim-primary"
          d="M9.81573,11a2.80554,2.80554,0,0,1,0,2h4.3686a2.80512,2.80512,0,0,1-.00006-2Z"
        ></path>
        <path
          className="uim-quaternary"
          d="M4,12a2.96457,2.96457,0,0,1,.18427-1H3a1,1,0,0,0,0,2H4.18433A2.96485,2.96485,0,0,1,4,12Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
