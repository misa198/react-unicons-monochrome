import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentUpload: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M11,22H3a.99991.99991,0,0,1-.707-1.707l1.6748-1.67481A9.00077,9.00077,0,1,1,11,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M21.707,5.293l-3-3a.99962.99962,0,0,0-1.41406,0l-3,3A.99989.99989,0,0,0,15.707,6.707L17,5.41406V11a1,1,0,0,0,2,0V5.41406l1.293,1.293A.99989.99989,0,0,0,21.707,5.293Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
