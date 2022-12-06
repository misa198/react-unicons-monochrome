import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSpaceKey: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M21,15H3a.99974.99974,0,0,1-1-1V10a1,1,0,0,1,2,0v3H20V10a1,1,0,0,1,2,0v4A.99974.99974,0,0,1,21,15Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
