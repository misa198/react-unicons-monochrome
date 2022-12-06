import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MListOlAlt: React.FC<Props> = ({
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
          d="M7 9H6V3A1 1 0 0 0 4 3V4H3A1 1 0 0 0 3 6H4V9H3a1 1 0 0 0 0 2H7A1 1 0 0 0 7 9zM7 20H4v-.08154A.91951.91951 0 0 1 4.918 19a3.05023 3.05023 0 0 0 2.97265-2.18994 2.9913 2.9913 0 0 0-.50585-2.62451 2.99585 2.99585 0 0 0-4.98243.314.99956.99956 0 1 0 1.73047 1.001 1.03182 1.03182 0 0 1 1.66211-.10108.99079.99079 0 0 1 .166.88379A1.06208 1.06208 0 0 1 4.918 17 2.92117 2.92117 0 0 0 2 19.91846V21a.99974.99974 0 0 0 1 1H7a1 1 0 0 0 0-2z"
        ></path>
        <path
          className="uim-tertiary"
          d="M21 6H11a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 11H11a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 22H11a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 17H11a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z"
        ></path>
      </svg>
    </Wrapper>
  );
};