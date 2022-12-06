import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPricetagAlt: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M12.49121,22h0a.99928.99928,0,0,1-.707-.293L2.58506,12.49845A2,2,0,0,1,2,11.085V5.9046a2,2,0,0,1,.58579-1.41421l1.9046-1.9046A2,2,0,0,1,5.9046,2H11.5a.998.998,0,0,1,.73242.31934L21.707,11.78418a.99963.99963,0,0,1,0,1.41406L13.19824,21.707A.99927.99927,0,0,1,12.49121,22Z"
        ></path>
        <circle cx="7" cy="7" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};