import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFolderLock: React.FC<Props> = ({
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
          d="M20,17h-4c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052v-2c0-1.65685,1.34315-3,3-3s3,1.34315,3,3v2c0.00014,0.55214-0.44734,0.99986-0.99948,1C20.00035,17,20.00017,17,20,17z M17,15h2v-1c0-0.55229-0.44772-1-1-1s-1,0.44771-1,1V15z"
        ></path>
        <path
          className="uim-tertiary"
          d="M17,14v1h2v-1c0-0.55231-0.44769-1-1-1S17,13.44769,17,14z"
        ></path>
        <path
          className="uim-tertiary"
          d="M21,14V8c-0.00183-1.65613-1.34387-2.99817-3-3h-6.2793l-0.31592-0.94922C10.99695,2.82538,9.85004,1.99902,8.55859,2H4C2.34387,2.00183,1.00183,3.34387,1,5v13c0.00183,1.65613,1.34387,2.99817,3,3h14c1.65613-0.00183,2.99817-1.34387,3-3v-2c0.00012,0.55212-0.44733,0.99988-0.99945,1C20.00037,17,20.00018,17,20,17h-4c-0.55212,0.00012-0.99988-0.44733-1-0.99945c0-0.00018,0-0.00037,0-0.00055v-2c0-1.65686,1.34314-3,3-3S21,12.34314,21,14z"
        ></path>
        <path
          className="uim-primary"
          d="M20,23h-4c-1.65611-0.00181-2.99819-1.34389-3-3v-2c0.00181-1.65611,1.34389-2.99819,3-3h4c1.65611,0.00181,2.99819,1.34389,3,3v2C22.99819,21.65611,21.65611,22.99819,20,23z"
        ></path>
      </svg>
    </Wrapper>
  );
};
