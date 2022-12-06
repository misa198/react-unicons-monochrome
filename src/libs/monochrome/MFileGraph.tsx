import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFileGraph: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M20,9,13,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z"
        ></path>
        <path
          className="uim-primary"
          d="M20 9H15a2 2 0 0 1-2-2V2zM9 10h1a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2zm5.21045 2.38623l-1.67334 2.15186-.86816-.78125a.9997.9997 0 0 0-1.44971.11865l-2 2.5a.9998.9998 0 1 0 1.56152 1.249l1.33789-1.67236.87891.791a.99989.99989 0 0 0 1.45849-.12939l2.3335-3a1.00005 1.00005 0 0 0-1.5791-1.22754z"
        ></path>
      </svg>
    </Wrapper>
  );
};
