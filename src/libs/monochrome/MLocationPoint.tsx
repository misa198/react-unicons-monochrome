import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MLocationPoint: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M12,22a.99676.99676,0,0,1-.707-.293L6.02051,16.43457a8.45593,8.45593,0,1,1,11.959,0L12.707,21.707A.99676.99676,0,0,1,12,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,14.76758a4.31113,4.31113,0,1,1,3.0498-1.26172A4.30017,4.30017,0,0,1,12,14.76758Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
