import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBasketball: React.FC<Props> = ({
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
        <path
          className="uim-tertiary"
          d="M12,22A10,10,0,1,1,22,12,10.01146,10.01146,0,0,1,12,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M21.83,10.17A9.99452,9.99452,0,0,0,10.17,21.83,10.04316,10.04316,0,0,0,12,22h.25A8.24022,8.24022,0,0,1,12,20a8.01062,8.01062,0,0,1,8-8,8.23727,8.23727,0,0,1,2,.25V12A10.04847,10.04847,0,0,0,21.83,10.17Z"
        ></path>
        <path
          className="uim-primary"
          d="M3.99,6.03A10.46207,10.46207,0,0,0,2.84,8H3A14.01505,14.01505,0,0,1,16.94,20.69a9.88466,9.88466,0,0,0,1.83-1.36A16.02063,16.02063,0,0,0,3.99,6.03Z"
        ></path>
        <path
          className="uim-primary"
          d="M13.83,2.17A9.96592,9.96592,0,0,0,12,2h-.25v.01A8.09705,8.09705,0,0,1,12,4a8.01066,8.01066,0,0,1-8,8,8.09705,8.09705,0,0,1-1.99-.25H2V12a9.96477,9.96477,0,0,0,.17,1.83A9.96066,9.96066,0,0,0,4,14,10.01648,10.01648,0,0,0,14,4,9.96592,9.96592,0,0,0,13.83,2.17Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
