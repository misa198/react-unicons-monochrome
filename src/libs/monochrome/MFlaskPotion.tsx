import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFlaskPotion: React.FC<Props> = ({
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
          d="M6.5,14.5c0,3,2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5c0-0.9-0.2-1.7-0.6-2.5H7.1C6.7,12.8,6.5,13.6,6.5,14.5z"
        ></path>
        <circle cx="10" cy="16" r="1" className="uim-primary"></circle>
        <circle cx="14" cy="17" r="1" className="uim-primary"></circle>
        <path
          className="uim-quaternary"
          d="M15,7.6V4h1c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2h-4c0,0,0,0,0,0H8C7.4,2,7,2.4,7,3s0.4,1,1,1h1v3.6c-2.7,1.2-4.5,3.9-4.5,6.9c0,4.1,3.4,7.5,7.5,7.5c3,0,5.7-1.8,6.9-4.5C20.5,13.7,18.8,9.3,15,7.6z M12,20c-3,0-5.5-2.5-5.5-5.5c0-0.9,0.2-1.7,0.6-2.5h9.8c0.4,0.8,0.6,1.6,0.6,2.5C17.5,17.5,15,20,12,20z"
        ></path>
      </svg>
    </Wrapper>
  );
};
