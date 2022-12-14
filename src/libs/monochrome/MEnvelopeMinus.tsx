import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MEnvelopeMinus: React.FC<Props> = ({
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
          d="M21.7,5.71l-7.58,7.58c-1.16755,1.17084-3.06319,1.17351-4.23404,0.00596C9.88397,13.29398,9.88198,13.29199,9.88,13.29L2.3,5.71C2.79464,4.66676,3.84544,4.00126,5,4h14C20.15456,4.00126,21.20536,4.66676,21.7,5.71z"
        ></path>
        <path
          className="uim-quaternary"
          d="M21.70001,5.71002L14.12,13.28998c-1.16754,1.17084-3.06317,1.17352-4.23401,0.00598C9.88397,13.29401,9.88196,13.29199,9.88,13.28998L2.29999,5.71002C2.10345,6.11169,2.00085,6.5528,2,7v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3V7C21.99915,6.5528,21.89655,6.11169,21.70001,5.71002z"
        ></path>
        <path
          className="uim-primary"
          d="M21,6h-4c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h4c0.55228,0,1,0.44772,1,1S21.55228,6,21,6z"
        ></path>
      </svg>
    </Wrapper>
  );
};
