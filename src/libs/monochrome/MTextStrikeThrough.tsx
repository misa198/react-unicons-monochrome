import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MTextStrikeThrough: React.FC<Props> = ({
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
          d="M17,6H7C6.4,6,6,6.4,6,7s0.4,1,1,1h4v6v0v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3V8h4c0.6,0,1-0.4,1-1S17.6,6,17,6z"
        ></path>
        <path
          className="uim-primary"
          d="M15,14H9c-0.6,0-1-0.4-1-1s0.4-1,1-1h6c0.6,0,1,0.4,1,1S15.6,14,15,14z"
        ></path>
      </svg>
    </Wrapper>
  );
};
