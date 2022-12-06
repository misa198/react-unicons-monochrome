import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentAltSlash: React.FC<Props> = ({
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
          d="M4.59912,19.916A.99907.99907,0,0,1,4,19V7A3.00328,3.00328,0,0,1,7,4H17a3.00328,3.00328,0,0,1,3,3v7a3.00328,3.00328,0,0,1-3,3H8.64111L5.67822,19.73437a.9987.9987,0,0,1-1.0791.18165Z"
        ></path>
        <path
          className="uim-primary"
          d="M21,22a.99676.99676,0,0,1-.707-.293l-18-18A.99989.99989,0,0,1,3.707,2.293l18,18A1,1,0,0,1,21,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
