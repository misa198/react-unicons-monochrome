import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentAltCheck: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M20.5,22a.99576.99576,0,0,1-.67822-.26562L16.85889,19H8.5a3.00328,3.00328,0,0,1-3-3V9a3.00328,3.00328,0,0,1,3-3h10a3.00328,3.00328,0,0,1,3,3V21a1.00032,1.00032,0,0,1-1,1Z"
        ></path>
        <path
          className="uim-primary"
          d="M6.06006,9.44043a1.00012,1.00012,0,0,1-.707-.293L2.793,6.58691A.99989.99989,0,0,1,4.207,5.17285l1.853,1.85352L10.793,2.293A.99989.99989,0,1,1,12.207,3.707L6.76709,9.14746A1.00012,1.00012,0,0,1,6.06006,9.44043Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
