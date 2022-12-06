import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MEnvelopeAdd: React.FC<Props> = ({
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
          d="M21.7,6.71l-7.58,7.58c-1.16755,1.17084-3.06319,1.17351-4.23404,0.00596C9.88397,14.29398,9.88198,14.29199,9.88,14.29L2.3,6.71C2.79464,5.66676,3.84544,5.00126,5,5h14C20.15456,5.00126,21.20536,5.66676,21.7,6.71z"
        ></path>
        <path
          className="uim-quaternary"
          d="M21.70001,6.71002L14.12,14.28998c-1.16754,1.17084-3.06317,1.17352-4.23401,0.00598C9.88397,14.29401,9.88196,14.29199,9.88,14.28998L2.29999,6.71002C2.10345,7.11169,2.00085,7.5528,2,8v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3V8C21.99915,7.5528,21.89655,7.11169,21.70001,6.71002z"
        ></path>
        <path
          className="uim-primary"
          d="M19,9c-0.55214,0.00014-0.99986-0.44734-1-0.99948C18,8.00035,18,8.00017,18,8V4c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v4c0.00014,0.55214-0.44734,0.99986-0.99948,1C19.00035,9,19.00017,9,19,9z"
        ></path>
        <path
          className="uim-primary"
          d="M21,7h-4c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h4c0.55228,0,1,0.44772,1,1S21.55228,7,21,7z"
        ></path>
      </svg>
    </Wrapper>
  );
};
