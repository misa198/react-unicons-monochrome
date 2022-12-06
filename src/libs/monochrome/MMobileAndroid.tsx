import React from "react";
import { Wrapper } from "../common/Wrapper";
import "../../assets/styles/monochrome.css";

interface Props {
  size?: number;
  color?: string;
}

export const MMobileAndroid: React.FC<Props> = ({
  size = 24,
  color = "inherit",
}) => {
  return (
    <Wrapper size={size} color={color} className="unicons unicons-monochrome">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em">
        <path
          className="uim-tertiary"
          d="M16,22H8a3.00328,3.00328,0,0,1-3-3V5A3.00328,3.00328,0,0,1,8,2h8a3.00328,3.00328,0,0,1,3,3V19A3.00328,3.00328,0,0,1,16,22Z"
        ></path>
        <path
          className="uim-primary"
          d="M12,18a.99075.99075,0,0,1-.92041-1.37988A1.14883,1.14883,0,0,1,11.29,16.29a1.00957,1.00957,0,0,1,.90967-.27051.65326.65326,0,0,1,.18017.06055.73875.73875,0,0,1,.18018.08984c.0498.04.09961.08008.1499.12012a1.03724,1.03724,0,0,1,.21.33008A.98919.98919,0,0,1,12.71,17.71a1.451,1.451,0,0,1-.33008.21973A.98989.98989,0,0,1,12,18Z"
        ></path>
      </svg>
    </Wrapper>
  );
};
