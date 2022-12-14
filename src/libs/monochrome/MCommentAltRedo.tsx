import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentAltRedo: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M21,22a.99576.99576,0,0,1-.67822-.26562L17.35889,19H9a3.00328,3.00328,0,0,1-3-3V9A3.00328,3.00328,0,0,1,9,6H19a3.00328,3.00328,0,0,1,3,3V21a1.00032,1.00032,0,0,1-1,1Z"
        ></path>
        <path
          className="uim-primary"
          d="M11,2a.99943.99943,0,0,0-1,1v.00452a5,5,0,1,0,.29785,7.74841,1.00007,1.00007,0,1,0-1.3164-1.50586A2.99877,2.99877,0,1,1,9.2326,5H8A1,1,0,0,0,8,7h3a.99943.99943,0,0,0,1-1V3A.99943.99943,0,0,0,11,2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
