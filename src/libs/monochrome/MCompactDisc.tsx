import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCompactDisc: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M12,2A10,10,0,1,0,22,12,10.01177,10.01177,0,0,0,12,2Zm0,11a1,1,0,1,1,1-1A1.00067,1.00067,0,0,1,12,13Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,15a3,3,0,1,1,3-3A3.00328,3.00328,0,0,1,12,15Zm0-4a1,1,0,1,0,1,1A1.00067,1.00067,0,0,0,12,11Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
