import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MStopwatch: React.FC<Props> = ({
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
          d="M14,4.5h-4c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1S14.6,4.5,14,4.5z"
        ></path>
        <path
          className="uim-quaternary"
          d="M12,14.5c-0.6,0-1-0.4-1-1c0,0,0,0,0,0v-3c0-0.6,0.4-1,1-1s1,0.4,1,1v3C13,14.1,12.6,14.5,12,14.5C12,14.5,12,14.5,12,14.5z"
        ></path>
        <path
          className="uim-tertiary"
          d="M12,5.5c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S16.4,5.5,12,5.5z M13,13.5c0,0.6-0.4,1-1,1c0,0,0,0,0,0c-0.6,0-1-0.4-1-1c0,0,0,0,0,0v-3c0-0.6,0.4-1,1-1s1,0.4,1,1V13.5z"
        ></path>
        <path
          className="uim-primary"
          d="M5.7 8.6c.4-.5.9-1 1.4-1.4L6.2 6.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L5.7 8.6zM18.3 8.6l.9-.9c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-.9.9C17.4 7.6 17.9 8.1 18.3 8.6z"
        ></path>
        <circle cx="12" cy="13.5" r="1.5" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
