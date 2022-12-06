import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFileCheck: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M20,8.99969l-7-7H7a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z"
        ></path>
        <path
          className="uim-primary"
          d="M20 8.99969H15a2 2 0 0 1-2-2v-5zM11 18a.99676.99676 0 0 1-.707-.293l-2-2A.99989.99989 0 0 1 9.707 14.293L11 15.58594l3.293-3.293A.99989.99989 0 0 1 15.707 13.707l-4 4A.99676.99676 0 0 1 11 18z"
        ></path>
      </svg>
    </Wrapper>
  );
};
