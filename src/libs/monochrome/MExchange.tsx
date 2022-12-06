import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MExchange: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M17 19a1 1 0 0 1-.707-1.707L18.58594 15H7a1 1 0 0 1 0-2H21a.99991.99991 0 0 1 .707 1.707l-4 4A.99676.99676 0 0 1 17 19zM17 11H3a.99991.99991 0 0 1-.707-1.707l4-4A.99989.99989 0 0 1 7.707 6.707L5.41406 9H17a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
