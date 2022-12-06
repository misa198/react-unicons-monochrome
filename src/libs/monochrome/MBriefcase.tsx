import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBriefcase: React.FC<Props> = ({
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
          d="M10,6V5h4v1h2V5c-0.00126-1.10405-0.89595-1.99874-2-2h-4C8.89595,3.00126,8.00126,3.89595,8,5v1H10z"
        ></path>
        <path
          className="uim-quaternary"
          d="M9,15c-0.55214,0.00014-0.99986-0.44734-1-0.99948C8,14.00035,8,14.00017,8,14v-2c0-0.55229,0.44771-1,1-1s1,0.44771,1,1v2c0.00014,0.55214-0.44734,0.99986-0.99948,1C9.00035,15,9.00017,15,9,15z M15,15c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052v-2c0-0.55229,0.44771-1,1-1s1,0.44771,1,1v2c0.00014,0.55214-0.44734,0.99986-0.99948,1C15.00035,15,15.00017,15,15,15z"
        ></path>
        <path
          className="uim-tertiary"
          d="M20,6H4C2.89543,6,2,6.89543,2,8v3c0,1.10457,0.89543,2,2,2h4v-1c0-0.55229,0.44771-1,1-1s1,0.44771,1,1v1h4v-1c0-0.55229,0.44771-1,1-1s1,0.44771,1,1v1h4c1.10457,0,2-0.89543,2-2V8C22,6.89543,21.10457,6,20,6z"
        ></path>
        <path
          className="uim-primary"
          d="M20,13h-4v1c0,0.55229-0.44771,1-1,1s-1-0.44771-1-1v-1h-4v1c0,0.55229-0.44771,1-1,1s-1-0.44771-1-1v-1H4c-1.10457,0-2-0.89543-2-2v8c0,1.10457,0.89543,2,2,2h16c1.10457,0,2-0.89543,2-2v-8C22,12.10457,21.10457,13,20,13z"
        ></path>
      </svg>
    </Wrapper>
  );
};
