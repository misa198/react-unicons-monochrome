import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MKeyboardAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M4,6h16c1.1,0,2,0.9,2,2v8c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V8C2,6.9,2.9,6,4,6z"
        ></path>
        <path
          className="uim-primary"
          d="M14,15h-4c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1S14.6,15,14,15z"
        ></path>
        <circle cx="6" cy="10" r="1" className="uim-primary"></circle>
        <circle cx="10" cy="10" r="1" className="uim-primary"></circle>
        <circle cx="14" cy="10" r="1" className="uim-primary"></circle>
        <circle cx="18" cy="10" r="1" className="uim-primary"></circle>
        <circle cx="18" cy="14" r="1" className="uim-primary"></circle>
        <circle cx="6" cy="14" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
