import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFileLandscapeAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M22,10.9999l-7-7H5a3,3,0,0,0-3,3v10a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3Z"
        ></path>
        <path
          className="uim-primary"
          d="M22 10.9999H17a2 2 0 0 1-2-2v-5zM17 16.00021H7a1 1 0 0 1 0-2H17a1 1 0 0 1 0 2zM11 12.00021H7a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
