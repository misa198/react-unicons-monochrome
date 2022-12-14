import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentCheck: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M12,21H4a.99991.99991,0,0,1-.707-1.707l1.6748-1.67481A9.00077,9.00077,0,1,1,12,21Z"
        ></path>
        <path
          className="uim-primary"
          d="M15.91992,10.75977a.99676.99676,0,0,1-.707-.293L13.293,8.54688A.99989.99989,0,0,1,14.707,7.13281L15.91992,8.3457l3.37305-3.373A.99989.99989,0,0,1,20.707,6.38672L16.627,10.4668A.99676.99676,0,0,1,15.91992,10.75977Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
