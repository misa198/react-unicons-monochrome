import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MAngry: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M12,22C6.5,22,2,17.5,2,12S6.5,2,12,2s10,4.5,10,10C22,17.5,17.5,22,12,22z"
        ></path>
        <path
          className="uim-primary"
          d="M15 17.1c-.2 0-.5-.1-.6-.2-1.4-1.1-3.3-1.1-4.7 0-.4.4-1.1.3-1.4-.1-.4-.4-.3-1.1.1-1.4 2.1-1.8 5.2-1.8 7.3 0 .4.4.5 1 .1 1.4C15.6 17 15.3 17.1 15 17.1zM14 11c-.6 0-1-.4-1-1 0-.4.2-.7.6-.9l2-1c.5-.2 1.1 0 1.3.4s0 1.1-.4 1.3c0 0 0 0 0 0l-2 1C14.3 11 14.2 11 14 11zM10 11c-.2 0-.3 0-.4-.1l-2-1C7.1 9.6 6.9 9 7.1 8.6 7.4 8.1 8 7.9 8.4 8.1l2 1c.5.2.7.8.4 1.3C10.7 10.8 10.4 11 10 11z"
        ></path>
      </svg>
    </Wrapper>
  );
};