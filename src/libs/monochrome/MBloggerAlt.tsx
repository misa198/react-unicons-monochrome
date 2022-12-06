import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBloggerAlt: React.FC<Props> = ({
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
          d="M20,23H4c-1.65611-0.00181-2.99819-1.34389-3-3V4c0.00181-1.65611,1.34389-2.99819,3-3h16c1.65611,0.00181,2.99819,1.34389,3,3v16C22.99819,21.65611,21.65611,22.99819,20,23z"
        ></path>
        <path
          className="uim-primary"
          d="M16.00293,10.002H16V9c-0.0022-2.20823-1.79177-3.9978-4-4h-2c-2.76008,0.00324-4.99676,2.23992-5,5v4c0.00324,2.76008,2.23992,4.99676,5,5h4c2.76008-0.00324,4.99676-2.23992,5-5v-1C18.9987,11.34515,17.65778,10.00381,16.00293,10.002z M10,9h1c0.55229,0,1,0.44771,1,1s-0.44771,1-1,1h-1c-0.55229,0-1-0.44771-1-1S9.44771,9,10,9z M14,15h-4c-0.55229,0-1-0.44771-1-1s0.44771-1,1-1h4c0.55229,0,1,0.44771,1,1S14.55229,15,14,15z"
        ></path>
      </svg>
    </Wrapper>
  );
};