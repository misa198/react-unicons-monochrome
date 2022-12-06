import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MHeartbeat: React.FC<Props> = ({
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
          d="M11,19.9c-0.7,0-1.4-0.3-2-0.8l-5.4-5.4c-2.2-2.2-2.2-5.8,0-8c2-2,5.1-2.2,7.3-0.6c2.6-1.8,6.1-1.2,7.9,1.3c1.6,2.3,1.4,5.4-0.6,7.3L13,19.1C12.4,19.6,11.7,19.9,11,19.9z"
        ></path>
        <path
          className="uim-primary"
          d="M16.5,14.4L16.5,14.4c-0.3,0-0.6-0.1-0.8-0.3L13,10.9l-1.2,1.2c-0.2,0.2-0.4,0.3-0.7,0.3H9c-0.6,0-1-0.4-1-1s0.4-1,1-1h1.6l1.7-1.7c0.2-0.2,0.5-0.3,0.7-0.3c0.3,0,0.5,0.1,0.7,0.3l2.8,3.2l1.2-1.2c0.2-0.2,0.4-0.3,0.7-0.3H21c0.6,0,1,0.4,1,1s-0.4,1-1,1h-2.1l-1.7,1.7C17,14.3,16.8,14.4,16.5,14.4z"
        ></path>
      </svg>
    </Wrapper>
  );
};
