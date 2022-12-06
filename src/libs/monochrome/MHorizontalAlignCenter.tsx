import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MHorizontalAlignCenter: React.FC<Props> = ({
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
          d="M21,18H3c-0.55214,0.00014-0.99986-0.44734-1-0.99948C2,17.00035,2,17.00017,2,17v-6c-0.00014-0.55214,0.44734-0.99986,0.99948-1C2.99965,10,2.99983,10,3,10h18c0.55214-0.00014,0.99986,0.44734,1,0.99948c0,0.00017,0,0.00035,0,0.00052v6c0.00014,0.55214-0.44734,0.99986-0.99948,1C21.00035,18,21.00017,18,21,18z"
        ></path>
        <path
          className="uim-quaternary"
          d="M19,10V7c0-0.00018,0-0.00037,0-0.00055C18.99988,6.44733,18.55212,5.99988,18,6H6C5.99982,6,5.99963,6,5.99945,6C5.44733,6.00012,4.99988,6.44788,5,7v3H19z"
        ></path>
        <path
          className="uim-primary"
          d="M13 6V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v3H13zM11 18v3c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-3H11z"
        ></path>
      </svg>
    </Wrapper>
  );
};
