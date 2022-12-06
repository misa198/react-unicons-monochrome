import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPen: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M7.24268,22.0003H3a.99974.99974,0,0,1-1-1V16.75713a.99928.99928,0,0,1,.293-.707L16.05273,2.29326a.99965.99965,0,0,1,1.41407,0L21.707,6.53252a.99962.99962,0,0,1,0,1.41406L7.94971,21.70733A1.00014,1.00014,0,0,1,7.24268,22.0003Z"
        ></path>
        <path
          className="uim-primary"
          d="M21.707,6.53252,17.4668,2.29326a.99965.99965,0,0,0-1.41407,0L12.5155,5.83013l5.6543,5.65308L21.707,7.94658A.99962.99962,0,0,0,21.707,6.53252Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
