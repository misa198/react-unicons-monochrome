import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MNoEntry: React.FC<Props> = ({ size = 24, color = "inherit" }) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        width="1em"
      >
        <path
          className="uim-quaternary"
          d="M19.96338,20.73193L18.9267,17H5.0733l-1.03668,3.73193c-0.02411,0.08691-0.03638,0.1767-0.03638,0.26691C4,21.55121,4.44757,21.99927,5,21.99951h14c0.09021-0.00006,0.17999-0.01227,0.26691-0.03638C19.79926,21.81549,20.11108,21.26422,19.96338,20.73193z"
        ></path>
        <path
          className="uim-primary"
          d="M21,22.00049H3c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h18c0.55228,0,1,0.44772,1,1S21.55228,22.00049,21,22.00049z"
        ></path>
        <polygon
          className="uim-tertiary"
          points="16.981 10 7.021 10 8.131 6 15.871 6"
        ></polygon>
        <polygon
          className="uim-tertiary"
          points="6.184 13 5.073 17 18.927 17 17.816 13"
        ></polygon>
        <path
          className="uim-quaternary"
          d="M15.87097,6h0.00006l-0.37262-1.34143C15.06183,3.0871,13.63098,1.99951,12,1.99951S8.93817,3.0871,8.50159,4.65857L8.12897,6h0.00201H15.87097z"
        ></path>
        <polygon
          className="uim-quaternary"
          points="16.981 10 7.021 10 7.018 10 6.184 13 17.816 13 16.982 10"
        ></polygon>
      </svg>
    </Wrapper>
  );
};