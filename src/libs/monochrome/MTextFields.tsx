import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MTextFields: React.FC<Props> = ({
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
          d="M15 5H3A1 1 0 0 0 3 7H8V18a1 1 0 0 0 2 0V7h5a1 1 0 0 0 0-2zM21 11H15a1 1 0 0 0 0 2h2v5a1 1 0 0 0 2 0V13h2a1 1 0 0 0 0-2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
