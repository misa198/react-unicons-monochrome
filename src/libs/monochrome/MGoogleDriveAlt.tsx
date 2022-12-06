import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MGoogleDriveAlt: React.FC<Props> = ({
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
          className="uim-primary"
          d="M6.00018,19.79588L9,14.59863h12l-3.00005,5.19725H6.00018z"
        ></path>
        <path
          className="uim-quaternary"
          d="M15.00018,14.59863H21L15.00018,4.20412H9L15.00018,14.59863z"
        ></path>
        <path
          className="uim-tertiary"
          d="M3,14.59863l3.00018,5.19725L12,9.40138L9,4.20412L3,14.59863z"
        ></path>
      </svg>
    </Wrapper>
  );
};
