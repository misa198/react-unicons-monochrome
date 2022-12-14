import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MNotes: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M18,22H6c-1.7,0-3-1.3-3-3V5c0-0.6,0.4-1,1-1h16c0.6,0,1,0.4,1,1v14C21,20.7,19.7,22,18,22z"
        ></path>
        <path
          className="uim-primary"
          d="M16,12h-6c-0.6,0-1-0.4-1-1s0.4-1,1-1h6c0.6,0,1,0.4,1,1S16.6,12,16,12z M12,8c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1s1,0.4,1,1v4C13,7.6,12.6,8,12,8z M8,8C7.4,8,7,7.6,7,7V3c0-0.6,0.4-1,1-1s1,0.4,1,1v4C9,7.6,8.6,8,8,8z M16,8c-0.6,0-1-0.4-1-1V3c0-0.6,0.4-1,1-1c0.6,0,1,0.4,1,1v4C17,7.6,16.6,8,16,8z M16,16H8c-0.6,0-1-0.4-1-1s0.4-1,1-1h8c0.6,0,1,0.4,1,1S16.6,16,16,16z"
        ></path>
      </svg>
    </Wrapper>
  );
};
