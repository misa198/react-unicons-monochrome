import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MLinux: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M12.6 6.5c.1.1.2.1.4.2.1 0 .3.1.5.2 0 0 0 0 .1 0 .2-.3.3-.6.3-.9.1-.6-.4-1.2-1-1.2-.6.1-1 .7-1 1.3 0 0 0 .1 0 .1C12.1 6.2 12.4 6.3 12.6 6.5zM17.1 14.5c-.3-.2-.6-.2-1-.3-.2-.9-.5-1.7-.9-2.5-.6-1.2-1.1-2.4-1.4-3.7-.2.3-.5.5-.9.6-.1.1-.3.1-.4.2-.3.2-.7.4-1.1.4 0 0-.1 0-.1 0-.4 0-.7-.2-.9-.4-.1-.1-.2-.2-.3-.2-.1 0-.1-.1-.2-.1-.1 1.5-1 3.2-1.5 4.3-.3.8-.5 1.6-.5 2.4C7.1 14 7.7 12.5 8 11.9c.4-.8.4-.9.3-.8-.7 1.1-2.1 3.5-.1 4.8 2.1 1.3 2.2 2.6 1 2.5.1.2.3.4.4.5 1.2 1 2.9 1.1 4.2.3 0-.1.1-.3.1-.4h0c.1-.3.2-.7.2-1 .1-1.1.1-2.2.9-2.6.5-.2 1.2-.1 1.6.2.1.1.2.1.3.2.2.1.4.1.5.1.2 0 .4 0 .6 0C18.3 15.3 17.9 14.9 17.1 14.5zM10.2 6.8l.1-.1c.2-.3.5-.4.8-.5 0-.1 0-.1 0-.2 0-.6-.4-1.1-.8-1.1C10 5 9.7 5.5 9.7 6.1c0 .3.1.6.3.8C10.1 6.9 10.2 6.8 10.2 6.8z"
        ></path>
        <path
          className="uim-quaternary"
          d="M8.5,17.4C8.5,17.4,8.5,17.5,8.5,17.4c-0.1-0.1-0.1-0.3-0.2-0.4C8.4,17.2,8.4,17.3,8.5,17.4z"
        ></path>
        <path
          className="uim-tertiary"
          d="M15.4,22c-0.1,0-0.1,0-0.2,0c-0.6-0.1-1.1-0.4-1.3-1c-0.2-0.7-0.2-1.5,0.2-2.2c0.1-0.3,0.2-0.7,0.2-1c0.1-1.1,0.1-2.2,0.9-2.6c0.5-0.2,1.2-0.1,1.6,0.2c0.1,0.1,0.2,0.1,0.3,0.2c0.2,0.1,0.4,0.1,0.5,0.1c0.4-0.1,0.8,0,1.1,0.3c0.3,0.3,0.4,0.6,0.5,1c0,0.2,0.1,0.5,0.2,0.6c0.5,0.5,0.7,1,0.6,1.3c-0.1,0.5-0.6,0.7-1.1,1c-0.5,0.2-1,0.5-1.4,0.9l0,0C17,21.5,16.2,21.9,15.4,22z"
        ></path>
        <path
          className="uim-primary"
          d="M17.9 15.9c-.4.5-1 .8-1.6.8-.6-.1-.8-.9-.7-1.5.1-.7.7-.7 1.5-.4C17.9 15.1 18.2 15.5 17.9 15.9zM12.6 6.6c.1.1.3.1.4.2.2-.2.2-.4.2-.6 0-.4-.2-.7-.4-.7-.2 0-.5.3-.5.7 0 .1 0 .2 0 .3C12.4 6.6 12.5 6.6 12.6 6.6zM10.4 6.8c.1-.1.2-.2.3-.3 0-.1 0-.2 0-.3 0-.3-.2-.6-.4-.5-.2 0-.3.3-.3.6C10.1 6.6 10.3 6.8 10.4 6.8z"
        ></path>
        <path
          className="uim-primary"
          d="M17.3,10.8C17.3,10.8,17.3,10.8,17.3,10.8c-0.8-1.3-2-2.1-2-3.7c0-1.9,0.2-5.4-3.3-5.1C8.5,2.3,9.5,6,9.4,7.3c0,1.1-0.5,2.2-1.3,3.1c-0.1,0.1-0.2,0.3-0.3,0.4c-0.9,1.3-1.9,3-1.8,4.6c0.2-0.1,0.4-0.1,0.5-0.1c0.8,0.1,1.2,0.9,1.7,1.8c0.1,0.1,0.1,0.3,0.2,0.4c0.2,0.3,0.4,0.6,0.6,0.9c0,0,0.1,0.1,0.1,0.1c1.2,0.1,1.2-1.2-1-2.5c-2-1.3-0.6-3.7,0.1-4.8c0.1-0.1,0.1,0-0.3,0.8c-0.3,0.6-0.9,2.1-0.1,3.2c0-0.8,0.2-1.6,0.5-2.4c0.5-1,1.4-2.8,1.5-4.3C9.7,8.3,9.5,8,9.5,7.7c0-0.2,0.1-0.4,0.3-0.6C9.9,7.1,10,7,10.1,6.9C9.9,6.7,9.7,6.4,9.7,6.1C9.7,5.5,10,5,10.4,5c0.4,0,0.7,0.4,0.8,1.1c0,0.1,0,0.1,0,0.2c0.2-0.1,0.5-0.1,0.7,0c0,0,0-0.1,0-0.1c-0.1-0.6,0.3-1.2,1-1.3c0.6,0.1,1.1,0.6,1,1.2c0,0.3-0.1,0.6-0.3,0.9c0.3,0.1,0.5,0.4,0.5,0.7c0,0.2-0.1,0.3-0.2,0.5c0.4,1.3,0.8,2.5,1.4,3.7c0.4,0.8,0.7,1.6,0.9,2.5c0.3,0,0.7,0.1,1,0.3c0,0,0,0,0,0c0.3,0.2,0.6,0.3,0.8,0.5c0.1,0.1,0.1,0.2,0.2,0.2c0,0,0,0.1,0.1,0.1c0,0.1,0,0.2,0,0.3c0.1,0,0.3,0.1,0.4,0.2C19.2,14,18.2,12.1,17.3,10.8z"
        ></path>
        <path
          className="uim-secondary"
          d="M11.4,8.5c-0.5,0-1-0.3-1.4-0.7c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.1,0-0.1-0.1c0,0,0,0,0,0c0-0.1,0.1-0.1,0.1-0.1c0.1,0,0.1,0.1,0.3,0.2c0.3,0.4,0.7,0.6,1.2,0.6c0.5-0.1,1-0.2,1.4-0.5c0.2-0.1,0.4-0.2,0.7-0.3l0,0c0.1,0,0.1,0,0.1,0.1c0,0.1,0,0.1-0.1,0.1c-0.2,0.1-0.4,0.1-0.6,0.3C12.4,8.3,11.9,8.5,11.4,8.5z"
        ></path>
        <path
          className="uim-tertiary"
          d="M13.5 6.9c-.2-.1-.3-.1-.5-.2-.1 0-.3-.1-.4-.2C12 5.9 10.9 6 10.3 6.7l-.1.1C10.2 6.8 10 7 9.8 7.1 9.6 7.3 9.5 7.5 9.5 7.7c.1.4.3.7.7.9.1.1.2.2.3.2.2.3.6.4.9.4 0 0 .1 0 .1 0 .4 0 .8-.1 1.1-.4.1-.1.2-.2.4-.2.5-.1 1-.5 1.1-1.1C14.1 7.3 13.8 7 13.5 6.9zM13.4 7.7c-.2.1-.4.1-.6.3-.4.3-.9.5-1.5.6-.5 0-1-.3-1.4-.7 0 0-.1-.1-.1-.1-.1 0-.1 0-.1-.1 0 0 0 0 0 0 0-.1.1-.1.1-.1.1 0 .1.1.3.2.3.4.7.6 1.2.6.5-.1 1-.2 1.4-.5.2-.1.4-.2.7-.3l0 0C13.5 7.5 13.5 7.5 13.4 7.7 13.5 7.6 13.5 7.7 13.4 7.7zM8.4 21.8c-.6 0-1.2-.2-1.7-.5l0 0c-.5-.2-1-.4-1.6-.4-.7-.1-1.2-.1-1.5-.6-.2-.4-.2-1 0-1.4 0-.2 0-.4 0-.7-.1-.4-.1-.7.1-1.1.2-.3.5-.6.9-.7.2 0 .4-.1.5-.3.1-.1.2-.2.2-.3.2-.5.8-.8 1.3-.8.9.1 1.4 1.1 1.9 2.2.2.3.4.6.6.9.5.7 1.1 1.3 1 2 0 .5-.3 1-.8 1.2C9.1 21.7 8.7 21.8 8.4 21.8z"
        ></path>
        <path
          className="uim-primary"
          d="M13.8,19.4c-1.3,0.7-3,0.6-4.2-0.4c0.1,0.2,0.2,0.3,0.3,0.5c0,0,0,0,0,0.1c0.1,0.3,0.2,0.5,0.2,0.8c0,0.2-0.1,0.3-0.1,0.5c0,0,0,0,0,0c0.5,0,1.1-0.2,2-0.3c0.5,0,1.1,0.1,1.8,0.2C13.7,20.3,13.7,19.8,13.8,19.4z"
        ></path>
      </svg>
    </Wrapper>
  );
};
