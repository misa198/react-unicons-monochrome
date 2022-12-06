import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MWindsock: React.FC<Props> = ({
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
          d="M18.08,5L15,4.74l-1-0.08008l-4-0.33984L9,4.24L6.08,4C5.80167,3.97827,5.5267,4.07234,5.32,4.26C5.11711,4.45287,5.00156,4.72007,5,5v8c0.00156,0.27993,0.11711,0.54713,0.32,0.74C5.50669,13.90781,5.74897,14.00045,6,14h0.08L9,13.76l1-0.08008l4-0.34l1-0.08L18.08,13c0.51867-0.04619,0.91712-0.47929,0.92-1V6C18.99712,5.47929,18.59867,5.04619,18.08,5z"
        ></path>
        <path
          className="uim-primary"
          d="M6,22c-0.55214,0.00014-0.99986-0.44734-1-0.99948C5,21.00035,5,21.00017,5,21V3c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v18c0.00014,0.55214-0.44734,0.99986-0.99948,1C6.00035,22,6.00017,22,6,22z"
        ></path>
        <polygon
          className="uim-quaternary"
          points="10 13.68 11 13.595 11 4.405 10 4.32 9 4.24 9 13.76"
        ></polygon>
        <polygon
          className="uim-quaternary"
          points="14 4.66 13 4.575 13 13.425 14 13.34 15 13.26 15 4.74"
        ></polygon>
        <path
          className="uim-quaternary"
          d="M18.08002,5L17,4.90881v8.18231L18.08002,13c0.51868-0.0462,0.91711-0.47931,0.91998-1V6C18.99713,5.47931,18.59869,5.0462,18.08002,5z"
        ></path>
      </svg>
    </Wrapper>
  );
};
