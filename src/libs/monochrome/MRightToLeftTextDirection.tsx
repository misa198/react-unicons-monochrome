import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MRightToLeftTextDirection: React.FC<Props> = ({
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
          className="uim-primary"
          d="M18.5,2h-7a4,4,0,0,0,0,8v4a1,1,0,0,0,2,0V4h2V14a1,1,0,0,0,2,0V4h1a1,1,0,0,0,0-2Zm-7,6a2,2,0,0,1,0-4Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M20.5,17H5.91406l1.293-1.293A.99989.99989,0,0,0,5.793,14.293l-3,3a.99962.99962,0,0,0,0,1.41406l3,3A.99989.99989,0,0,0,7.207,20.293L5.91406,19H20.5a1,1,0,0,0,0-2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
