import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBackspace: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M19,19H9.82812A2.98152,2.98152,0,0,1,7.707,18.12109L2.293,12.707a.99962.99962,0,0,1,0-1.41406L7.707,5.87891A2.98152,2.98152,0,0,1,9.82812,5H19a3.00328,3.00328,0,0,1,3,3v8A3.00328,3.00328,0,0,1,19,19Z"
        ></path>
        <path
          className="uim-primary"
          d="M15.41418,12,16.707,10.707A.99993.99993,0,0,0,15.29285,9.293L14,10.58569,12.70709,9.293A.99993.99993,0,0,0,11.29291,10.707L12.58575,12l-1.29284,1.29272A1,1,0,0,0,12.70709,14.707L14,13.41406l1.29285,1.293A1,1,0,0,0,16.707,13.29272Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
