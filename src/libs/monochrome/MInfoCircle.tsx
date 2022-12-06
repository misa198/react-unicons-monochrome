import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MInfoCircle: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <circle cx="12" cy="12" r="10" className="uim-tertiary"></circle>
        <path
          className="uim-primary"
          d="M12 17a.99943.99943 0 0 1-1-1V12a1 1 0 0 1 2 0v4A.99943.99943 0 0 1 12 17zM12 9a.9994.9994 0 0 1-.37988-.08008A1.14718 1.14718 0 0 1 11.29 8.71.98946.98946 0 0 1 11 8a.83154.83154 0 0 1 .08008-.37988A1.14718 1.14718 0 0 1 11.29 7.29a1.02883 1.02883 0 0 1 .33008-.21.99414.99414 0 0 1 .75976 0 1.03947 1.03947 0 0 1 .33008.21A1.05232 1.05232 0 0 1 13 8a.99042.99042 0 0 1-1 1z"
        ></path>
      </svg>
    </Wrapper>
  );
};
