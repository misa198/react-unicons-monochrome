import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MParcel: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M19,22H5c-1.7,0-3-1.3-3-3V5c0-1.7,1.3-3,3-3h14c1.7,0,3,1.3,3,3v14C22,20.7,20.7,22,19,22z"
        ></path>
        <path
          className="uim-primary"
          d="M13 16H7c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1S13.6 16 13 16zM7 14h2c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1S6.4 14 7 14zM8 2l0 7c0 .2 0 .3.1.5C8.4 10 9 10.1 9.5 9.9L12 8.5l2.5 1.4C14.7 10 14.8 10 15 10v0c.6 0 1-.4 1-1l0-7c0 0 0 0 0 0L8 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
