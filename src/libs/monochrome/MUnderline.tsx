import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MUnderline: React.FC<Props> = ({
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
          d="M12 15.5a5.00588 5.00588 0 0 1-5-5v-5a1 1 0 0 1 2 0v5a3 3 0 0 0 6 0v-5a1 1 0 0 1 2 0v5A5.00588 5.00588 0 0 1 12 15.5zM17 19.5H7a1 1 0 0 1 0-2H17a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};
