import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MAlignCenterV: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M14.5,6.5a.99676.99676,0,0,1-.707-.293L12,4.41406,10.207,6.207A.99989.99989,0,0,1,8.793,4.793l2.5-2.5a.99962.99962,0,0,1,1.41406,0l2.5,2.5A1,1,0,0,1,14.5,6.5Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,9a.99974.99974,0,0,1-1-1V3a1,1,0,0,1,2,0V8A.99974.99974,0,0,1,12,9Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M16,13H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,22a.99676.99676,0,0,1-.707-.293l-2.5-2.5A.99989.99989,0,0,1,10.207,17.793L12,19.58594l1.793-1.793A.99989.99989,0,0,1,15.207,19.207l-2.5,2.5A.99676.99676,0,0,1,12,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,22a.99974.99974,0,0,1-1-1V16a1,1,0,0,1,2,0v5A.99974.99974,0,0,1,12,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
