import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MThumbsDown: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M19,15H16a.99943.99943,0,0,1-1-1V3a.99943.99943,0,0,1,1-1h3a3.00328,3.00328,0,0,1,3,3v7A3.00328,3.00328,0,0,1,19,15Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M16.64459,2H6.27344a2.99929,2.99929,0,0,0-2.951,2.46289l-1.27265,7A2.99932,2.99932,0,0,0,5.001,15H9.56055l-.48481,1.29712a4.3133,4.3133,0,0,0-.1604,2.69018A4.132,4.132,0,0,0,12.8866,22a1.00373,1.00373,0,0,0,.91711-.59375l2.84088-6.39355Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
