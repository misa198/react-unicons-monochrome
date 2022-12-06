import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MFeedback: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-primary"
          d="M9.0249,23H2a.99974.99974,0,0,1-1-1V14.05469a1.00455,1.00455,0,0,1,.08594-.40625L3.332,8.59375A1.00026,1.00026,0,0,1,4.24609,8a3.25689,3.25689,0,0,1,3.05176,4.39453l-.24609.66016H9.94385a2.44424,2.44424,0,0,1,2.40527,2.88183l-.91943,5.05567A2.44274,2.44274,0,0,1,9.0249,23Z"
        ></path>
        <path
          className="uim-tertiary"
          d="M19.75391,16a3.25689,3.25689,0,0,1-3.05176-4.39453l.24609-.66016H14.05615a2.44424,2.44424,0,0,1-2.40527-2.88183l.91943-5.05567A2.44274,2.44274,0,0,1,14.9751,1H22a.99974.99974,0,0,1,1,1V9.94531a1.00455,1.00455,0,0,1-.08594.40625L20.668,15.40625A1.00026,1.00026,0,0,1,19.75391,16ZM22,9.94531h0Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
