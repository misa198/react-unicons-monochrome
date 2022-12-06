import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MVenus: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M12,22a.99974.99974,0,0,1-1-1V15a1,1,0,0,1,2,0v6A.99974.99974,0,0,1,12,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M14 20H10a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM12 16a7 7 0 1 1 7-7A7.00818 7.00818 0 0 1 12 16zM12 4a5 5 0 1 0 5 5A5.00588 5.00588 0 0 0 12 4z"
        ></path>
      </svg>
    </Wrapper>
  );
};
