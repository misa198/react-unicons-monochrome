import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MWindowRestore: React.FC<Props> = ({
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
          d="M15,22.0001H5c-1.65611-0.00181-2.99819-1.34389-3-3v-10c0.00181-1.65611,1.34389-2.99819,3-3h10c1.65611,0.00181,2.99819,1.34389,3,3v10C17.99819,20.6562,16.65611,21.99829,15,22.0001z"
        ></path>
        <path
          className="uim-quaternary"
          d="M19,2.00012H9c-1.65613,0.00177-2.99817,1.34387-3,3v1h9c1.65613,0.00177,2.99817,1.34387,3,3v9h1c1.65613-0.00183,2.99817-1.34393,3-3v-10C21.99817,3.34399,20.65613,2.00189,19,2.00012z"
        ></path>
        <path
          className="uim-primary"
          d="M18,10.0001H2v-1c0-1.65685,1.34315-3,3-3h10c1.65685,0,3,1.34315,3,3V10.0001z"
        ></path>
        <path
          className="uim-tertiary"
          d="M22,6.0001H6v-1c0-1.65685,1.34315-3,3-3h10c1.65685,0,3,1.34315,3,3V6.0001z"
        ></path>
      </svg>
    </Wrapper>
  );
};
