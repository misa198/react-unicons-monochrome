import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCrockery: React.FC<Props> = ({
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
          className="uim-primary"
          d="M7,22c-0.6,0-1-0.4-1-1c0,0,0,0,0,0V3c0-0.6,0.4-1,1-1s1,0.4,1,1v18C8,21.6,7.6,22,7,22C7,22,7,22,7,22z"
        ></path>
        <path
          className="uim-primary"
          d="M7,12c-0.2,0-0.4-0.1-0.6-0.2l-3-2C3.2,9.6,3,9.3,3,9V3c0-0.6,0.4-1,1-1s1,0.4,1,1v5.5l2,1.3l2-1.3V3c0-0.6,0.4-1,1-1s1,0.4,1,1v6c0,0.3-0.2,0.6-0.4,0.8l-3,2C7.4,11.9,7.2,12,7,12z"
        ></path>
        <path
          className="uim-tertiary"
          d="M18,12.2V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v9.2c-1.8,0.5-3,2.1-3,4c0,2,1.5,5.8,4,5.8s4-3.8,4-5.8C21,14.3,19.8,12.7,18,12.2z"
        ></path>
      </svg>
    </Wrapper>
  );
};