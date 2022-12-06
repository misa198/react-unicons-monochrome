import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MClipboard: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M17,22.0001H7a3.00328,3.00328,0,0,1-3-3v-12a3.00328,3.00328,0,0,1,3-3H17a3.00328,3.00328,0,0,1,3,3v12A3.00328,3.00328,0,0,1,17,22.0001Z"
        ></path>
        <path
          className="uim-primary"
          d="M15,8.0001H9a.99973.99973,0,0,1-1-1v-2a3.00328,3.00328,0,0,1,3-3h2a3.00328,3.00328,0,0,1,3,3v2A.99973.99973,0,0,1,15,8.0001Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
