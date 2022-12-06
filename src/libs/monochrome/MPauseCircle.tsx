import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPauseCircle: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <circle cx="12" cy="12" r="10" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M10 17a.99943.99943 0 0 1-1-1V8a1 1 0 0 1 2 0v8A.99943.99943 0 0 1 10 17zM14 17a.99943.99943 0 0 1-1-1V8a1 1 0 0 1 2 0v8A.99943.99943 0 0 1 14 17z"
        ></path>
      </svg>
    </Wrapper>
  );
};
