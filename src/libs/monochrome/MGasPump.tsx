import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MGasPump: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
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
          d="M14,10H2V5c0-1.65685,1.34315-3,3-3h6c1.65685,0,3,1.34315,3,3V10z"
        ></path>
        <path
          className="uim-primary"
          d="M2,19c0.00183,1.65613,1.34387,2.99817,3,3h6c1.65613-0.00183,2.99817-1.34387,3-3v-9H2V19z"
        ></path>
        <path
          className="uim-quaternary"
          d="M22,9.83008v4l-4.25-4.25c-0.53309-0.53441-0.71886-1.32395-0.48-2.04L18.29,4.46l0.1-0.31006L19,4.75l1.54,1.54C21.47777,7.22912,22.00311,8.50292,22,9.83008z"
        ></path>
        <path
          className="uim-primary"
          d="M17.68945,6.27344l0.60052-1.81342l0.10004-0.31006l0.00043,0.00043L18.39001,4.1499l-0.8031-0.80713c-0.3905-0.3905-1.02362-0.3905-1.41406,0c-0.3905,0.3905-0.3905,1.02356,0,1.41406L17.68945,6.27344L17.68945,6.27344z"
        ></path>
        <path
          className="uim-tertiary"
          d="M20,11.83008V19c0,0.55231-0.44769,1-1,1s-1-0.44769-1-1v-2c-0.00183-1.65613-1.34387-2.99817-3-3h-1v2h1c0.55206,0.00055,0.99945,0.44794,1,1v2c0,1.65686,1.34314,3,3,3s3-1.34314,3-3v-5.16992L20,11.83008z"
        ></path>
      </svg>
    </Wrapper>
  );
};
