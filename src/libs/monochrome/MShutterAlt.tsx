import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MShutterAlt: React.FC<Props> = ({
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
          d="M21.53333,9h-7.79956L19.37,18.76001C21.82019,16.0885,22.58984,12.35492,21.53333,9z"
        ></path>
        <path
          className="uim-quaternary"
          d="M15.46625,12l-5.63623,9.76001c3.53931,0.78705,7.15851-0.41321,9.53625-3.00647L15.46625,12z"
        ></path>
        <path
          className="uim-primary"
          d="M13.73383,15H2.46002c1.08783,3.45923,3.93713,5.99384,7.37207,6.75641L13.73383,15z"
        ></path>
        <path
          className="uim-tertiary"
          d="M10.26624,15L4.63,5.23999C2.17981,7.9115,1.41016,11.64508,2.46667,15H10.26624z"
        ></path>
        <path
          className="uim-quaternary"
          d="M8.53375,12l5.63623-9.76001C10.63068,1.45294,7.01147,2.6532,4.63373,5.24646L8.53375,12z"
        ></path>
        <path
          className="uim-primary"
          d="M10.26617,9h11.2738c-1.08783-3.45923-3.93713-5.99384-7.37207-6.75641L10.26617,9z"
        ></path>
      </svg>
    </Wrapper>
  );
};