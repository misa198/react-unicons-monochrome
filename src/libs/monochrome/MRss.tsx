import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MRss: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M5,21.99805a2.99805,2.99805,0,1,1,2.12109-.877A2.989,2.989,0,0,1,5,21.99805Z"
        ></path>
        <path
          className="uim-secondary"
          d="M11,20a.99943.99943,0,0,1-1-1,5.00128,5.00128,0,0,0-5-5,1,1,0,0,1,0-2,7.0018,7.0018,0,0,1,7,7A.99943.99943,0,0,1,11,20Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M15,20a.99943.99943,0,0,1-1-1,8.999,8.999,0,0,0-9-9A1,1,0,0,1,5,8,10.9995,10.9995,0,0,1,16,19,.99943.99943,0,0,1,15,20Z"
        ></path>
        <path
          className="uim-quaternary"
          d="M19,20a.99943.99943,0,0,1-1-1,13.08688,13.08688,0,0,0-3.80762-9.19238A13.08688,13.08688,0,0,0,5,6,1,1,0,0,1,5,4,15.10129,15.10129,0,0,1,15.60645,8.39355,15.10129,15.10129,0,0,1,20,19,.99943.99943,0,0,1,19,20Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
