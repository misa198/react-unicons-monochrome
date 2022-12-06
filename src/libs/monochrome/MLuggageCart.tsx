import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MLuggageCart: React.FC<Props> = ({
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
          d="M17,16.5H3c-0.6,0-1-0.4-1-1c0,0,0,0,0,0v-8c0-1.7,1.3-3,3-3h10c1.7,0,3,1.3,3,3v8C18,16.1,17.6,16.5,17,16.5C17,16.5,17,16.5,17,16.5z"
        ></path>
        <path
          className="uim-primary"
          d="M15 4.5H5c-1.7 0-3 1.3-3 3v3h16v-3C18 5.8 16.7 4.5 15 4.5zM8 19.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3C11 18.2 9.7 19.5 8 19.5zM21 12.5c-.6 0-1 .4-1 1v1h-2v1c0 .6-.4 1-1 1 0 0 0 0 0 0v0h4c0 0 0 0 0 0 .6 0 1-.4 1-1v-2C22 12.9 21.6 12.5 21 12.5z"
        ></path>
      </svg>
    </Wrapper>
  );
};
