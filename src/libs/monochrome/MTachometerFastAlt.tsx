import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MTachometerFastAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <circle cx="12.003" cy="15" r="2" className="uim-quaternary"></circle>
        <path
          className="uim-tertiary"
          d="M12.00293,5A9.99987,9.99987,0,0,0,3.34277,20a.99985.99985,0,0,0,.86621.5h15.5879a.99985.99985,0,0,0,.86621-.5A9.99987,9.99987,0,0,0,12.00293,5ZM12.003,17a2,2,0,1,1,2-2A2,2,0,0,1,12.003,17Z"
        ></path>
        <path
          className="uim-primary"
          d="M16.252,10.76465a.99964.99964,0,0,0-1.41406-.00342L12.5166,13.075a1.99225,1.99225,0,0,1,1.41266,1.41541l2.31879-2.31116A1.00023,1.00023,0,0,0,16.252,10.76465Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
