import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MHorizontalAlignRight: React.FC<Props> = ({
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
          d="M21,22c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052V3c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v18c0.00014,0.55214-0.44734,0.99986-0.99948,1C21.00035,22,21.00017,22,21,22z"
        ></path>
        <path
          className="uim-tertiary"
          d="M20,10H3c-0.00018,0-0.00037,0-0.00055,0C2.44733,10.00012,1.99988,10.44788,2,11v6c0,0.00018,0,0.00037,0,0.00055C2.00012,17.55267,2.44788,18.00012,3,18h17V10z"
        ></path>
        <path
          className="uim-quaternary"
          d="M9,6C8.99982,6,8.99963,6,8.99945,6C8.44733,6.00012,7.99988,6.44788,8,7v3h12V6H9z"
        ></path>
      </svg>
    </Wrapper>
  );
};
