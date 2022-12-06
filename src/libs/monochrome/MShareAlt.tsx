import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MShareAlt: React.FC<Props> = ({
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
          d="M18,10c-2.20914,0-4-1.79086-4-4s1.79086-4,4-4s4,1.79086,4,4C21.99765,8.20816,20.20816,9.99765,18,10z M18,22c-2.20914,0-4-1.79086-4-4s1.79086-4,4-4s4,1.79086,4,4C21.99765,20.20816,20.20816,21.99765,18,22z M6,16c-2.20914,0-4-1.79086-4-4s1.79086-4,4-4s4,1.79086,4,4C9.99765,14.20816,8.20816,15.99765,6,16z"
        ></path>
        <path
          className="uim-primary"
          d="M9.81915 10.87286l5.10223-2.3476c-.42291-.51483-.72577-1.12769-.84937-1.8103L8.79431 9.14337C9.27545 9.61407 9.62341 10.20996 9.81915 10.87286zM14.92139 15.47473l-5.10321-2.34808c-.19623.66272-.54443 1.25848-1.0257 1.72913l5.27954 2.42926C14.19562 16.60242 14.49847 15.98956 14.92139 15.47473z"
        ></path>
      </svg>
    </Wrapper>
  );
};
