import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MRobot: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <circle cx="12" cy="4" r="2" className="uim-tertiary"></circle>
        <path
          className="uim-quaternary"
          d="M12,6c-0.36615,0-0.70483-0.10559-1-0.2774V8c0,0.00018,0,0.00037,0,0.00055C11.00012,8.55267,11.44788,9.00012,12,9c0.00018,0,0.00037,0,0.00055,0C12.55267,8.99988,13.00012,8.55212,13,8V5.7226C12.70483,5.89441,12.36615,6,12,6z"
        ></path>
        <path
          className="uim-tertiary"
          d="M17,22H7c-1.65611-0.00181-2.99819-1.34389-3-3v-9c0.00181-1.65611,1.34389-2.99819,3-3h10c1.65611,0.00181,2.99819,1.34389,3,3v9C19.99819,20.65611,18.65611,21.99819,17,22z"
        ></path>
        <path
          className="uim-primary"
          d="M14.97013,12.24254L16.28076,7H7.71924l1.31063,5.24254C9.14116,12.6877,9.54114,13,10,13h4C14.45886,13,14.85884,12.6877,14.97013,12.24254z"
        ></path>
        <path
          className="uim-quaternary"
          d="M2,18c-0.55214,0.00014-0.99986-0.44734-1-0.99948C1,17.00035,1,17.00017,1,17v-2c0-0.55229,0.44772-1,1-1s1,0.44771,1,1v2c0.00014,0.55214-0.44734,0.99986-0.99948,1C2.00035,18,2.00017,18,2,18z M22,18c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052v-2c0-0.55229,0.44772-1,1-1s1,0.44771,1,1v2c0.00014,0.55214-0.44734,0.99986-0.99948,1C22.00035,18,22.00017,18,22,18z"
        ></path>
        <circle cx="9" cy="16" r="1" className="uim-primary"></circle>
        <circle cx="15" cy="16" r="1" className="uim-primary"></circle>
      </svg>
    </Wrapper>
  );
};
