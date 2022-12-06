import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPlus: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M19,13H5a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,20a.99943.99943,0,0,1-1-1V5a1,1,0,0,1,2,0V19A.99943.99943,0,0,1,12,20Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
