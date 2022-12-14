import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMedkit: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M22,11H2V9c0-1.7,1.3-3,3-3h14c1.7,0,3,1.3,3,3V11z"
        ></path>
        <path
          className="uim-quaternary"
          d="M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H2V19z"
        ></path>
        <path
          className="uim-primary"
          d="M9 6V5c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1h2V5c0-1.7-1.3-3-3-3h-4C8.3 2 7 3.3 7 5v1H9zM14 15h-1v-1c0-.6-.4-1-1-1-.6 0-1 .4-1 1v1h-1c-.6 0-1 .4-1 1s.4 1 1 1h1v1c0 .6.4 1 1 1 .6 0 1-.4 1-1v-1h1c.6 0 1-.4 1-1S14.6 15 14 15z"
        ></path>
      </svg>
    </Wrapper>
  );
};
