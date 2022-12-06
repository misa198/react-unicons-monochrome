import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCreateDashboard: React.FC<Props> = ({
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
          width="8"
          height="8"
          x="3"
          y="13"
          className="uim-tertiary"
          rx="1"
        ></rect>
        <rect
          width="8"
          height="8"
          x="3"
          y="3"
          className="uim-tertiary"
          rx="1"
        ></rect>
        <rect
          width="8"
          height="8"
          x="13"
          y="3"
          className="uim-tertiary"
          rx="1"
        ></rect>
        <path
          className="uim-primary"
          d="M20,16H18V14a1,1,0,0,0-2,0v2H14a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V18h2a1,1,0,0,0,0-2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
