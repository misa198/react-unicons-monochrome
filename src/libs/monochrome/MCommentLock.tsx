import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCommentLock: React.FC<Props> = ({
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
          d="M18.5,8h-4c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052V5c0-1.65685,1.34315-3,3-3s3,1.34315,3,3v2c0.00014,0.55214-0.44734,0.99986-0.99948,1C18.50035,8,18.50017,8,18.5,8z M15.5,6h2V5c0-0.55228-0.44772-1-1-1c-0.55229,0-1,0.44772-1,1V6z"
        ></path>
        <path
          className="uim-tertiary"
          d="M15.51007,4.95001C15.50916,4.96753,15.5,4.98224,15.5,5v1h1.65265C16.6394,5.58478,16.08746,5.23718,15.51007,4.95001z"
        ></path>
        <path
          className="uim-tertiary"
          d="M18.9101,7.90753C18.78448,7.96448,18.64746,7.99994,18.50055,8C18.50037,8,18.50018,8,18.5,8h-4c-0.55212,0.00012-0.99988-0.44733-1-0.99945c0-0.00018,0-0.00037,0-0.00055V5c0-0.25818,0.04272-0.50439,0.10406-0.74347c-2.60834-0.62598-5.466-0.09302-7.72375,1.71124C1.99695,9.07104,1.36456,14.7348,4.46777,18.61816l-1.67474,1.6748c-0.18756,0.18756-0.29297,0.44189-0.29297,0.70715C2.50006,21.55231,2.94775,22,3.5,22h8c2.04187-0.00018,4.02307-0.69464,5.61823-1.9693C20.83051,17.06415,21.56287,11.76172,18.9101,7.90753z"
        ></path>
        <path
          className="uim-primary"
          d="M18.5,14h-4c-1.65611-0.00181-2.99819-1.34389-3-3V9c0.00181-1.65611,1.34389-2.99819,3-3h4c1.65611,0.00181,2.99819,1.34389,3,3v2C21.49819,12.65611,20.15611,13.99819,18.5,14z"
        ></path>
      </svg>
    </Wrapper>
  );
};