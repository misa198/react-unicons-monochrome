import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFileTimesAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M3,4.99969v14a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3v-10l-7-7H6A3,3,0,0,0,3,4.99969Z"
        ></path>
        <path
          className="uim-primary"
          d="M19,8.99969H14a2,2,0,0,1-2-2v-5Z"
        ></path>
        <path
          className="uim-primary"
          d="M19 8.99969H14a2 2 0 0 1-2-2v-5zM16 22a1 1 0 0 1-.707-1.707l4-4A.99989.99989 0 0 1 20.707 17.707l-4 4A.99676.99676 0 0 1 16 22z"
        ></path>
        <path
          className="uim-primary"
          d="M20 22a.99676.99676 0 0 1-.707-.293l-4-4A.99989.99989 0 0 1 16.707 16.293l4 4A1 1 0 0 1 20 22zM12 18H8a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM14 14H8a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM9 10H8A1 1 0 0 1 8 8H9a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
