import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentVerify: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M12.00011,22h-9a.99991.99991,0,0,1-.707-1.707L4.257,18.3291A10.00061,10.00061,0,1,1,12.00011,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M10.55957,16a.99676.99676,0,0,1-.707-.293L7.293,13.14746A.99989.99989,0,1,1,8.707,11.7334l1.85254,1.85254,4.7334-4.7334A.99989.99989,0,0,1,16.707,10.2666L11.2666,15.707A.99676.99676,0,0,1,10.55957,16Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
