import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPrescriptionBottle: React.FC<Props> = ({
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
          d="M5,19c0.00183,1.65613,1.34387,2.99817,3,3h8c1.65613-0.00183,2.99817-1.34387,3-3V8H5V19z"
        ></path>
        <path
          className="uim-primary"
          d="M19,17h-8c-0.55229,0-1-0.44772-1-1v-4c0-0.55229,0.44771-1,1-1h8V17z"
        ></path>
        <path
          className="uim-quaternary"
          d="M19,8H5C3.89589,7.9989,3.0011,7.10411,3,6V4c0.0011-1.10411,0.89589-1.9989,2-2h14c1.10411,0.0011,1.9989,0.89589,2,2v2C20.9989,7.10411,20.10411,7.9989,19,8z"
        ></path>
      </svg>
    </Wrapper>
  );
};