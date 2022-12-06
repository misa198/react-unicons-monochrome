import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MAngleRight: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M9.87891,17.24268a1,1,0,0,1-.707-1.707L12.707,12,9.17188,8.46436a.99989.99989,0,0,1,1.41406-1.41407L14.82812,11.293a.99962.99962,0,0,1,0,1.41406l-4.24218,4.24268A.99678.99678,0,0,1,9.87891,17.24268Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
