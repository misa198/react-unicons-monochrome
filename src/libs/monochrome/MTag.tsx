import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MTag: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M12.82812,22a2.98152,2.98152,0,0,1-2.12109-.87891L2.293,12.707A.99928.99928,0,0,1,2,12V3A.99943.99943,0,0,1,3,2h9a.99928.99928,0,0,1,.707.293L21.12109,10.707a2.9989,2.9989,0,0,1,0,4.24219l-6.17187,6.17187A2.97817,2.97817,0,0,1,12.82812,22Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
