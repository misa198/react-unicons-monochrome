import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MAlignAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M10 5H7A1 1 0 0 1 7 3h3a1 1 0 0 1 0 2zM10 9H3A1 1 0 0 1 3 7h7a1 1 0 0 1 0 2zM10 13H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM10 17H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM10 21H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM21 5H14a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM21 9H14a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM21 13H14a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM21 17H14a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM17 21H14a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
