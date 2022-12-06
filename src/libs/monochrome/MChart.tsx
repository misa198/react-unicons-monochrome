import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MChart: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M7 18a.99974.99974 0 0 1-1-1V13a1 1 0 0 1 2 0v4A.99974.99974 0 0 1 7 18zM12 18a.99974.99974 0 0 1-1-1V7a1 1 0 0 1 2 0V17A.99974.99974 0 0 1 12 18zM17 18a.99974.99974 0 0 1-1-1V11a1 1 0 0 1 2 0v6A.99974.99974 0 0 1 17 18z"
        ></path>
        <path
          className="uim-tertiary"
          d="M19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM8,17a1,1,0,0,1-2,0V13a1,1,0,0,1,2,0Zm5,0a1,1,0,0,1-2,0V7a1,1,0,0,1,2,0Zm5,0a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
