import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMoneyWithdraw: React.FC<Props> = ({
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
          className="uim-quaternary"
          d="M12,18c-1.65685,0-3-1.34315-3-3s1.34315-3,3-3s3,1.34315,3,3C14.99819,16.65611,13.65611,17.99819,12,18z"
        ></path>
        <path
          className="uim-tertiary"
          d="M20,8H4c-1.65613,0.00183-2.99817,1.34387-3,3v8c0.00183,1.65613,1.34387,2.99817,3,3h16c1.65613-0.00183,2.99817-1.34387,3-3v-8C22.99817,9.34387,21.65613,8.00183,20,8z M12,18c-1.65686,0-3-1.34314-3-3s1.34314-3,3-3s3,1.34314,3,3C14.99817,16.65613,13.65613,17.99817,12,18z"
        ></path>
        <circle cx="6" cy="15" r="1" className="uim-primary"></circle>
        <circle cx="18" cy="15" r="1" className="uim-primary"></circle>
        <path
          className="uim-primary"
          d="M12,10c-0.55214,0.00014-0.99986-0.44734-1-0.99948C11,9.00035,11,9.00017,11,9V3c0-0.55228,0.44771-1,1-1s1,0.44772,1,1v6c0.00014,0.55214-0.44734,0.99986-0.99948,1C12.00035,10,12.00017,10,12,10z"
        ></path>
        <path
          className="uim-primary"
          d="M12,10c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2.25-2.25C8.65609,7.06298,8.66184,6.42991,9.05586,6.043c0.38896-0.38195,1.01218-0.38195,1.40114,0L12,7.58594l1.543-1.543c0.39296-0.38799,1.02604-0.38396,1.41403,0.009c0.38451,0.38944,0.3845,1.01564-0.00003,1.40506l-2.25,2.25C12.51971,9.89485,12.26527,10.0003,12,10z"
        ></path>
      </svg>
    </Wrapper>
  );
};
