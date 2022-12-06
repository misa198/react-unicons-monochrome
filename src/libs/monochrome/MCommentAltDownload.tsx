import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentAltDownload: React.FC<Props> = ({
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
          d="M6.5,12a.99974.99974,0,0,1-1-1V3a1,1,0,0,1,2,0v8A.99974.99974,0,0,1,6.5,12Z"
        ></path>
        <path
          className="uim-primary"
          d="M6.5,12a.99676.99676,0,0,1-.707-.293l-3-3A.99989.99989,0,0,1,4.207,7.293L6.5,9.58594,8.793,7.293A.99989.99989,0,0,1,10.207,8.707l-3,3A.99676.99676,0,0,1,6.5,12Z"
        ></path>
      </svg>
    </Wrapper>
  );
};