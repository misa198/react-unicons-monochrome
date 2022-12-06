import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentSearch: React.FC<Props> = ({
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
          d="M19.2,8.4c-0.7,1.2-2,1.9-3.4,1.9c-2.2,0-4-1.8-4-4c0-0.8,0.3-1.6,0.7-2.3C10.2,3.8,7.8,4.4,5.9,6C2,9.1,1.4,14.7,4.5,18.6l-1.7,1.7c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.6,0.4,1,1,1h8c2,0,4-0.7,5.6-2C20.7,17.2,21.5,12.2,19.2,8.4z"
        ></path>
        <circle cx="15.8" cy="6.3" r="4" className="uim-quaternary"></circle>
        <path
          className="uim-primary"
          d="M21.2,10.3l-2-2c-0.3,0.6-0.8,1.1-1.4,1.4l2,2c0.2,0.2,0.4,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3C21.6,11.3,21.6,10.7,21.2,10.3z"
        ></path>
      </svg>
    </Wrapper>
  );
};
