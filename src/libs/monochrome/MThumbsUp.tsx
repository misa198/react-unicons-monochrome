import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MThumbsUp: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M21.30285,10.07813A2.99076,2.99076,0,0,0,18.99963,9H14.44006l.484-1.29663a4.31847,4.31847,0,0,0,.16034-2.6919A4.13089,4.13089,0,0,0,11.113,2a1.00364,1.00364,0,0,0-.91705.59375L7.34887,9.0022V22H17.726a3.00077,3.00077,0,0,0,2.95233-2.46387l1.273-7A2.98989,2.98989,0,0,0,21.30285,10.07813Z"
        ></path>
        <path
          className="uim-primary"
          d="M7.34985,9H5.00012a3.00328,3.00328,0,0,0-3,3v7a3.00328,3.00328,0,0,0,3,3H7.34887V9.0022Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
