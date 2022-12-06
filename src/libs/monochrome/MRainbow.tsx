import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MRainbow: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-quaternary"
          d="M19,20c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114C17.99171,11.82374,12.17626,6.00829,5,6C4.44772,6,4,5.55228,4,5s0.44772-1,1-1c8.28052,0.00904,14.99096,6.71948,15,15c0.00031,0.55197-0.44689,0.99969-0.99886,1C19.00076,20,19.00038,20,19,20z"
        ></path>
        <path
          className="uim-tertiary"
          d="M15,20c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114c-0.00542-4.96831-4.03169-8.99458-9-9c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1c6.07229,0.00686,10.99314,4.92771,11,11c0.00031,0.55197-0.44689,0.99969-0.99886,1C15.00076,20,15.00038,20,15,20z"
        ></path>
        <path
          className="uim-primary"
          d="M11,20c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114c-0.00324-2.76008-2.23992-4.99676-5-5c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1c3.86406,0.00467,6.99533,3.13594,7,7c0.00031,0.55197-0.44689,0.99969-0.99886,1C11.00076,20,11.00038,20,11,20z"
        ></path>
      </svg>
    </Wrapper>
  );
};
