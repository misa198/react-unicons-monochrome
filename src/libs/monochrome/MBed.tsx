import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBed: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-primary"
          d="M22,19.5c-0.55197,0.00031-0.99969-0.44689-1-0.99886c0-0.00038,0-0.00076,0-0.00114v-3H3v3c0,0.55228-0.44772,1-1,1s-1-0.44772-1-1v-4c-0.00031-0.55197,0.44689-0.99969,0.99886-1c0.00038,0,0.00076,0,0.00114,0h20c0.55197-0.00031,0.99969,0.44689,1,0.99886c0,0.00038,0,0.00076,0,0.00114v4c0.00031,0.55197-0.44689,0.99969-0.99886,1C22.00076,19.5,22.00038,19.5,22,19.5z"
        ></path>
        <path
          className="uim-tertiary"
          d="M20,6.5h-8c-0.00037,0-0.00073,0-0.00116,0C11.4469,6.50031,10.99969,6.94806,11,7.5v6h11c0.55194-0.00031,0.99969,0.4469,1,0.99884V9.5C22.99817,7.84387,21.65613,6.50183,20,6.5z"
        ></path>
        <path
          className="uim-primary"
          d="M2,15.5c-0.55197,0.00031-0.99969-0.44689-1-0.99886C1,14.50076,1,14.50038,1,14.5v-9c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v9c0.00031,0.55197-0.44689,0.99969-0.99886,1C2.00076,15.5,2.00038,15.5,2,15.5z"
        ></path>
        <path
          className="uim-quaternary"
          d="M7,12.5c-1.65685,0-3-1.34315-3-3s1.34315-3,3-3s3,1.34315,3,3C9.99819,11.15611,8.65611,12.49819,7,12.5z"
        ></path>
      </svg>
    </Wrapper>
  );
};
