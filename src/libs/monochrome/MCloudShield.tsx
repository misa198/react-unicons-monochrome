import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MCloudShield: React.FC<Props> = ({
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
          d="M18.42926,7.23242A6.99612,6.99612,0,0,0,5.06079,9.12256,3.994,3.994,0,0,0,6,17H17a4.98638,4.98638,0,0,0,1.42926-9.76758Z"
        ></path>
        <path
          className="uim-primary"
          d="M15,14.10026V12.6339A3.73,3.73,0,0,1,12,12a3.73,3.73,0,0,1-3,.6339V15.948a3.59772,3.59772,0,0,0,1.43575,2.89327L12,20l1.56425-1.1587A3.59772,3.59772,0,0,0,15,15.948V14.10026Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,21a.9981.9981,0,0,1-.59473-.19629L9.84082,19.645A4.60872,4.60872,0,0,1,8,15.94824V12.63379a1.00026,1.00026,0,0,1,1.21191-.97754,2.71221,2.71221,0,0,0,2.20118-.46631,1.00278,1.00278,0,0,1,1.17382,0,2.71632,2.71632,0,0,0,2.20118.46631A1.00026,1.00026,0,0,1,16,12.63379v3.31445a4.609,4.609,0,0,1-1.83984,3.69629l-1.56543,1.15918A.9981.9981,0,0,1,12,21Zm-2-7.28418v2.23242a2.6024,2.6024,0,0,0,1.03125,2.08985L12,18.75537l.96973-.71777A2.60267,2.60267,0,0,0,14,15.94824V13.71582a4.70735,4.70735,0,0,1-2-.541A4.70735,4.70735,0,0,1,10,13.71582Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
