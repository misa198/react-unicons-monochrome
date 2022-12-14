import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentAltUpload: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M20.497,22a.99579.99579,0,0,1-.67823-.26562L16.85592,19H8.497a3.00328,3.00328,0,0,1-3-3V9a3.00328,3.00328,0,0,1,3-3h10a3.00328,3.00328,0,0,1,3,3V21a1.00032,1.00032,0,0,1-1,1Z"
        ></path>
        <path
          className="uim-primary"
          d="M10.207,5.293l-3-3a.99962.99962,0,0,0-1.41406,0l-3,3A.99989.99989,0,0,0,4.207,6.707L5.5,5.41406V11a1,1,0,0,0,2,0V5.41406L8.793,6.707A.99989.99989,0,0,0,10.207,5.293Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
