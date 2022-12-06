import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentAltShare: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M21.5,22.5c-0.3,0-0.5-0.1-0.7-0.3l-3-2.7H9.5c-1.7,0-3-1.3-3-3v-7c0-1.7,1.3-3,3-3h10c1.7,0,3,1.3,3,3v12C22.5,22.1,22.1,22.5,21.5,22.5z"
        ></path>
        <path
          className="uim-primary"
          d="M9.5,7.5c-0.4,0-0.8,0.1-1.2,0.4L6.6,7.1l1.9-0.9c0.9,0.6,2.2,0.3,2.7-0.7c0.6-0.9,0.3-2.2-0.7-2.7C9.6,2.2,8.4,2.5,7.8,3.5c-0.2,0.3-0.3,0.6-0.3,1L5.6,5.3C4.7,4.7,3.4,5,2.8,5.9S2.4,8,3.4,8.7c0.6,0.4,1.4,0.4,2,0.1l2.1,1c0.1,1.1,1.1,1.9,2.2,1.8s1.9-1.1,1.8-2.2C11.4,8.3,10.5,7.5,9.5,7.5z"
        ></path>
      </svg>
    </Wrapper>
  );
};
