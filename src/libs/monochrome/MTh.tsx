import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MTh: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M20.09992,21.00043h-16.2c-0.49677,0.00029-0.89971-0.40219-0.9-0.89896c0-0.00035,0-0.00069,0-0.00104v-16.2c-0.00029-0.49677,0.40219-0.89971,0.89896-0.9c0.00035,0,0.00069,0,0.00104,0h16.2c0.49677-0.00029,0.89971,0.40219,0.9,0.89896c0,0.00035,0,0.00069,0,0.00104v16.2c0.00029,0.49677-0.40219,0.89971-0.89896,0.9C20.10061,21.00043,20.10027,21.00043,20.09992,21.00043z"
        ></path>
        <path
          className="uim-primary"
          d="M20.93555,22h-18c-0.55196,0.00032-0.99968-0.44687-1-0.99884c0-0.00039,0-0.00077,0-0.00116V3C1.93523,2.44804,2.38243,2.00032,2.93439,2c0.00039,0,0.00077,0,0.00116,0h18c0.55197-0.00031,0.99969,0.44689,1,0.99886c0,0.00038,0,0.00076,0,0.00114v18c0.00031,0.55197-0.44689,0.99969-0.99886,1C20.93631,22,20.93593,22,20.93555,22z M3.93555,20h16V4h-16V20z"
        ></path>
        <rect
          width="2"
          height="18"
          x="10.936"
          y="3"
          className="uim-primary"
        ></rect>
        <rect
          width="18"
          height="2"
          x="2.936"
          y="11"
          className="uim-primary"
        ></rect>
      </svg>
    </Wrapper>
  );
};
