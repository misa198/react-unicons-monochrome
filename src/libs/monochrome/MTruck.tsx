import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MTruck: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-quaternary"
          d="M22.8,11.9l-2.4-3.2c-0.6-0.8-1.5-1.2-2.4-1.2h-2v10c0,0.6-0.4,1-1,1h7c0,0,0,0,0,0c0.6,0,1-0.4,1-1v-5C23,12.3,22.9,12.1,22.8,11.9z"
        ></path>
        <path
          className="uim-tertiary"
          d="M15,18.5H2c-0.6,0-1-0.4-1-1c0,0,0,0,0,0v-12c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v12C16,18.1,15.6,18.5,15,18.5C15,18.5,15,18.5,15,18.5z"
        ></path>
        <path
          className="uim-primary"
          d="M16 12.5h7c0-.2-.1-.4-.2-.6l-2.4-3.2c-.6-.8-1.5-1.2-2.4-1.2h-2V12.5zM6 21.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3C9 20.2 7.7 21.5 6 21.5zM18 21.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3C21 20.2 19.7 21.5 18 21.5z"
        ></path>
      </svg>
    </Wrapper>
  );
};
