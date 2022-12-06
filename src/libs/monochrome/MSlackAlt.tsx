import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSlackAlt: React.FC<Props> = ({
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
          className="uim-quaternary"
          d="M9.34,2a2,2,0,0,0,0,4h2V4a2,2,0,0,0-2-2m0,5.33H4a2,2,0,1,0,0,4H9.34a2,2,0,0,0,0-4"
        ></path>
        <path
          className="uim-tertiary"
          d="M22,9.33a2,2,0,1,0-4,0v2h2a2,2,0,0,0,2-2m-5.32,0V4a2,2,0,1,0-4,0V9.33a2,2,0,1,0,4,0"
        ></path>
        <path
          className="uim-secondary"
          d="M14.66,22a2,2,0,0,0,0-4h-2v2a2,2,0,0,0,2,2m0-5.33H20a2,2,0,0,0,0-4H14.66a2,2,0,0,0,0,4"
        ></path>
        <path
          className="uim-primary"
          d="M2,14.67a2,2,0,1,0,4,0v-2H4a2,2,0,0,0-2,2m5.32,0V20a2,2,0,1,0,4,0V14.67a2,2,0,1,0-4,0"
        ></path>
      </svg>
    </Wrapper>
  );
};
