import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBookMedical: React.FC<Props> = ({
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
          className="uim-tertiary"
          d="M15,18H5c-1.65611-0.00181-2.99819-1.34389-3-3V5c0.00181-1.65611,1.34389-2.99819,3-3h10c1.65611,0.00181,2.99819,1.34389,3,3v10C17.99819,16.65611,16.65611,17.99819,15,18z"
        ></path>
        <path
          className="uim-quaternary"
          d="M18,5v10c-0.00183,1.65613-1.34387,2.99817-3,3H5c0.00183,1.65613,1.34387,2.99817,3,3h10c1.65613-0.00183,2.99817-1.34387,3-3V8C20.99817,6.34387,19.65613,5.00183,18,5z"
        ></path>
        <path
          className="uim-primary"
          d="M13,9h-2V7c0-0.55228-0.44771-1-1-1S9,6.44772,9,7v2H7c-0.55228,0-1,0.44771-1,1s0.44772,1,1,1h2v2c0,0.55229,0.44771,1,1,1s1-0.44771,1-1v-2h2c0.55229,0,1-0.44771,1-1S13.55229,9,13,9z"
        ></path>
      </svg>
    </Wrapper>
  );
};
