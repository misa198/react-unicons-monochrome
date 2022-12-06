import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MDiary: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M6.0022,20.00146l0.0022,0.99951c0.00128,0.55139,0.44861,0.99762,1,0.99756h0.00244c0.00018,0,0.00037,0,0.00055,0c0.55212-0.00153,0.99847-0.45032,0.99701-1.00244l-0.0022-0.99463H6.0022z"
        ></path>
        <rect
          width="2"
          height="18"
          x="14"
          y="2.001"
          className="uim-quaternary"
        ></rect>
        <path
          className="uim-tertiary"
          d="M17,2.00146h-1v17.99951h-2V2.00146H5c-0.55225,0-1,0.44769-1,1v16c0,0.55231,0.44769,1,1,1h12c1.65613-0.00183,2.99817-1.34387,3-3v-12C19.99817,3.34534,18.65613,2.0033,17,2.00146z"
        ></path>
      </svg>
    </Wrapper>
  );
};
