import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MEyeSlash: React.FC<Props> = ({
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
          d="M12,16.0003c-2.20914,0-4-1.79086-4-4s1.79086-4,4-4s4,1.79086,4,4C15.9978,14.20852,14.20823,15.99809,12,16.0003z"
        ></path>
        <path
          className="uim-quaternary"
          d="M21.91895,11.6048C19.89941,6.91437,16.09863,4.00031,12,4.00031S4.10059,6.91437,2.08105,11.6048c-0.1084,0.2525-0.1084,0.53845,0,0.79102C4.10059,17.08624,7.90137,20.00031,12,20.00031s7.89941-2.91406,9.91895-7.60449C22.02734,12.14325,22.02734,11.8573,21.91895,11.6048z M12,16.00031c-2.20917,0-4-1.79089-4-4c0-2.20917,1.79083-4,4-4s4,1.79083,4,4C15.9978,14.2085,14.20825,15.99811,12,16.00031z"
        ></path>
        <path
          className="uim-primary"
          d="M21,22.0003c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-18-18C1.89967,3.31968,1.89505,2.6866,2.28267,2.29328s1.0207-0.39795,1.41402-0.01033C3.70015,2.28636,3.70359,2.2898,3.707,2.29326l18,18c0.39049,0.39056,0.39043,1.02373-0.00014,1.41421C21.51938,21.89493,21.26512,22.00025,21,22.0003z"
        ></path>
      </svg>
    </Wrapper>
  );
};
