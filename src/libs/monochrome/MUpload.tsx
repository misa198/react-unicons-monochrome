import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MUpload: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M19,22H5a3.00328,3.00328,0,0,1-3-3V13a1,1,0,0,1,2,0v6a1.00067,1.00067,0,0,0,1,1H19a1.00067,1.00067,0,0,0,1-1V13a1,1,0,0,1,2,0v6A3.00328,3.00328,0,0,1,19,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M16.707,6.293l-4-4a.99962.99962,0,0,0-1.41406,0l-4,4A.99989.99989,0,0,0,8.707,7.707L11,5.41406V15a1,1,0,0,0,2,0V5.41406l2.293,2.293A.99989.99989,0,0,0,16.707,6.293Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
