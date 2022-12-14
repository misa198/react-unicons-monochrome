import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MEdit: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M19,22.0003H5a3.00328,3.00328,0,0,1-3-3v-14a3.00328,3.00328,0,0,1,3-3h6a1,1,0,0,1,0,2H5a1.00067,1.00067,0,0,0-1,1v14a1.00068,1.00068,0,0,0,1,1H19a1.00068,1.00068,0,0,0,1-1v-6a1,1,0,1,1,2,0v6A3.00328,3.00328,0,0,1,19,22.0003Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M11.24268,18.0003H7a.99974.99974,0,0,1-1-1V12.75713a.99928.99928,0,0,1,.293-.707l9.75976-9.75684a.99965.99965,0,0,1,1.41407,0L21.707,6.53252a.99962.99962,0,0,1,0,1.41406l-9.75732,9.76075A1.00014,1.00014,0,0,1,11.24268,18.0003Z"
        ></path>
        <path
          className="uim-primary"
          d="M17.4668,2.29326a.99965.99965,0,0,0-1.41407,0L12.51318,5.83172l5.65387,5.6538.00629-.004L21.707,7.94658a.99962.99962,0,0,0,0-1.41406Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
