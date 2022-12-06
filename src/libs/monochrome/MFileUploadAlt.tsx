import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFileUploadAlt: React.FC<Props> = ({
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
          d="M19 8.99969H14a2 2 0 0 1-2-2v-5zM12 18H8a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM14 14H8a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM9 10H8A1 1 0 0 1 8 8H9a1 1 0 0 1 0 2zM18 22a.99974.99974 0 0 1-1-1V16a1 1 0 0 1 2 0v5A.99974.99974 0 0 1 18 22z"
        ></path>
        <path
          className="uim-primary"
          d="M20,19a.99676.99676,0,0,1-.707-.293L18,17.41406l-1.293,1.293A.99989.99989,0,0,1,15.293,17.293l2-2a.99962.99962,0,0,1,1.41406,0l2,2A1,1,0,0,1,20,19Z"
        ></path>
      </svg>
    </Wrapper>
  );
};