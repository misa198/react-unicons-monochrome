import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MInbox: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M5.1,4h14c0.6,0,1,0.4,1,1v14c0,0.6-0.4,1-1,1h-14c-0.6,0-1-0.4-1-1V5C4.1,4.4,4.5,4,5.1,4z"
        ></path>
        <path
          className="uim-primary"
          d="M22.1,14V5c0-1.7-1.3-3-3-3h-14c-1.7,0-3,1.3-3,3v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3L22.1,14C22.1,14,22.1,14,22.1,14z M5.1,4h14c0.6,0,1,0.4,1,1v8h-2.5c-0.7,0-1.3,0.3-1.7,0.9L14.5,16H9.6l-1.4-2.1c-0.4-0.6-1-0.9-1.7-0.9H4.1V5C4.1,4.4,4.5,4,5.1,4z"
        ></path>
      </svg>
    </Wrapper>
  );
};
