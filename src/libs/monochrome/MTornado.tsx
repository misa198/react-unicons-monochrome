import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MTornado: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M10 23H8a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM11 19H6a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2zM17 3H3A1 1 0 0 1 3 1H17a1 1 0 0 1 0 2zM21 7H6A1 1 0 0 1 6 5H21a1 1 0 0 1 0 2zM19 11H10a1 1 0 0 1 0-2h9a1 1 0 0 1 0 2zM14 15H8a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
