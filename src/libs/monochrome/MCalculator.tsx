import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCalculator: React.FC<Props> = ({
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
          className="uim-quaternary"
          d="M16,11H8c-0.55197,0.00031-0.99969-0.44689-1-0.99886C7,10.00076,7,10.00038,7,10V6C6.99969,5.44803,7.44689,5.00031,7.99886,5C7.99924,5,7.99962,5,8,5h8c0.55197-0.00031,0.99969,0.44689,1,0.99886C17,5.99924,17,5.99962,17,6v4c0.00031,0.55197-0.44689,0.99969-0.99886,1C16.00076,11,16.00038,11,16,11z"
        ></path>
        <path
          className="uim-tertiary"
          d="M18,2H6C4.89545,2,4,2.89545,4,4v16c0,1.10455,0.89545,2,2,2h12c1.10455,0,2-0.89545,2-2V4C20,2.89545,19.10455,2,18,2z M17,6v4c0.00031,0.55194-0.4469,0.99969-0.99884,1C16.00073,11,16.00037,11,16,11H8c-0.55194,0.00031-0.99969-0.4469-1-0.99884C7,10.00073,7,10.00037,7,10V6C6.99969,5.44806,7.4469,5.00031,7.99884,5C7.99927,5,7.99963,5,8,5h8c0.55194-0.00031,0.99969,0.4469,1,0.99884C17,5.99927,17,5.99963,17,6z"
        ></path>
        <circle cx="8" cy="14" r="1" className="uim-primary"></circle>
        <circle cx="8" cy="18" r="1" className="uim-primary"></circle>
        <circle cx="12" cy="18" r="1" className="uim-primary"></circle>
        <circle cx="16" cy="18" r="1" className="uim-primary"></circle>
        <circle cx="16" cy="14" r="1" className="uim-primary"></circle>
        <circle cx="12" cy="14" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};