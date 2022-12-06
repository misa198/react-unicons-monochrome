import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MStopwatchSlash: React.FC<Props> = ({
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
          className="uim-quaternary"
          d="M12,14.5c-0.6,0-1-0.4-1-1c0-0.3,0.1-0.5,0.3-0.7l2.1-2.1c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-2.1,2.1C12.5,14.4,12.3,14.5,12,14.5z"
        ></path>
        <path
          className="uim-tertiary"
          d="M12,5.5c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S16.4,5.5,12,5.5z M14.8,12.1l-2.1,2.1c-0.2,0.2-0.4,0.3-0.7,0.3c-0.6,0-1-0.4-1-1c0-0.3,0.1-0.5,0.3-0.7l2.1-2.1c0.4-0.4,1-0.4,1.4,0C15.2,11.1,15.2,11.7,14.8,12.1z"
        ></path>
        <path
          className="uim-primary"
          d="M18.3,8.6l0.9-0.9c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-0.9,0.9C17.4,7.6,17.9,8.1,18.3,8.6z"
        ></path>
        <circle cx="12" cy="13.5" r="1.5" className="uim-primary"></circle>
        <path
          className="uim-primary"
          d="M14,4.5h-4c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1S14.6,4.5,14,4.5z M19,21.5c-0.3,0-0.5-0.1-0.7-0.3l-14-14c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l14,14c0.4,0.4,0.4,1,0,1.4C19.5,21.4,19.3,21.5,19,21.5z"
        ></path>
      </svg>
    </Wrapper>
  );
};