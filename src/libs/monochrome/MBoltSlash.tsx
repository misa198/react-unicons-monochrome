import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBoltSlash: React.FC<Props> = ({
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
          d="M15.6,15.6l-5.6,6.1C9.9,21.9,9.6,22,9.3,22c-0.6,0-1-0.4-1-1c0-0.1,0-0.2,0-0.3l1.8-6.7H6.3c-0.6,0-1-0.4-1-1c0-0.1,0-0.2,0-0.3l1.4-5.3L8,3L8,2.7C8.2,2.3,8.5,2,9,2h7c0.6,0,1,0.4,1,1c0,0.1,0,0.2,0,0.3L15.7,8h4.5c0.6,0,1,0.4,1,1c0,0.2-0.1,0.5-0.3,0.7l-2.6,2.9L15.6,15.6z"
        ></path>
        <path
          className="uim-primary"
          d="M21,22c-0.3,0-0.5-0.1-0.7-0.3l-18-18c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l18,18c0.4,0.4,0.4,1,0,1.4C21.5,21.9,21.3,22,21,22z"
        ></path>
      </svg>
    </Wrapper>
  );
};
