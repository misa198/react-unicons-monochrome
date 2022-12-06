import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCrown: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-tertiary"
          d="M4.03027,16.24268l-2-8A1.00014,1.00014,0,0,1,3.457,7.11035l3.85156,1.979L11.1748,3.43555a1.03743,1.03743,0,0,1,1.6504,0l3.86621,5.65381,3.85156-1.979a1.00014,1.00014,0,0,1,1.42676,1.13233l-2,8Z"
        ></path>
        <path
          className="uim-primary"
          d="M19.96973,16.24268H4.03027L4,16.12158V20a.99974.99974,0,0,0,1,1H19a.99974.99974,0,0,0,1-1V16.12158Z"
        ></path>
        <circle cx="12" cy="12" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
