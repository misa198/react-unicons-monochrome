import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPaintTool: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-quaternary"
          d="M15,23h-2c-1.10405-0.00126-1.99874-0.89595-2-2v-4c0.00126-1.10405,0.89595-1.99874,2-2h2c1.10405,0.00126,1.99874,0.89595,2,2v4C16.99874,22.10405,16.10405,22.99874,15,23z"
        ></path>
        <path
          className="uim-tertiary"
          d="M18,9h-8C8.34389,8.99819,7.00181,7.65611,7,6V4c0.00181-1.65611,1.34389-2.99819,3-3h8c1.65611,0.00181,2.99819,1.34389,3,3v2C20.99819,7.65611,19.65611,8.99819,18,9z"
        ></path>
        <path
          className="uim-primary"
          d="M12,11H6c-0.55206-0.00055-0.99945-0.44794-1-1V7c0.00055-0.55206,0.44794-0.99945,1-1h1V4H6C4.34387,4.00183,3.00183,5.34387,3,7v3c0.00183,1.65613,1.34387,2.99817,3,3h6c0.55206,0.00055,0.99945,0.44794,1,1v1h2v-1C14.99817,12.34387,13.65613,11.00183,12,11z"
        ></path>
      </svg>
    </Wrapper>
  );
};
