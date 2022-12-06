import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MSearchAlt: React.FC<Props> = ({
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
          className="uim-secondary"
          d="M19.48438,21.98389c-0.66296,0.00107-1.29903-0.26199-1.76758-0.731l-2.9795-2.98047c-0.9744-0.97801-0.97148-2.56076,0.00653-3.53516c0.97546-0.97186,2.55317-0.97186,3.52863,0l2.98047,2.98c0.97634,0.97603,0.97659,2.55874,0.00056,3.53508c-0.00019,0.00019-0.00037,0.00037-0.00056,0.00056l0,0C20.78411,21.7221,20.14766,21.98516,19.48438,21.98389z M20.89941,20.89944L20.89941,20.89944z"
        ></path>
        <path
          className="uim-primary"
          d="M13.18652,14.60059l0.99652,0.99652c0.12244-0.31311,0.30731-0.60736,0.56079-0.85986c0.25104-0.25012,0.54254-0.43335,0.85278-0.55469l-0.99603-0.99603C14.19879,13.72314,13.72314,14.19879,13.18652,14.60059z"
        ></path>
        <circle cx="9.05" cy="9.05" r="5" className="uim-quaternary"></circle>
        <path
          className="uim-tertiary"
          d="M9,2C5.13403,2,2,5.13403,2,9s3.13403,7,7,7s7-3.13403,7-7S12.86597,2,9,2z M9.04999,14.04999c-2.76141,0-5-2.23859-5-5s2.23859-5,5-5s5,2.23859,5,5S11.8114,14.04999,9.04999,14.04999z"
        ></path>
      </svg>
    </Wrapper>
  );
};
