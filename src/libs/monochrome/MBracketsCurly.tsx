import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBracketsCurly: React.FC<Props> = ({
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
          className="uim-primary"
          d="M22 11a2.00229 2.00229 0 0 1-2-2V6a4.00427 4.00427 0 0 0-4-4 1 1 0 0 0 0 2 2.00229 2.00229 0 0 1 2 2V9a3.97473 3.97473 0 0 0 1.3822 3A3.97473 3.97473 0 0 0 18 15v3a2.00229 2.00229 0 0 1-2 2 1 1 0 0 0 0 2 4.00427 4.00427 0 0 0 4-4V15a2.00229 2.00229 0 0 1 2-2 1 1 0 0 0 0-2zM6 9V6A2.00229 2.00229 0 0 1 8 4 1 1 0 0 0 8 2 4.00427 4.00427 0 0 0 4 6V9a2.00229 2.00229 0 0 1-2 2 1 1 0 0 0 0 2 2.00229 2.00229 0 0 1 2 2v3a4.00427 4.00427 0 0 0 4 4 1 1 0 0 0 0-2 2.00229 2.00229 0 0 1-2-2V15a3.97473 3.97473 0 0 0-1.3822-3A3.97473 3.97473 0 0 0 6 9z"
        ></path>
      </svg>
    </Wrapper>
  );
};
