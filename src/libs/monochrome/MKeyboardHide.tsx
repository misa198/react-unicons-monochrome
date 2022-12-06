import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MKeyboardHide: React.FC<Props> = ({
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
          d="M4,3h16c1.1,0,2,0.9,2,2v8c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V5C2,3.9,2.9,3,4,3z"
        ></path>
        <path
          className="uim-primary"
          d="M14,12h-4c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1S14.6,12,14,12z"
        ></path>
        <circle cx="6" cy="7" r="1" className="uim-primary"></circle>
        <circle cx="10" cy="7" r="1" className="uim-primary"></circle>
        <circle cx="14" cy="7" r="1" className="uim-primary"></circle>
        <circle cx="18" cy="7" r="1" className="uim-primary"></circle>
        <circle cx="18" cy="11" r="1" className="uim-primary"></circle>
        <circle cx="6" cy="11" r="1" className="uim-primary"></circle>
        <path
          className="uim-primary"
          d="M12,22c-0.3,0-0.5-0.1-0.7-0.3l-2-2c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l1.3,1.3l1.3-1.3c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-2,2C12.5,21.9,12.3,22,12,22z"
        ></path>
      </svg>
    </Wrapper>
  );
};
