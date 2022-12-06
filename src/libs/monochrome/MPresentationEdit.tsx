import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MPresentationEdit: React.FC<Props> = ({
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
          className="uim-tertiary"
          d="M18.99992,16.023h-14a.99974.99974,0,0,1-1-1v-12a.99973.99973,0,0,1,1-1h14a.99974.99974,0,0,1,1,1v12A.99974.99974,0,0,1,18.99992,16.023Z"
        ></path>
        <path
          className="uim-primary"
          d="M11.97794 12.04639H10.163a.74981.74981 0 0 1-.75-.75V9.48145a.74946.74946 0 0 1 .21973-.53028l2.68506-2.68506a.74972.74972 0 0 1 1.06054 0l1.81495 1.81494a.74975.74975 0 0 1 0 1.06055l-2.68506 2.68506A.75009.75009 0 0 1 11.97794 12.04639zM20.99992 4.023h-18a1 1 0 1 1 0-2h18a1 1 0 0 1 0 2zM20.99992 16.023h-18a1 1 0 1 1 0-2h18a1 1 0 0 1 0 2z"
        ></path>
        <path
          className="uim-primary"
          d="M11.99992,22.023a.99974.99974,0,0,1-1-1v-6a1,1,0,1,1,2,0v6A.99974.99974,0,0,1,11.99992,22.023Z"
        ></path>
        <path
          className="uim-primary"
          d="M16.99894,22.023a.99564.99564,0,0,1-.55078-.166l-5-3.30957a1,1,0,0,1,1.10351-1.668l5,3.30957a1,1,0,0,1-.55273,1.834Z"
        ></path>
        <path
          className="uim-primary"
          d="M7.00089,22.023a1,1,0,0,1-.55273-1.834l5-3.30957a1,1,0,1,1,1.10351,1.668l-5,3.30957A.99445.99445,0,0,1,7.00089,22.023Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
