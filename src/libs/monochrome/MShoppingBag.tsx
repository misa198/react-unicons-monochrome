import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MShoppingBag: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M17,22H7a3,3,0,0,1-3-3V9A2,2,0,0,1,6,7H18a2,2,0,0,1,2,2V19A3,3,0,0,1,17,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M15,11a.99943.99943,0,0,1-1-1V6a2,2,0,0,0-4,0v4a1,1,0,0,1-2,0V6a4,4,0,0,1,8,0v4A.99943.99943,0,0,1,15,11Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
