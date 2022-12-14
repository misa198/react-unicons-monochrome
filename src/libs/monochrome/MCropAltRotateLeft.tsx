import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCropAltRotateLeft: React.FC<Props> = ({
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
          d="M20,12h-1V5c0,0,0,0,0,0c0-0.6-0.4-1-1-1h-7V3c0-0.6-0.4-1-1-1S9,2.4,9,3v1H8C7.4,4,7,4.4,7,5s0.4,1,1,1h1v7c0,0,0,0,0,0c0,0.6,0.4,1,1,1h7v1c0,0,0,0,0,0c0,0.6,0.4,1,1,1c0,0,0,0,0,0c0.6,0,1-0.4,1-1v-1h1c0.6,0,1-0.4,1-1S20.6,12,20,12z M11,12V6h6v6H11z"
        ></path>
        <path
          className="uim-primary"
          d="M11.7,18.3l-2-2c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L8.6,18H8c-1.7,0-3-1.3-3-3v-2c0-0.6-0.4-1-1-1s-1,0.4-1,1v2c0,2.8,2.2,5,5,5h0.6l-0.3,0.3c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0l2-2C12.1,19.3,12.1,18.7,11.7,18.3C11.7,18.3,11.7,18.3,11.7,18.3z"
        ></path>
      </svg>
    </Wrapper>
  );
};
