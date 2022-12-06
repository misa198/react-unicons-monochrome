import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MStepForward: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M8 17a1 1 0 0 1-.707-1.707L10.58594 12 7.293 8.707A.99989.99989 0 0 1 8.707 7.293l4 4a.99962.99962 0 0 1 0 1.41406l-4 4A.99676.99676 0 0 1 8 17zM16 17a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v8A1 1 0 0 1 16 17z"
        ></path>
      </svg>
    </Wrapper>
  );
};
