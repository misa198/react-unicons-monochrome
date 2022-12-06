import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MArchiveAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M17,21H7a3.00328,3.00328,0,0,1-3-3V8A.99943.99943,0,0,1,5,7H19a.99943.99943,0,0,1,1,1V18A3.00328,3.00328,0,0,1,17,21Z"
        ></path>
        <path
          className="uim-primary"
          d="M19 9H5A3 3 0 0 1 5 3H19a3 3 0 0 1 0 6zM14 13H10a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
