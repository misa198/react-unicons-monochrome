import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMapMarkerShield: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M12,22.05957a.99676.99676,0,0,1-.707-.293L5.98926,16.46387h0a8.50043,8.50043,0,1,1,12.02148,0L12.707,21.7666A.99676.99676,0,0,1,12,22.05957Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,14.95312a.99809.99809,0,0,1-.59473-.19628l-1.36914-1.01368A4.15888,4.15888,0,0,1,8.375,10.4082V7.50781a.99876.99876,0,0,1,.37207-.77832,1.01586,1.01586,0,0,1,.84082-.19922,2.26873,2.26873,0,0,0,1.8252-.38672.99967.99967,0,0,1,1.17382,0,2.27984,2.27984,0,0,0,1.8252.38672,1.00054,1.00054,0,0,1,1.21289.97754V10.4082a4.16073,4.16073,0,0,1-1.66016,3.335l-1.37011,1.01368A.99809.99809,0,0,1,12,14.95312Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
