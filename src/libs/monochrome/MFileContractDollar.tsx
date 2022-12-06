import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFileContractDollar: React.FC<Props> = ({
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
          d="M13,7.99969a2,2,0,0,1-2-2v-5H5a3,3,0,0,0-3,3v14a3,3,0,0,0,3,3H15a3,3,0,0,0,3-3v-10Z"
        ></path>
        <path
          className="uim-primary"
          d="M17.25,21H14a1,1,0,0,1,0-2h3.25a.75.75,0,0,0,0-1.5h-1.5a2.75,2.75,0,0,1,0-5.5H19a1,1,0,0,1,0,2H15.75a.75.75,0,0,0,0,1.5h1.5a2.75,2.75,0,0,1,0,5.5Z"
        ></path>
        <path
          className="uim-primary"
          d="M16.5 23a.99974.99974 0 0 1-1-1V20a1 1 0 0 1 2 0v2A.99974.99974 0 0 1 16.5 23zM16.5 14a.99974.99974 0 0 1-1-1V11a1 1 0 0 1 2 0v2A.99974.99974 0 0 1 16.5 14zM18.00329 7.99969h-5a2 2 0 0 1-2-2v-5zM21 22a.99676.99676 0 0 1-.707-.293l-9-9A.99989.99989 0 0 1 12.707 11.293l9 9A1 1 0 0 1 21 22z"
        ></path>
      </svg>
    </Wrapper>
  );
};
