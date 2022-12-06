import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentAdd: React.FC<Props> = ({
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
          d="M20.00293,21a.99985.99985,0,0,1-.67822-.26514L16.36182,18H8.00293a3.00328,3.00328,0,0,1-3-3V8a3.00328,3.00328,0,0,1,3-3h10a3.00328,3.00328,0,0,1,3,3V20a1.00032,1.00032,0,0,1-1,1Z"
        ></path>
        <path
          className="uim-primary"
          d="M8.00293,5h-1V4a1,1,0,1,0-2,0V5h-1a1,1,0,1,0,0,2h1V8a1,1,0,0,0,2,0V7h1a1,1,0,0,0,0-2Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
