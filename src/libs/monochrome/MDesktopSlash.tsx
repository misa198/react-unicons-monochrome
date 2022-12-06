import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MDesktopSlash: React.FC<Props> = ({
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
          d="M17,20H7c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h10c0.55228,0,1,0.44772,1,1S17.55228,20,17,20z"
        ></path>
        <path
          className="uim-tertiary"
          d="M18,16H6c-1.65611-0.00181-2.99819-1.34389-3-3V7c0.00181-1.65611,1.34389-2.99819,3-3h12c1.65611,0.00181,2.99819,1.34389,3,3v6C20.99819,14.65611,19.65611,15.99819,18,16z"
        ></path>
        <path
          className="uim-primary"
          d="M11 16v3c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-3H11zM21 22c-.26527.0003-.51971-.10515-.707-.293l-18-18C1.90605 3.31302 1.91175 2.67995 2.30573 2.293c.38897-.38203 1.0123-.38203 1.40127 0l18 18c.39046.39058.39037 1.02375-.00021 1.41421C21.51931 21.89463 21.26509 21.99994 21 22z"
        ></path>
      </svg>
    </Wrapper>
  );
};
