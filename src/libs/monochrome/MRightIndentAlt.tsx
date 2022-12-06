import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MRightIndentAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M21 19H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM21 15H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM21 7H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM21 11H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z"
        ></path>
        <path
          className="uim-primary"
          d="M9 19a.99974.99974 0 0 1-1-1V6a1 1 0 0 1 2 0V18A.99974.99974 0 0 1 9 19zM3.00049 14.667a1.00006 1.00006 0 0 1-.64063-1.76855L3.438 12l-1.07813-.89844A1.00023 1.00023 0 0 1 3.64014 9.56445l2 1.667a1.00062 1.00062 0 0 1 0 1.5371l-2 1.667A.99882.99882 0 0 1 3.00049 14.667z"
        ></path>
      </svg>
    </Wrapper>
  );
};
