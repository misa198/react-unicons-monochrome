import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MDiaryAlt: React.FC<Props> = ({
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
          className="uim-tertiary"
          d="M17,22H5c-0.55228,0-1-0.44772-1-1V3c0-0.55228,0.44772-1,1-1h12c1.65611,0.00181,2.99819,1.34389,3,3v14C19.99819,20.65611,18.65611,21.99819,17,22z"
        ></path>
        <path
          className="uim-primary"
          d="M4,21V3c0-0.55228,0.44772-1,1-1h3v20H5C4.44772,22,4,21.55228,4,21z"
        ></path>
      </svg>
    </Wrapper>
  );
};
