import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MArrowsRightDown: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M7 21a.99676.99676 0 0 1-.707-.293l-3-3A.99989.99989 0 0 1 4.707 16.293L7 18.58594l2.293-2.293A.99989.99989 0 0 1 10.707 17.707l-3 3A.99676.99676 0 0 1 7 21zM17 11a1 1 0 0 1-.707-1.707L18.58594 7 16.293 4.707A.99989.99989 0 0 1 17.707 3.293l3 3a.99962.99962 0 0 1 0 1.41406l-3 3A.99676.99676 0 0 1 17 11z"
        ></path>
        <path
          className="uim-primary"
          d="M7,21a.99943.99943,0,0,1-1-1V9A3.00328,3.00328,0,0,1,9,6H20a1,1,0,0,1,0,2H9A1.00067,1.00067,0,0,0,8,9V20A.99943.99943,0,0,1,7,21Z"
        ></path>
      </svg>
    </Wrapper>
  );
};