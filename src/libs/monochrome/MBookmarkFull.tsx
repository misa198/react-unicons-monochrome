import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBookmarkFull: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M18,22a.99893.99893,0,0,1-.707-.293L12,17.27441,6.65234,21.75684A1.004,1.004,0,0,1,5,21V3A.99974.99974,0,0,1,6,2H18a.99974.99974,0,0,1,1,1V21a1,1,0,0,1-1,1Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
