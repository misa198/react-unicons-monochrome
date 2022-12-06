import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMeetingBoard: React.FC<Props> = ({
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
          d="M19,18H5c-1.7,0-3-1.3-3-3V5c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1v10C22,16.7,20.7,18,19,18z"
        ></path>
        <path
          className="uim-primary"
          d="M13 4V3c0-.6-.4-1-1-1s-1 .4-1 1v1H13zM14.4 18H9.6l-2.3 2.3C7.1 20.5 7 20.7 7 21c0 .6.4 1 1 1 .3 0 .5-.1.7-.3l2.3-2.3V21c0 .6.4 1 1 1s1-.4 1-1v-1.6l2.3 2.3c.2.2.4.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4L14.4 18zM9 10H7c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1S9.6 10 9 10zM13 14H7c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1S13.6 14 13 14z"
        ></path>
      </svg>
    </Wrapper>
  );
};