import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentAltSearch: React.FC<Props> = ({
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
          d="M19,6h-8.4c0.1,1.2-0.3,2.4-1.2,3.4c-0.8,0.8-1.9,1.3-3.1,1.3c-0.1,0-0.2,0-0.3,0V16c0,1.7,1.3,3,3,3h8.4l3,2.7c0.2,0.2,0.4,0.3,0.7,0.3c0.6,0,1-0.4,1-1V9C22,7.3,20.7,6,19,6z"
        ></path>
        <path
          className="uim-quaternary"
          d="M6.3,10.6c-1.1,0-2.2-0.5-3-1.3l0,0c-1.7-1.7-1.7-4.4,0-6.1s4.4-1.7,6.1,0s1.7,4.4,0,6.1C8.6,10.2,7.5,10.6,6.3,10.6z"
        ></path>
        <path
          className="uim-primary"
          d="M11.7,10.3L10,8.6C9.8,8.8,9.6,9.1,9.4,9.4C9.1,9.6,8.9,9.8,8.6,10l1.7,1.7c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3C12.1,11.3,12.1,10.7,11.7,10.3z"
        ></path>
      </svg>
    </Wrapper>
  );
};
