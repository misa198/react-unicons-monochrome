import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MClipboardAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M15,5h2a2,2,0,0,1,2,2V19a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V7A2,2,0,0,1,7,5h8Z"
        ></path>
        <path
          className="uim-primary"
          d="M11 3h2a2 2 0 0 1 2 2V6a1 1 0 0 1-1 1H10A1 1 0 0 1 9 6V5A2 2 0 0 1 11 3zM15 12H11a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM15 16H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
