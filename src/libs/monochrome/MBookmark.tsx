import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBookmark: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M18,22a.99971.99971,0,0,1-.5-.13379L12,18.69434,6.5,21.86621A1.00042,1.00042,0,0,1,5,21V5A3.00328,3.00328,0,0,1,8,2h8a3.00328,3.00328,0,0,1,3,3V21a1.00072,1.00072,0,0,1-1,1Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
