import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFilePlusAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M19,8.99969l-7-7H6a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3H16a3,3,0,0,0,3-3Z"
        ></path>
        <path
          className="uim-primary"
          d="M19 8.99969H14a2 2 0 0 1-2-2v-5zM18 22a.99943.99943 0 0 1-1-1V17a1 1 0 0 1 2 0v4A.99943.99943 0 0 1 18 22z"
        ></path>
        <path
          className="uim-primary"
          d="M20 20H16a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM13 18H8a1 1 0 0 1 0-2h5a1 1 0 0 1 0 2zM14 14H8a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM9 10H8A1 1 0 0 1 8 8H9a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
