import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCropAltRotateRight: React.FC<Props> = ({
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
          d="M16,18h-1v-7c0,0,0,0,0,0c0-0.6-0.4-1-1-1H7V9c0-0.6-0.4-1-1-1S5,8.4,5,9v1H4c-0.6,0-1,0.4-1,1s0.4,1,1,1h1v7c0,0,0,0,0,0c0,0.6,0.4,1,1,1h7v1c0,0,0,0,0,0c0,0.6,0.4,1,1,1c0,0,0,0,0,0c0.6,0,1-0.4,1-1v-1h1c0.6,0,1-0.4,1-1S16.6,18,16,18z M7,18v-6h6v6H7z"
        ></path>
        <path
          className="uim-primary"
          d="M16,4h-0.6l0.3-0.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0c0,0,0,0,0,0l-2,2c-0.4,0.4-0.4,1,0,1.4c0,0,0,0,0,0l2,2c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4L15.4,6H16c1.7,0,3,1.3,3,3v2c0,0.6,0.4,1,1,1s1-0.4,1-1V9C21,6.2,18.8,4,16,4z"
        ></path>
      </svg>
    </Wrapper>
  );
};