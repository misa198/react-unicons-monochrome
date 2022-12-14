import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MListUiAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M21.5 8H7.5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zM21.5 13h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zM21.5 18h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"
        ></path>
        <circle cx="3.5" cy="7" r="1" className="uim-primary"></circle>
        <circle cx="7.5" cy="12" r="1" className="uim-primary"></circle>
        <circle cx="11.5" cy="17" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
