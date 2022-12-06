import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MTaxi: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M21,20.5H3c-0.6,0-1-0.4-1-1c0,0,0,0,0,0v-6c0-1.7,1.3-3,3-3h14c1.7,0,3,1.3,3,3v6C22,20.1,21.6,20.5,21,20.5C21,20.5,21,20.5,21,20.5z"
        ></path>
        <path
          className="uim-primary"
          d="M4 20.5v1c0 0 0 0 0 0 0 .6.4 1 1 1 0 0 0 0 0 0 .6 0 1-.4 1-1v-1H4zM18 20.5v1c0 0 0 0 0 0 0 .6.4 1 1 1 0 0 0 0 0 0 .6 0 1-.4 1-1v-1H18z"
        ></path>
        <path
          className="uim-quaternary"
          d="M5,10.5h14c0.4,0,0.7,0.1,1,0.2V7.5c0-1.7-1.3-3-3-3H7c-1.7,0-3,1.3-3,3v3.2C4.3,10.6,4.6,10.5,5,10.5z"
        ></path>
        <path
          className="uim-primary"
          d="M16.2 4.5l-.8-2.3c-.1-.4-.5-.7-.9-.7h-5c-.4 0-.8.3-.9.7L7.8 4.5H16.2zM13 16.5h-2c-.6 0-1-.4-1-1 0-.6.4-1 1-1h2c.6 0 1 .4 1 1C14 16.1 13.6 16.5 13 16.5zM7 16.5c-.5 0-1-.4-1-1 0 0 0 0 0 0 0-.3.1-.5.3-.7.1-.1.2-.2.3-.2.4-.2.8-.1 1.1.2C7.9 15 8 15.2 8 15.5c0 .3-.1.5-.3.7-.1.1-.2.2-.3.2C7.3 16.5 7.1 16.5 7 16.5zM17 16.5c-.1 0-.3 0-.4-.1-.1-.1-.2-.1-.3-.2C16.1 16 16 15.8 16 15.5c0-.3.1-.5.3-.7 0 0 .1-.1.1-.1.1 0 .1-.1.2-.1.1 0 .1 0 .2-.1.2 0 .4 0 .6.1.1 0 .2.1.3.2.2.2.3.4.3.7 0 .1 0 .3-.1.4-.1.1-.1.2-.2.3C17.5 16.4 17.3 16.5 17 16.5z"
        ></path>
      </svg>
    </Wrapper>
  );
};
