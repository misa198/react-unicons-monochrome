import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MBluetoothB: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-primary"
          d="M11.99512,22.00977a1,1,0,0,1-1-1V14.41992L8.20117,17.208a.9999.9999,0,0,1-1.41211-1.416L10.58887,12,6.78906,8.208A.9999.9999,0,0,1,8.20117,6.792l2.794,2.78809V2.99023a.99991.99991,0,0,1,1.707-.707L17.21191,6.793a.99962.99962,0,0,1,0,1.41406L13.419,12l3.793,3.793a.99962.99962,0,0,1,0,1.41406L12.70215,21.7168A.99982.99982,0,0,1,11.99512,22.00977Zm1-7.60547v4.1914L15.09082,16.5Zm0-9V9.5957L15.09082,7.5Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
