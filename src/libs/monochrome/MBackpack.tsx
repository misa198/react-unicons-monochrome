import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBackpack: React.FC<Props> = ({
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
          d="M18 10v9c-.00037.35254-.07269.68579-.18463 1H19c1.65613-.00183 2.99817-1.34387 3-3v-3C21.9975 11.79193 20.20807 10.0025 18 10zM6 19v-9c-2.20807.0025-3.9975 1.79193-4 4v3c.00183 1.65613 1.34387 2.99817 3 3h1.18463C6.07269 19.68579 6.00037 19.35254 6 19z"
        ></path>
        <path
          className="uim-quaternary"
          d="M15,22H9c-1.65611-0.00181-2.99819-1.34389-3-3v-1c0.00252-2.20809,1.79191-3.99748,4-4h4c2.20809,0.00252,3.99748,1.79191,4,4v1C17.99819,20.65611,16.65611,21.99819,15,22z"
        ></path>
        <path
          className="uim-tertiary"
          d="M14,6h-4c-2.20807,0.0025-3.9975,1.79193-4,4v8c0.0025-2.20807,1.79193-3.9975,4-4h4c2.20807,0.0025,3.9975,1.79193,4,4v-8C17.9975,7.79193,16.20807,6.0025,14,6z"
        ></path>
        <path
          className="uim-primary"
          d="M10 6h1V5c0-.55231.44769-1 1-1s1 .44769 1 1v1h1c.34747.00037.67859.0589 1 .14246V5c0-1.65686-1.34314-3-3-3S9 3.34314 9 5v1.14246C9.32141 6.0589 9.65253 6.00037 10 6zM13 12h-2c-.55229 0-1-.44771-1-1s.44771-1 1-1h2c.55229 0 1 .44771 1 1S13.55229 12 13 12z"
        ></path>
      </svg>
    </Wrapper>
  );
};
