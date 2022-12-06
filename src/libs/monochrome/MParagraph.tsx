import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MParagraph: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M13 15.5H3a1 1 0 0 1 0-2H13a1 1 0 0 1 0 2zM21 10.5H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
