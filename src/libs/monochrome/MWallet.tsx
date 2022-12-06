import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MWallet: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M2,5.33333L2,5.33333c-0.00001,1.2273,0.99491,2.22222,2.22221,2.22223c0,0,0.00001,0,0.00001,0h15.55556C21.00508,7.55556,22,8.55048,22,9.77778v8.88889c0,1.2273-0.99492,2.22222-2.22222,2.22222H4.22222C2.99492,20.88889,2,19.89397,2,18.66667V5.33333"
        ></path>
        <path
          className="uim-tertiary"
          d="M4.22223,7.55554h13.33331V5.11108c0-1.10455-0.89539-2-2-2H4c-1.10455,0-2,0.89545-2,2v0.22223C2,6.56061,2.99493,7.55554,4.22223,7.55554z"
        ></path>
        <path
          className="uim-primary"
          d="M22,17.0001h-2.88158c-1.46071,0.0265-2.73903-0.9769-3.06026-2.4021c-0.32754-1.62688,0.72579-3.21126,2.35267-3.53879C18.6048,11.02015,18.80214,11.00036,19,11.0001h3V17.0001z"
        ></path>
      </svg>
    </Wrapper>
  );
};
