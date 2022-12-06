import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPrevious: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M16 17a.99676.99676 0 0 1-.707-.293l-4-4a.99962.99962 0 0 1 0-1.41406l4-4A.99989.99989 0 0 1 16.707 8.707L13.41406 12l3.293 3.293A1 1 0 0 1 16 17zM8 17a1 1 0 0 1-1-1V8A1 1 0 0 1 9 8v8A1 1 0 0 1 8 17z"
        ></path>
      </svg>
    </Wrapper>
  );
};
