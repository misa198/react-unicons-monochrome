import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFileUpload: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M20,9,13,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z"
        ></path>
        <path
          className="uim-primary"
          d="M20 9H15a2 2 0 0 1-2-2V2zM12 18.00031a.99943.99943 0 0 1-1-1v-5a1 1 0 1 1 2 0v5A.99943.99943 0 0 1 12 18.00031z"
        ></path>
        <path
          className="uim-primary"
          d="M14,15.00031a.99676.99676,0,0,1-.707-.293L12,13.41437l-1.293,1.293A.99989.99989,0,0,1,9.293,13.29328l2-2a.99962.99962,0,0,1,1.41406,0l2,2a1,1,0,0,1-.707,1.707Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
