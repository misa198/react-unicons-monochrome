import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFileLockAlt: React.FC<Props> = ({
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
          d="M17,13c-0.55231,0-1,0.44769-1,1v1h2v-1C18,13.44769,17.55231,13,17,13z"
        ></path>
        <path
          className="uim-tertiary"
          d="M15,17c-0.55212,0.00012-0.99988-0.44733-1-0.99945c0-0.00018,0-0.00037,0-0.00055v-2c0-1.65686,1.34314-3,3-3c0.35254,0,0.68579,0.07202,1,0.18372V8.99969l-7-7H5c-1.65686,0-3,1.34314-3,3v14c0,1.65686,1.34314,3,3,3h10c1.65686,0,3-1.34314,3-3V17H15z"
        ></path>
        <path
          className="uim-primary"
          d="M18,8.99969h-5c-1.10457,0-2-0.89543-2-2v-5L18,8.99969z"
        ></path>
        <path
          className="uim-quaternary"
          d="M19,17h-4c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052v-2c0-1.65685,1.34315-3,3-3s3,1.34315,3,3v2c0.00014,0.55214-0.44734,0.99986-0.99948,1C19.00035,17,19.00017,17,19,17z M16,15h2v-1c0-0.55229-0.44772-1-1-1s-1,0.44771-1,1V15z"
        ></path>
        <path
          className="uim-primary"
          d="M9,18H7c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h2c0.55229,0,1,0.44772,1,1S9.55229,18,9,18z M12,14H7c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h5c0.55229,0,1,0.44771,1,1S12.55229,14,12,14z M8,10H7c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h1c0.55229,0,1,0.44771,1,1S8.55229,10,8,10z M19,22h-4c-1.65611-0.00181-2.99819-1.34389-3-3v-1c0.00181-1.65611,1.34389-2.99819,3-3h4c1.65611,0.00181,2.99819,1.34389,3,3v1C21.99819,20.65611,20.65611,21.99819,19,22z"
        ></path>
      </svg>
    </Wrapper>
  );
};
