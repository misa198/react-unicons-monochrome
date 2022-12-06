import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MUnamused: React.FC<Props> = ({
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
        <circle cx="12" cy="12" r="10" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M9.91406 10.83594a.99676.99676 0 0 1-.707-.293 1.03323 1.03323 0 0 0-1.41406 0A.99989.99989 0 1 1 6.37891 9.12891a3.07249 3.07249 0 0 1 4.24218 0 1 1 0 0 1-.707 1.707zM16.91406 10.83594a.99676.99676 0 0 1-.707-.293 1.03323 1.03323 0 0 0-1.41406 0 .99989.99989 0 0 1-1.41406-1.41406 3.07249 3.07249 0 0 1 4.24218 0 1 1 0 0 1-.707 1.707zM10.80371 17a1 1 0 0 1-.33691-1.94141l4.19629-1.5a.99988.99988 0 0 1 .67382 1.88282l-4.19629 1.5A.99528.99528 0 0 1 10.80371 17z"
        ></path>
      </svg>
    </Wrapper>
  );
};
